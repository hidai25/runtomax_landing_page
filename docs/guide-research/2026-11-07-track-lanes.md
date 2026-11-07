# Draft evidence: choosing a track lane in RunToMax

Prepared November 7, 2026 for the daily guide trial. Owner approval applies to this article only; it has not been granted. Do not merge or deploy this branch as part of preparing the guide.

## Question and overlap check

Question: “If I am running on a track, which lane should I choose, and when is a 400 m track setting inappropriate?”

Reviewed the five published guides (intervals, treadmill distance, phone-free running, pace fields and Ultra Action button), plus the open FIT-export and chest-strap drafts. This article focuses on the Track picker and its assumptions. It does not revive the general pause topic the owner rejected or repeat the Ultra button setup.

Search Console could not be read: no relevant open account tab or connector was available, and the browser control failed while opening Search Console. No impressions, clicks or search volume are claimed. The topic is a product-relevant runner question, not a proven traffic opportunity.

## Original sources opened today

1. [Runner question about track lane selection and a possibly non-standard oval](https://www.reddit.com/r/AppleWatchFitness/comments/1upuqh5/running_with_apple_watch_fitness_on_track_question/). The opened page displayed “3mo ago”; an exact publication date was not exposed in the fetched view. The runner asks whether selecting an outer lane assumes a standard track. Replies disagree about Apple's distance calculation. Used only to establish that someone asked the question; their technical explanations and lane-distance figures are not treated as authoritative or reproduced in the article. One thread is not evidence of prevalence.
2. [Apple: Start an outdoor run workout, watchOS 26, “Run on a track”](https://support.apple.com/en-mt/guide/watch/apdf2260a232/26/watchos/26). Opened and read the relevant section. Apple documents a lane prompt when its Workout app detects a track and a way to update the lane. This supports the alternative-app paragraph only; it is not evidence of RunToMax behavior. The page does not expose a publication date. The unversioned URL returned HTTP 429, so the article links the successfully opened versioned page.
3. [RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Opened November 7; version history still shows 1.3.5, October 22, as the latest release. Store description and ratings are not used as accuracy evidence.

## Shipping-source verification

Source: app tag `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. Development main was not used to establish availability.

| Article claim | Release source |
| --- | --- |
| Watch home has TRACK; paid Watch access required | `runtomax Watch App/Views/HomeView.swift`, TRACK card and `showTrackPicker` sheet |
| Lane selector supports 1–8 and shows the configured distance | `Shared/TrackPlan.swift`; `Views/TrackLanePickerView.swift` |
| Last choice is remembered | Picker's `lastTrackLane` read on appearance and write when preparing the run |
| Start Track Run prepares a run, rather than proving recording has started | Picker calls `WorkoutManager.arm(mode: .outdoor, trackPlan:)`; `arm` sets `.armed` and starts GPS preparation |
| Whole circuits are detected using return to the start area; distance is then adjusted to the selected lane length | `Model/TrackRuntime.swift`, `updateActive` and `projectedDistance` |
| Fixed track assumptions, not automatic measurement of an unknown track | `TrackPlan` fixed lane lookup and range; no custom length in this picker |
| GPS is still involved; no exact accuracy guarantee | Runtime requires location updates and proximity/distance conditions before closing a lap |

Also read the release phone `TrackPickerView` and Watch `TrackModeSheet` for context. The article deliberately does not add the more complex phone-send or mid-run switching flows, claim simultaneous structured-interval support, publish an “official” table of outer-lane measurements, or claim that a lane setting repairs GPS. No personal workout data was used.

This is source verification, **not a physical Watch or on-track test**. No app screenshots were generated because a shipping-build capture was not available; an unreleased redesign would be misleading here.

## Draft handling and remaining checks

- `guides.trackLanes.published` is null. The page says “Draft — awaiting publication.” Both generic and Googlebot metadata are noindex.
- The index card is wired conditionally to that publication date. The existing sitemap generator also excludes null publication dates, so both become active together after approval and an actual release date are recorded.
- Mobile/desktop visual inspection is blocked: the selected browser's tab-selection and screenshot methods fail with `Cannot read properties of undefined (reading 'timeoutMs')`; native apps were unavailable while the Mac was locked. This is not recorded as a pass.
- Before publishing, inspect the static page at mobile and desktop widths, follow its links, and run through TRACK → Lane → Start Track Run → recording on the shipping Watch app. Confirm the Pro gate and remembered lane. Any claims about real lap detection need an on-track check; this guide intentionally makes no performance claim.
- Obtain owner approval for this article, set its real publication date (and update date when substantive edits are made), rerun checks, then merge/deploy and verify the live URL.

## Validation results

- `npm ci --no-audit --no-fund`: passed, 144 packages installed with the existing lockfile.
- `npm run build -- --webpack`: passed, including TypeScript and static export. The first sandboxed attempt could not resolve Google Fonts; the network-enabled retry passed without changing fonts or dependencies. Local log: `/private/tmp/rtm-guide-track-build-20261107.log`.
- `python3 scripts/check-seo.py`: passed for all 21 published sitemap pages, including canonical/social metadata, internal links, hreflang, 25 image dimensions, 28 JSON-LD blocks and release facts.
- An additional parse of the exported **draft** passed: exactly one H1; matching canonical and social URL; article schema without a fabricated publication date; generic and Googlebot noindex; visible draft label; working local link targets and website-guides campaign CTA; draft absent from the public index and sitemap.
- External links: Apple's versioned documentation opened successfully. The existing App Store campaign link returned HTTP 200 through `curl --location` and resolved to the RunToMax listing with campaign parameters retained. The web reader alone could not open that parameterized link, so the HTTP check was used as a fallback.
- `git diff --check`: passed. Consent and analytics code were not changed.
- **Not passed / not performed:** rendered mobile and desktop inspection, Search Console query analysis, and a physical shipping-app Watch setup/on-track test. These are disclosed above; no screenshot or accuracy result is fabricated.
