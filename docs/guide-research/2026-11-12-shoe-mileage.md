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

## November 22 review for the November 23 publishing slot

A [runner moving from Garmin to Apple Watch](https://www.reddit.com/r/AppleWatch/comments/1wx6f02/shoe_mileage_tracking/) missed being able to track each pair’s miles. The guide explains how to carry a total forward and how to correct a run assigned to the wrong pair. A manual log works too. [Strava’s gear support](https://support.strava.com/en-us/articles/15402143-how-do-i-add-gear-to-my-activities-on-strava) documents another option for runners who already use Strava. No authenticated Search Console data was available for this question.

The US store lists version 1.4.1. The November 21 release archive contains iPhone and Watch apps at 1.4.1 (65). In build-65 source at 78bb6a0b the iPhone path is You → Gear and routes → Shoes. The library supports a starting distance, a Watch picker and a default pair. Saved workouts let the runner correct the shoe. These steps supersede the November 12 instructions.

On an isolated iPhone simulator, the shoe library displayed synthetic active and retired pairs, their distances, Add a pair, and Choose shoes on Apple Watch. Eleven tests in ShoeBaseKmTests and WatchShoeSelectionTests passed, including a temporary example that starts a pair at 240 km, assigns a 10 km run and then transfers it to a second pair. The original pair returned to 240 km and the second pair showed 10 km. Watch selection and correction were checked in release source and simulator tests. No physical Watch run was recorded.

The production export and SEO checks passed for 34 published pages. At 375 px and 1280 px, the draft displayed without overflow and its guide-hub link worked. Canonical and social metadata, article and breadcrumb markup, draft noindex and exclusion from the hub and sitemap were checked. The original complaint, Strava support and App Store links resolved. Publication date is unset. The November 23 candidate awaits approval for this article.

## November 24 release recheck

The November 23 VO₂ max publication filled the previous slot. The original runner’s complaint still applies. Apple’s US listing now reports 1.4.2, and the archived iPhone and Watch apps both report 1.4.2 (66). Compared the submission tag `v1.4.2-b66-submission` (`e777f6d0`) with build-65 source `78bb6a0b`. The shoe store, library, You tab, run-detail view, Watch picker and shoe test files are identical. Verified the instructions against that tag. The 11 simulator tests and visual walkthrough recorded above ran on build-65 source. No additional device test is claimed for build 66. The draft awaits the owner’s approval.
