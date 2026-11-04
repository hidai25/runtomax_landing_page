# Daily guide: Apple Watch running pace — November 4, 2026

Status: **approved by the owner for publication on November 4, 2026**. Route: `/guides/apple-watch-running-pace/`.

## Reader question and scope

“Why does my Apple Watch pace jump, and which number should I follow?” The useful answer is a comparison of measurement windows plus a RunToMax setup walkthrough. It is not a diagnosis, a GPS accuracy benchmark, or a promise that a smoother display fixes distance errors.

Checked published guides (intervals, treadmill distance, running without the iPhone) and open draft PR #29 (FIT export). None covers selecting pace fields. This complements intervals and links to it; treadmill distance remains a separate guide.

Search Console: no connector was available and the signed-in Chrome browser could not be accessed during this run (browser creation failed). No current query or traffic data was retrieved. This topic comes from public runner questions, not claimed keyword volume or conversion evidence.

## Original sources opened November 4

- [Pace all over the place — r/AppleWatchFitness](https://www.reddit.com/r/AppleWatchFitness/comments/1rol02b/pace_all_over_the_place/). Search index dates the post March 9, 2026; opened page displays “7mo ago.” Runner reports live pace swings despite a plausible final average. Individual experience only. The reply's speculation about arm movement is not used as a technical explanation.
- [Do you look at your Watch during runs? — r/AppleWatchFitness](https://www.reddit.com/r/AppleWatchFitness/comments/1xf4jvf/do_you_actually_look_at_your_watch_during_runs_or/). Search index dates the discussion October 26–27, 2026; cached page gives inconsistent relative ages (“17h ago”, crawled last week). Exact date is not asserted in the article. Comments describe occasional checks, audio guidance and avoiding the display; no single preference is presented as a consensus. One commenter suspects market research, another reason not to treat the thread as demand validation.
- [Apple: Run with Apple Watch](https://support.apple.com/en-gb/guide/watch/apd73a43493f/watchos). Current guide lists configurable metrics, average pace, Split and Segment views. Supports the honest built-in alternative. No promise of feature parity across all watchOS versions.
- [Apple: Calibrate your Apple Watch](https://support.apple.com/en-us/105048). Published March 10, 2026. Provides Apple's own calibration process and settings; used as a troubleshooting reference, not proof of RunToMax accuracy or a universal GPS fix.
- [Public App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Shows version 1.3.5, October 22, when checked. Release source is `v1.3.5-b57-submission` / `6b27f42cf2a2febf33b9672906dce46a6794ba04`; see `docs/public-release-facts.md` for file-level checks.

## Editorial boundaries

- Field descriptions and setup checked against shipping release source, not development main. No new physical-device test claimed.
- Approximately 60-second smoothing verified in production `PaceCalc`; insufficient history can show no value. Lap average is not promised to align with a structured rep.
- Free field availability verified against `BasicWatchScreenPreferences.allowedFields` and the picker. Additional screen/layout access remains Pro.
- No screenshots of the unreleased app redesign; text and accessible comparison cards explain the choice without misrepresenting shipping UI.
- No health records, invented volumes, quotes, testimonials or medical outcomes used. No Stryd live-pace claims from PR #239.

## Publication checklist

1. Set `guides.runningPace.published` and `updated` to the actual publication date; add `publishedTime` to page Open Graph metadata.
2. Remove the draft `robots: { index: false, follow: true }`; change the guide-index draft label to the publication date.
3. The existing sitemap generator includes this registered guide automatically once `published` is set. Do not index an unapproved draft.
4. Recheck shipping version if it changed, run build/SEO/link checks, then merge and verify GitHub Pages plus the live route.

## Validation completed

- Dependencies installed with `npm ci`; lockfile unchanged.
- Default `npm run build` failed on restricted font access, then Turbopack's internal port binding. `npm run build -- --webpack` passed with the same sources, including TypeScript checks and the full static export. Existing React 18 deprecation warning remains; no dependency changes made for this guide.
- `python3 scripts/check-seo.py`: PASS across 19 published pages. The draft is intentionally outside the published sitemap audit.
- Separate draft inspection passed: one H1, correct canonical and article metadata, valid BlogPosting/Breadcrumb JSON-LD, `noindex, follow`, no fabricated publication timestamp, index link present, sitemap entry withheld until approval, and every internal link resolves to an exported page.
- Inspected the full mobile page at 390 px and desktop at 1440 px; document width equals viewport width at both sizes. Readable single-column mobile cards and two-column desktop cards; no horizontal overflow. Clicked from article to index and back successfully.
- Public citation pages opened successfully. App Store listing also checked; campaign destination retains the existing website-guides attribution parameters.
- Local analytics consent rejected during preview. No production publication or consent-code change.
- Local evidence: `output/guides/2026-11-04/` in the app working directory (copy, mobile/full-mobile/desktop screenshots, build logs, draft metadata checks).

## Owner-approved publication

The owner approved this specific article with “Ok deploy” on November 4, 2026. Publication metadata and index date are set to November 4; draft noindex is removed. The registered guide now enters the sitemap. Article copy is unchanged from the approved draft. Final build, SEO and live deployment checks are recorded in the publication report under `output/guides/2026-11-04/`.
