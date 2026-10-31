import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('out');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = createServer(async (request, response) => {
  try {
    let file = resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (file !== root && !file.startsWith(root + '/')) throw new Error('outside root');
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    response.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
    response.end(await readFile(file));
  } catch { response.writeHead(404).end(); }
});
await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
let tags = 0;
await context.route('https://www.googletagmanager.com/**', async route => {
  tags++;
  await route.fulfill({ status: 200, contentType: 'application/javascript', body: '' });
});
const page = await context.newPage();
try {
  await page.goto(origin + '/');
  await page.getByRole('button', { name: 'Reject analytics' }).waitFor();
  assert.equal(tags, 0, 'tag must not load before consent');
  await page.getByRole('button', { name: 'Reject analytics' }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Analytics settings' }).waitFor();
  assert.equal(tags, 0, 'tag must not load after rejection');
  await page.getByRole('button', { name: 'Analytics settings' }).click();
  await page.getByRole('button', { name: 'Accept analytics' }).click();
  await page.waitForFunction(() => document.querySelector('#rtm-ga-script'));
  await page.waitForTimeout(500);
  assert.equal(tags, 1, 'tag must load after acceptance');
  const commands = await page.evaluate(() => window.dataLayer);
  assert(commands.some(row => row[0] === 'event' && row[1] === 'page_view'), 'accepted page view is queued');
  await page.getByRole('button', { name: 'Analytics settings' }).click();
  await Promise.all([page.waitForEvent('load'), page.getByRole('button', { name: 'Reject analytics' }).click()]);
  await page.getByRole('button', { name: 'Analytics settings' }).waitFor();
  assert.equal(await page.evaluate(() => localStorage.getItem('rtm-website-analytics-choice-v1')), 'rejected');
  assert.equal(tags, 1, 'withdrawal must prevent another tag load');
  await page.goto(origin + '/fr/');
  await page.getByRole('button', { name: 'Paramètres d’analyse' }).waitFor();
  assert.equal(tags, 1, 'rejection must persist on French pages');
  await page.goto(origin + '/');
  await page.getByRole('button', { name: 'Analytics settings' }).click();
  await page.getByRole('button', { name: 'Accept analytics' }).click();
  await page.waitForFunction(() => document.querySelector('#rtm-ga-script'));
  await page.waitForTimeout(500);
  assert.equal(tags, 2);
  await page.evaluate(() => { Storage.prototype.setItem = () => { throw new Error('blocked'); }; });
  await page.getByRole('button', { name: 'Analytics settings' }).click();
  await Promise.all([page.waitForEvent('load'), page.getByRole('button', { name: 'Reject analytics' }).click()]);
  await page.getByRole('button', { name: 'Reject analytics' }).waitFor();
  assert.equal(await page.evaluate(() => localStorage.getItem('rtm-website-analytics-choice-v1')), null);
  assert.equal(tags, 2, 'withdrawal clears acceptance even if saving rejection fails');
  const blocked = await browser.newContext();
  await blocked.addInitScript(() => {
    Storage.prototype.setItem = () => { throw new Error('blocked'); };
  });
  const blockedPage = await blocked.newPage();
  await blockedPage.goto(origin + '/');
  await blockedPage.getByRole('button', { name: 'Accept analytics' }).click();
  await blockedPage.getByText("Your browser could not save your choice.", { exact: false }).waitFor();
  assert.equal(await blockedPage.locator('#rtm-ga-script').count(), 0, 'cannot enable analytics if consent cannot be saved');
  await blocked.close();
  console.log('Consent browser checks passed');
} finally {
  await browser.close();
  await new Promise(resolveClose => server.close(resolveClose));
}
