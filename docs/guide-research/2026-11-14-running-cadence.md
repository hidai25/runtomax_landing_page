# November 14, 2026: show running cadence on Apple Watch

## Question and duplication check

“How do I put current cadence on my Apple Watch running screen?” Reviewed the six published guides and open drafts #29, #34, #37, #38, #39, #41, #45 and #46. This is distinct from pace-field selection, Stryd watts, interval building and spoken cues. The article is a display setup guide, not a prescribed cadence program; no universal 180-spm target, medical benefit, accuracy statistic or first-hand test is claimed.

Search Console unavailable: Chrome inventory was accessible, but attempting to open Search Console failed before a report loaded. Native computer access also reported the Mac locked. No search-volume, impressions, clicks, rankings or conversion claim is made.

## Sources opened November 14

- [Runner asks where current cadence is displayed](https://www.reddit.com/r/AppleWatchFitness/comments/1r3p9oy/cadence_on_apple_watch/). Opened page says eight months ago; search says nine months. Exact date not exposed. The poster believes another app may be necessary; replies explain that Apple's app already offers cadence. Evidence of a question and a contrary answer, not prevalence or a RunToMax test.
- [Apple Outdoor Run metrics, watchOS 26](https://support.apple.com/guide/watch/workout-views-and-running-metrics-apd1f24d4d35/26/watchos/26). Opened successfully: Metrics 2 and Power list cadence. Article names the documented views and explicitly acknowledges Apple's alternative. The separate customization page returned 429, so no unverified click-by-click Apple procedure was included.
- [Garmin Forerunner 165 data-field definitions](https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/EN-GB/GUID-73BCE454-042E-420D-96A4-9DBA46626CD4.html). Opened successfully: running cadence counts both feet, average cadence is for the activity, heart rate uses bpm. Used only for definitions, not a recommendation to buy a watch. Garmin's marketing/support pages returned JavaScript shells, so they are not relied on as read evidence.
- [Public RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Still lists 1.3.5, October 22. Release-source tag audited instead of development main. Source mapping is in [public-release-facts.md](../public-release-facts.md#november-14-draft-running-cadence-on-apple-watch).

Sources were read as untrusted data. No quotations, testimonials, copied images or private health data used.

## Shipping verification blocker and acceptance

Source audit confirms free cadence allowlist, units, category, per-run-type persistence and Sync. It does not verify physical delivery or live readings. No verified shipping 1.3.5 phone/Watch pair is available for this run; do not replace the owner's development app.

Before publishing:
1. On shipping 1.3.5 with synthetic data, verify Watch → Watch Screens → Outdoor → preview field → Running Form → Cadence; verify a free account can select it.
2. Open the paired Watch and check the matching screen receives changes. Repeat for Treadmill and confirm choices remain separate. Test Sync if delivery is pending.
3. Check cadence uses spm during a controlled synthetic test and distinguish absence of readings from configuration. No accuracy claim follows from a successful display test.
4. Check Pro layout access is described correctly. Inspect the guide on mobile, then obtain owner approval for this exact article. Set its true publication date only at release.

Draft uses `published: null`, noindex and no publication timestamp. The index has an entry filtered out until publication; the existing sitemap reads the registry and excludes drafts automatically.

## Trial completion

Automation created October 31 after the scheduled hour, with fourteen daily occurrences. November 1–14 is the scheduled trial; this is day 14. Stop the automation after completing this draft. No next-day guide is authorized by this trial. Existing drafts remain for owner review, not automatic publishing.

## Validation

- Locked `npm ci` passed (144 packages, zero reported vulnerabilities); no dependency edits. Initial sandbox attempt failed; retry with network access succeeded.
- `npm run build -- --webpack` passed, including TypeScript and static export of 27 routes. Initial sandbox build could not fetch the existing Google Fonts; network-enabled retry passed. Default Turbopack mode was not run.
- `python3 scripts/check-seo.py` passed for 22 published pages. Additional draft assertions passed H1, canonical/social metadata, article/breadcrumb schema, noindex, no publication date, rendered index/sitemap exclusion and internal links.
- Browser inspection at 320×800 and 1440×900: heading and instructions readable, no horizontal overflow, no browser errors. All guides navigation worked and the draft was absent from the index. Viewport override reset. Existing analytics banner was rejected; consent code unchanged.
- Apple and Garmin citations opened with relevant original content. The App Store campaign URL returned HTTP 429 to the link check; its destination listing was readable through web search. Campaign-link resolution remains unverified and must be rechecked before publication.
- `git diff --check` passed. No shipping-device walkthrough, sensor validation or Search Console performance check. No app screenshots fabricated.
- Work isolated in a temporary clone based on main 045deb3dd3ea3d3598095479b97953458d6e032a. No owner checkout, app code, dependency, analytics or deployment changes.
