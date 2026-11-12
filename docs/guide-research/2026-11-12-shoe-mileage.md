# November 12, 2026 — running-shoe mileage guide

## Editorial choice and duplicate check

Question: how can an Apple Watch runner keep mileage for each pair of shoes, including distance accumulated before using RunToMax?

Checked the published guide registry and the website PR list. Published topics cover intervals, treadmill correction, running without iPhone, pace fields, Ultra controls and Stryd power. Existing draft topics cover FIT export, heart-rate straps, track lanes, missing maps, pauses and GPX routes. None covers shoe assignments or starting-mileage overlap. Prepare only this one new article today.

Search Console could not be opened: the connected Chrome tool failed before navigation. No Search Console metrics, keyword volume, ranking, traffic or expected-download claim is made.

## Opened original sources

- [Shoe mileage tracking, r/AppleWatch](https://www.reddit.com/r/AppleWatch/comments/1wx6f02/shoe_mileage_tracking/). Retrieved November 12. Search labels it last month; the opened cached page has relative 9-days-ago labels and was crawled last month. An absolute posting date could not be confirmed; this is not described as a newly posted November question. One runner asks about keeping shoe mileage after changing watch ecosystems. Replies describe Strava and retaining another service, with differing preferences. This establishes an individual question, not prevalence or proof that one app is best. The post's hardware wording is not used as product evidence.
- [How Do I Add Gear to My Activities on Strava?](https://support.strava.com/en-us/articles/15402143-how-do-i-add-gear-to-my-activities-on-strava). Official support, dated September 10, 2026; retrieved November 12. Documents shoes, defaults and changing gear on an activity. The guide offers it as an alternative, without suggesting RunToMax synchronizes those assignments.
- [RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Retrieved November 12; current listed version 1.3.5, dated October 22. Release source checked separately as recorded in public-release-facts.md. No rating, testimonial or download claim copied.

The article uses original prose and no third-party artwork, competitor plans, medical claims or invented credentials. The mileage example is synthetic. No real workout or health records were opened.

## Verification required before publication

Use a shipping 1.3.5 test installation with synthetic runs, not the development redesign or the owner's personal history:

1. Confirm Watch → Shoes, the Pro gate, add/edit labels and visible units.
2. Create two synthetic pairs, with starting distance 240 km and zero. Assign one synthetic 10 km saved run; confirm 250 km for the first pair.
3. Reassign to the second pair, then Unassigned; confirm both totals and that the run distance stays unchanged.
4. Check that assigning historical runs already covered by the starting figure adds their distance; correct the starting amount and confirm the resulting total.
5. Confirm Watch-recorded test runs arrive on iPhone and become assignable; no physical shoe identification is expected.
6. Owner approves this exact article; set its actual publication date, enable discovery through the existing registry/index/sitemap filtering and repeat export checks.

Device blocker: iPhone Mirroring reported iPhone Not Found. The walkthrough above is not completed. There are no new app screenshots or claimed first-hand tests. Keep the PR draft and do not merge or deploy.

## Website checks

- `npm ci`: passed from the existing lockfile; no dependency changes.
- `npm run build -- --webpack`: passed including TypeScript and 27 static routes. Default `npm run build` first failed on restricted Google Fonts access; its network-enabled retry hit the environment's Turbopack internal port restriction. Existing React 18 deprecation warning only on the successful build. No package-script or deployment-configuration changes.
- `python3 scripts/check-seo.py`: passed for all 22 published pages. A separate exported-draft check passed one H1, canonical/social metadata, article and breadcrumb schema, no publication timestamp, noindex, hidden index card, sitemap exclusion, internal links and the existing website-guides campaign URL. The existing sitemap derives entries automatically from published guide definitions; no manual sitemap entry is appropriate while unpublished.
- Local in-app browser: 320, 390 and 1440 px widths, no horizontal overflow. Mobile header/instructions and desktop layout visually inspected; no browser error logs. All guides navigation worked and the draft was absent from the rendered index. Viewport override reset after checks.
- App Store campaign link followed its redirect to HTTP 200. Both original citations opened successfully; local links checked against exported files. Analytics/consent code was not touched.
- `git diff --check`: passed. Screenshots are retained locally at `~/Developer/runtomax/output/guide-trial/2026-11-12/` and are website previews, not app screenshots.

**Remaining blockers:** physical shipping-device walkthrough and article-specific owner approval. No production publication, merge or deployment performed. Search Console remains unavailable; no demand figures claimed.
