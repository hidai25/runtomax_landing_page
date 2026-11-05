# Daily guide research — November 5, 2026

## Question and scope

**Can I use a chest-strap heart-rate monitor with Apple Watch, and how do I know it is connected in RunToMax?**

This is a setup guide, not a recommendation that runners buy another sensor or a claim about improved training outcomes. Existing published guides cover interval creation, treadmill distance, running without a phone and pace fields. Open draft PR #29 covers FIT export. None covers strap pairing or the difference between a live reading and saved Health samples.

## Public sources opened today

- [Runner question: chest strap versus Apple Watch](https://www.reddit.com/r/AppleWatchFitness/comments/1vpuef8/can_i_calibrate_my_apple_watch_to_my_chest_strap/). Search index dates the thread August 16, 2026; the opened cached page showed a relative date, so that exact date is not independently confirmed. Some respondents prefer a strap's response to changes; others report little difference in steady running. The guide summarizes this disagreement without treating anecdotes as an accuracy study or prevalence estimate. No quotes or usernames are reproduced.
- [Apple: Get the most accurate measurements using your Apple Watch](https://support.apple.com/en-us/105002), published March 10, 2026 per the opened page. Confirms external Bluetooth HR monitor support and fit considerations. Used only for the general alternative, not a guarantee that every recording app saves the same sensor stream.
- [Polar: Can I pair H10 with several devices?](https://support.polar.com/en/support/can_i_pair_h10_with_several_devices). Opened November 5; no reliable article update date displayed. Explains the optional two-device Bluetooth setting. Used as a model-specific troubleshooting example, not an endorsement or tested-compatibility claim.
- [Polar H10 manual: Introduction](https://support.polar.com/e_manuals/h10-heart-rate-sensor/polar-h10-user-manual-english/introduction.htm). Confirms multiple connection protocols; not used to generalize all straps or repeat marketing accuracy claims.
- [Public RunToMax App Store page](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Opened November 5; version 1.3.5, October 22. Release notes for 1.3.2 include chest straps in free recording. Source trace is in `docs/public-release-facts.md`.

Apple's older accessory article `/105059` returned 429 in web fetches and redirected in the browser to a headphones/speakers page. It is **not** used as the guide's supporting link; `/105002` was opened successfully and supports the narrower claim. A guessed Polar manual subpage was inaccessible and is not cited by the article.

## Search Console

No Search Console connector is available. Chrome tab creation failed; native Mac access reported a locked Mac. The in-app browser opened Search Console's public introduction and sign-in link, not an authenticated property. No query metrics, impressions, clicks, search volume, rankings or download estimates were obtained or claimed.

## Product verification and limits

Release tag: `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. Inspected the Watch home/settings route, pairing view, Bluetooth manager, workout start/live HR handling and save paths. This is source verification, not a physical-device or sensor-accuracy test. No personal health records were read. No new app screenshots were necessary for this concise procedure; no simulator or generated image is presented as a device test.

The in-app pairing path overrides live HR but does not inject the external strap samples into the saved HealthKit workout. watchOS system pairing is separate and untested here. This limitation appears prominently in the article, not just in this note.

## Before publication

Keep the PR a draft, page noindex, `published: null` and no `datePublished`/`article:published_time`. The guide index has a clearly labeled draft card on this branch; the existing sitemap implementation excludes unpublished guides and will include this entry once a real publication date is set.

On a test Watch running the public app, with a tester who explicitly consents:
1. Confirm the gear → Sensors → External Strap labels and successful scan of a known Bluetooth HR strap; record model/app/watchOS versions and permission state.
2. Confirm waiting versus live BPM and reconnection on a later test session. Confirm available Watch readings resume if the strap disconnects; do not infer instantaneous or uninterrupted fallback from source alone.
3. Check which device supplies saved Health samples for app-only pairing and system-level pairing separately. The tester can report non-identifying pass/fail and device-source labels; do not upload their HR values, health records or workout route.
4. Recheck current App Store version and adjust applicability/copy if the release changed. Obtain the owner's approval of this specific article. Set actual publication dates, remove noindex and the pending-test draft note, rerun build/SEO, then merge and verify live deployment only with authorization.

Build, static checks and browser QA results are recorded in the PR and the local `output/guides/2026-11-05/report.md` in the app workspace. A successful website build does not resolve the physical-device verification blocker.
