# Saved run, missing map — editorial evidence

Prepared November 8, 2026 for the 14-day daily-guide trial. **Draft only; owner approval required before publication.**

## Question and scope

Why did an outdoor run save its distance and time but not show a route map? The guide separates recent sync delay, Health route read access and location permission for recording. It does not promise reconstruction of a route that was never recorded. The site has no published guide on this topic. Pending FIT export, chest-strap and track-lane guides address different tasks; the existing phone-free guide receives a related link.

Search Console was unavailable: no connector was exposed; browser inventory reported the Mac locked, and opening Search Console through Chrome failed with a browser runtime error. No query volumes, rankings, visits or download estimates are asserted. The trial began October 31 and remains within its 14-day window; no schedule was changed.

## Original sources opened November 8

- [Why no Apple Watch Map/Route Data?](https://www.reddit.com/r/AppleWatchFitness/comments/1u7br2j/why_no_apple_watch_maproute_data/). Search metadata dates the question to June 16, 2026; the opened cached page uses relative ages. The author reports an outdoor run without its route despite checking permissions. A reply describes brief delays, but the author says several hours had passed. This is anecdotal motivation, not evidence of prevalence or a specific diagnosis. A self-promoting reply's GPS claims are not treated as technical authority.
- [Apple Watch Outdoor Run Didn't sync Route](https://www.reddit.com/r/AppleWatch/comments/1wql44g/apple_watch_outdoor_run_didnt_sync_route/). Search metadata dates it to September 26, 2026; the cached page uses relative ages. A runner reports a dot instead of the route. Replies suggest waiting or checking permissions; one recommends resetting the Watch. The guide does not adopt that destructive suggestion or diagnose a hardware fault from a thread.
- [Apple: Manage Health data](https://support.apple.com/en-us/108779). Opened original support page documents Health → profile → Privacy → Apps and per-app categories. Exact publication/update date was not confirmed in the retrieved excerpt.
- [Apple: Privacy and Location Services](https://support.apple.com/en-us/102515). Opened original supports per-app authorization and explains that an app may not appear before requesting access. Exact update date not confirmed.
- [Apple Watch settings path](https://support.apple.com/en-au/guide/watch/apdea7480950/26/watchos/26). Opened original documents Settings → Privacy & Security → Location Services. Cited only for that system path, not as a RunToMax test.
- [Public RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Opened and checked: version 1.3.5. Release-source mapping is in `docs/public-release-facts.md`; development main was not used as evidence of shipping features.

The Apple Developer route page exposed only a JavaScript wrapper; its linked Markdown fetch failed. It is not used as substantive evidence. No quotes, testimonials, firsthand tests, medical benefits or recovery guarantees were invented.

## Verification and publication gate

Product instructions were checked against release source, not a new device session. No app screenshots are included: this is a short settings checklist, and capturing an unreleased or fabricated screen would be misleading.

Before publication, check the actual Health menu/category labels and RunToMax location permission on a shipping iPhone/Watch. Use a synthetic test workout to verify the Runs notice, return from Health and delayed route behavior. Check a treadmill run as a no-route control. Record OS/app versions and observed limitations. Do not use the owner's health history for testing.

The guide definition has `published: null`; metadata is noindex, and no publication timestamp is emitted. Its index card is prepared but hidden until a publication date is set; the existing sitemap generator automatically includes published guide definitions. Set the real date and update the review record only after approval. Do not merge, deploy or publish this draft.

## Validation completed November 8

- `npm ci --no-audit --no-fund`: passed; no dependency or lockfile changes.
- `npm run build -- --webpack`: passed, including TypeScript and static export. The existing Next.js/React 18 deprecation warning remains; no dependency upgrade was attempted for this article.
- `python3 scripts/check-seo.py`: passed for 21 published pages, 25 images and 28 JSON-LD blocks.
- Separate assertions on the exported draft: one H1; matching canonical/social description; article and breadcrumb schema; both robots directives set to noindex; no publication timestamp; internal links resolve; existing App Store campaign link present. Draft absent from the public index and sitemap.
- The App Store campaign link returned HTTP 200 after redirects. Original external evidence links were opened during research.
- Local static preview in isolated headless Chrome at 320, 390 and 1440 pixels: HTTP 200, no horizontal overflow or page errors, correct draft metadata and working back navigation. Mobile and desktop screenshots inspected; permission steps given explicit numbering and spacing, then build and browser checks rerun.
- `git diff --check`: passed. Consent code was not changed. No deployment, production flag/data change or access to personal workout records.

Local review artifacts: `/private/tmp/rtm-guide-map-20261108-evidence/` contains screenshots and `browser-checks.json`; `/private/tmp/rtm-guide-build-20261108.log` contains the build log. These are temporary local evidence, not published assets.

**Still pending:** shipping-device permission flow and synthetic-workout checks described above, plus article-specific owner approval. Search Console data remains unavailable. Passing website checks does not close those product-verification gaps.

## November 20 review for the November 21 slot

The live hub and merged PR #47 confirmed that the November 20 cadence guide was already published. Reused this draft. In the [original complaint and follow-ups](https://www.reddit.com/r/AppleWatchFitness/comments/1u7br2j/why_no_apple_watch_maproute_data/), a GPS-only Series 7 runner confirmed selecting Outdoor Run. Their previous runs with the phone had maps. This time the route was missing several hours later, despite location settings appearing enabled. The thread does not establish a cause or a recovery. The guide now starts by asking which app can still show the route. A map in Fitness directs the reader to Health read access. A missing map there directs them to the recording app, sync and location access for future runs.

Read Apple’s documentation on [Watch GPS without its paired phone](https://support.apple.com/en-euro/guide/watch/apd0443fb403/watchos), [app-specific Health access](https://support.apple.com/en-us/108779) and [the Watch Location Services path](https://support.apple.com/en-gb/guide/personal-safety/ips9bf20ad2f/web). Apple’s location page was readable in the public search service; a direct automated fetch was rate-limited. The campaign link returned HTTP 200. An authenticated Search Console report was unavailable.

Apple’s US lookup returned 1.4. The paired iPhone and Watch had been verified at 1.4 (63) earlier that day. Ran the submission tag’s RunNoMapTests and RunDetailLoadOutcomeTests on an isolated iPhone simulator. All 10 tests passed with synthetic workouts, including a late-arriving outdoor route and an indoor workout without GPS. These checks verify app behavior, not the cause of the runner’s missing route or a physical GPS recovery. Removed the older draft’s unverified banner and alternate menu path.

Locked install and production static export passed, as did the repository SEO check (25 published pages) and browser checks at 375 and 1280 px. The draft has a canonical URL, social metadata, article and breadcrumb schema, noindex, and no publication date. Its registry and hub entries are prepared for release. The visible hub and sitemap exclude it. The first local build stopped on the framework dependency advisory after export; the repeat production build passed. Owner approval for this article is pending.
