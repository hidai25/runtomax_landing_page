# Daily guide evidence — November 3, 2026

## Selection and scope

Question: Can you run with Apple Watch without your iPhone?
Existing published guides cover interval creation and treadmill-distance correction. Open draft PR #29 covers FIT export. This guide instead explains GPS versus cellular, pre-departure delivery and later syncing. The Apple Watch feature page mentions no-phone recording but does not provide this checklist.

Search Console: accessed the verified `sc-domain:runtomax.com` property through the signed-in browser. The separate https://runtomax.com/ URL-prefix property is not verified in this account; this does not mean the domain property is disconnected. The visible query table did not establish demand for this topic; selection is based on public runner questions. Aggregate search clicks are not downloads. No search-volume, ranking or download forecast is claimed.

## Opened public sources

- https://www.reddit.com/r/AppleWatch/comments/1wzef94/running_without_iphone/ — runner asks whether calls, music and safety features work without an iPhone. Search index gives October 6, 2026; opened page uses a cached relative date, so the exact date is not asserted in the article. Evidence of a real question, not prevalence or technical authority.
- https://www.reddit.com/r/AppleWatch/comments/1v98ipf/jogging_with_or_without_phone_if_you_have_gps/ — search index gives July 28, 2026; opened page shows a relative date. Conflicting preferences: some leave phones for convenience, others carry them for a camera, music or location sharing. Anecdotal; no vote counts or quotes used.
- https://support.apple.com/en-ca/guide/watch/-apd0443fb403/watchos — Apple's guide confirms workout/heart-rate tracking and built-in GPS without the paired phone, and separates Wi-Fi/cellular functions. Opened November 3. Some alternate Apple URLs returned 429; this exact linked URL opened successfully.
- https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260 — public page shows 1.3.5 and describes free recording versus Pro features. Opened November 3. Product instructions checked against the release source as recorded in public-release-facts.md.

## Editorial limits

No health outcomes, safety guarantees, search volume, testimonials, or first-hand tests claimed. No screenshots needed for this short checklist; no development screenshots used to illustrate the public release. Basic recording is separated from fresh coaching requests and connectivity-dependent features.

## Publication gate

The owner approved this specific article for deployment on November 3, 2026. Publication metadata and the index now use that date, noindex is removed, and the sitemap includes the guide. Production deployment remains subject to the checks below and successful GitHub Pages publication.

## Validation

- `npm ci`: passed; npm reported zero vulnerabilities.
- `npm run build`: passed (production static export and TypeScript). Initial draft-date typing/JSX errors were fixed before this final successful run.
- `python3 scripts/check-seo.py`: passed across all 18 published sitemap pages. Separate exported-draft check passed for canonical/social metadata, one H1, article schema, no invented publication date, index link, sitemap exclusion while draft, and internal links.
- Browser inspected at 320, 390 and 1440 px; document width matched viewport at each size. Hero, numbered checklist and footer inspected. Corrected a duplicate brand suffix in the title and added visible numbering/spacing to the checklist.
- Rejected analytics in the local preview; banner dismissed. No consent or collection code changed.
- Apple guidance, public runner sources and App Store page opened. The exact website-guides campaign URL returned HTTP 200 after its App Store redirect (the web reader could not open the parameterized URL; curl verified it). This is source verification, not a fresh offline physical-device test.
- Native desktop access was locked, but the browser preview and Search Console worked. No personal health records accessed.
- Initial review was completed as a draft. Owner approval is now recorded above; deployment will be verified separately.

## Publication checks after owner approval

- Production build/TypeScript passed again. SEO checker passed all 19 sitemap pages.
- Exported article has no noindex or draft label, has the November 3 publication date in article schema, and appears in the sitemap.
- Article copy and layout are unchanged from the reviewed 320/390/1440 px preview.
