# Daily guide trial — November 10, 2026

## Decision

Prepare **Kilometres or miles? Set your running units in RunToMax** as a draft PR only. Do not merge, deploy or submit for indexing. Device verification is incomplete and source review found a potential Auto-Lap unit-label mismatch in the public release. The article does not promise mile-based lap boundaries.

Route: `/guides/runtomax-kilometres-miles/`. Publication date is null; robots is noindex; the index entry is gated on its publication date. The sitemap already derives entries from published definitions, so it will include this guide only after a real release date is set. No sitemap implementation change is necessary.

## Topic and demand evidence

Reviewed main's five published guides and open draft PRs #29, #34, #37, #38 and #39. None covers changing units. The existing pace guide explains averaging windows; this article answers a different setup question. No claim of search volume or likely downloads.

Search Console was not available: no connected Search Console tool was found, and the attempt to open it in Chrome failed. Do not infer low traffic or no demand from missing access.

Public sources searched/opened on November 10:

1. [Original r/AppleWatch question: Outdoor walk split alerts in KM instead of Miles on watchOS 11?](https://www.reddit.com/r/AppleWatch/comments/1flb745/outdoor_walk_split_alerts_in_km_instead_of_miles/). Opened original post and comments. Reddit renders the post as two years old; it explicitly concerns watchOS 11. A comment reports the same distinction for Outdoor Running. Other commenters report that changing settings helped. This is historical anecdotal demand for clearer units-versus-splits instructions, not evidence of a current Apple or RunToMax defect. Do not repeat the suggested toggle workaround as verified advice.
2. [Apple: Change settings in Workout on Apple Watch, watchOS 26](https://support.apple.com/en-gb/guide/watch/apde0be691be/26/watchos/26). Web fetches returned 429; successfully opened the original page through the in-app browser and read **Change measurement units**. It documents Watch Settings → Workout → Units of Measure for Apple's app. Link is live. The draft links to Apple rather than mixing Apple's setup path into RunToMax instructions.
3. [r/AppleWatchFitness: My Apple Watch has started grossly underestimating distance and average speed](https://www.reddit.com/r/AppleWatchFitness/comments/1ux3ch8/my_apple_watch_has_started_grossly/). Search dates the post July 15, 2026; opened original post/comments. A commenter suggests unit conversion; the poster disputes that explanation because other measurements do not fit. This concerns cycling and is not primary running demand evidence. It supports editorial caution about diagnosing every distance problem as a unit mismatch; no device diagnosis is adopted.
4. [RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Opened and found Version 1.3.5, October 22. Product source checks use `v1.3.5-b57-submission` (`6b27f42cf2a2febf33b9672906dce46a6794ba04`), not unreleased main.

No invented quotes, reviews, first-hand tests or health outcomes. Conversion examples are arithmetic: 300 seconds/km × 1.609344 = 482.8032 seconds/mile (8:03 rounded); 10 / 1.609344 = 6.2137 miles.

## Release-source checks, not device tests

All paths/lines below refer to the release tag above in `hidai25/runtomax`:

| Claim | Evidence |
| --- | --- |
| iPhone Settings gear | `runtomax/Views/ProfileView.swift`, shared toolbar around 1445–1478 opens SettingsView. |
| Units & language → Distance → KM / MI | `runtomax/Views/SettingsView.swift:384`, `unitsCard` around 1563–1575. |
| Watch Settings → System → Distance → Kilometers / Miles | `runtomax Watch App/Views/SettingsView.swift:74` and `SystemSettingsView` around 1114. |
| Wrist preference attempts to mirror to phone | `runtomax Watch App/Model/UserPreferences.swift:1111`. Delivery/timing has not been tested. Draft asks readers to check both devices and does not promise instant sync. |
| Display conversion | `Shared/RunDisplayUnits.swift:22–46`: miles factor 1.609344; distance divides and pace multiplies. Storage remains metric. |
| Auto-Lap separate control | Watch `SettingsView.swift:39`, `WorkoutSettingsView` around 291, `AutoLapEditorView` around 1283. |

### Finding that blocks publication of a mile-alert walkthrough

In this release tag, `AutoLapEditorView` binds directly to `prefs.autoLapKm` but appends `prefs.distanceUnit.label`. The recorder starts `autoLap` with `UserPreferences.shared.autoLapKm * 1000` (`WorkoutManager.swift:4022`, also restore at 8618). Changing `distanceUnit` saves/mirrors the unit but does not convert `autoLapKm` (`UserPreferences.swift:1111–1123`). Thus the editor can label a value 1.0 **mi** while these paths configure **1,000 metres**.

Confidence: high in the source-level inconsistency, unverified for an installed Watch session. This is not a claim about unreleased main or every lap/voice path. No app changes made in this guide task. Resolve in a separate app review; do not automatically patch app code to make an article publishable.

## Validation

- `npm ci`: passed; 144 packages installed, zero audit vulnerabilities reported. Lockfile unchanged.
- `npm run build -- --webpack`: passed, TypeScript and 26 static routes. Existing React 18 deprecation warning; no dependency change.
- Browser preview at 390×844 and 1280×900: title, instructions and closing section inspected; no horizontal overflow (document width equals viewport in both). Viewport reset after testing. No app screenshots used.
- Existing analytics implementation unchanged; local preview's consent prompt could be rejected and the footer control remained accessible.
- Final `npm run build -- --webpack`: passed after updating the draft notice; notice rechecked in the browser after reload.
- `python3 scripts/check-seo.py`: passed for 21 published pages, 25 image dimensions and 28 JSON-LD blocks.
- Separate exported-draft checks: passed for one H1, canonical/social descriptions and URL, article/breadcrumb JSON-LD, no datePublished, noindex, absence from the rendered guide index and sitemap, all internal links, campaign CTA and arithmetic examples. This explicitly covers the draft omitted by the sitemap-based SEO checker.
- External article links: original Reddit discussion opened; Apple reference opened in the browser after web-fetch 429s; campaign download URL opened and resolved to the RunToMax App Store listing. No download/conversion attribution claim is made.
- `git diff --check`: passed. No app code, consent logic, dependencies or production data changed.

## Before approval/publication

1. Verify the exact settings paths in the shipping iPhone and Watch apps, with synthetic/demo data. Check KM → MI and MI → KM on both devices and a recorded display example. Do not use the owner's health records for content.
2. Reproduce the Auto-Lap scenario with synthetic distance input or a controlled device test; inspect label, underlying value and lap boundary separately. Resolve the discrepancy or keep this limitation explicit. Do not publish instructions claiming “1.0 mi” reliably configures one mile until verified.
3. Owner reviews this exact article. Set a truthful publication date, remove the draft notice/noindex only when all gates pass, then check index/sitemap and build again. Approval is required by this automation; this PR is not deployment approval.
