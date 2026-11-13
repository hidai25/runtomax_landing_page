# November 13, 2026 — choose running voice cues

## Question and editorial fit

How can a runner reduce spoken distance updates while keeping interval transitions? This is a separate question from the published pace-field, interval-builder, Ultra controls and Stryd guides. Checked the published registry and all recent website PRs, including draft FIT export, chest strap, track lane, missing map, traffic-light pause, GPX and shoe-mileage guides. One new article prepared today.

Search Console was unavailable: Chrome tab inventory worked, but opening the property failed before an inspectable report appeared. No query, impression, click, volume, ranking or download figure is claimed. The question is grounded in individual public runner reports, not measured keyword demand.

Trial timing: the automation was created October 31 after 09:00, with 14 daily occurrences. First scheduled article was November 1 (PR #29). November 13 is day 13; the final scheduled day is November 14. Do not stop before that last run; stop after the trial ends.

## Sources opened and checked

- [Workout notifications in AirPods, r/AppleWatch](https://www.reddit.com/r/AppleWatch/comments/1pxoeuc/workout_notifications_in_airpods/). Search indexed an absolute December 28, 2025 date; opened page shows relative 10 months. Retrieved November 13, 2026. The runner wants distance speech disabled without losing wrist taps. Follow-ups disagree about settings and report unsuccessful fixes. This establishes a question, not a current platform-wide defect or a RunToMax test.
- [watchOS 26 voice feedback and different Bluetooth headphones, r/AppleWatch](https://www.reddit.com/r/AppleWatch/comments/1nij1kp/watchos26_workout_app_voice_feedback_pausing/). Search indexed September 16, 2025; opened page shows relative 1 year. Retrieved November 13, 2026. The poster describes different music behaviour for AirPods and other headphones. Do not generalise those anecdotes to all devices, or promise RunToMax fixes them.
- [Apple: Adjust Apple Watch during a workout, watchOS 26](https://support.apple.com/en-gb/guide/watch/apd72879df4d/26/watchos/26). Web fetch returned HTTP 429. A direct HTTPS request to Apple's versioned page returned 200 and the original content was inspected: it specifies Watch Settings → Workout → Voice Feedback. The unversioned route resolved to a generic guide, so the article cites the verified versioned URL. Apple provides an existing alternative; no recommendation to switch solely for an audio toggle.
- [RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Opened November 13; current listed release remains 1.3.5, dated October 22. Source audit uses its submission tag, not development main. No ratings, testimonials or first-hand results are used.

No third-party images or quotations. No real health records accessed. No device audio test or guaranteed music ducking is claimed. The guide deliberately avoids repeating the source UI's absolute music-ducking promise.

## Release checks and remaining device work

See [public-release-facts.md](../public-release-facts.md#november-13-draft-choose-running-voice-cues) for exact source mapping. The source audit found that the standalone AudioCoachSettingsView remains compiled but its Watch-tab tile was removed. The article uses the reachable **Settings → Audio coach** door instead.

A verified shipping 1.3.5 physical test installation was not available to this run. The owner's recent phone installation is development 1.4, which cannot verify 1.3.5. Do not downgrade or replace it for this guide. No shipping iPhone/Watch walkthrough is claimed, and no production data was accessed.

Before publication, on a shipping test installation with synthetic sessions:

1. Confirm the two Settings doors and exact labels. Check free access to basic audio preferences, and the Pro Coach cues gate.
2. With Spoken cues and Auto-lap splits on, disable Km/mile cues in sessions. Use a synthetic structured run crossing a distance boundary and a rep change; confirm the distance cue is suppressed and the enabled transition remains. Test both km and miles.
3. Confirm ordinary-run split speech remains when that per-session switch is off; then disable Auto-lap splits and confirm distance still records without its spoken split.
4. Test Coach cues separately, including its preview/countdown. Turn Spoken cues off and confirm all app speech stops. Confirm Quiet Mode behaviour without making unsupported claims about every haptic category.
5. Run Test cue on Watch-connected headphones, then on iPhone-connected headphones with Speak cues on iPhone enabled and both devices available. Confirm what is actually heard and how music resumes. A successful single cue is not validation of every announcement.
6. Owner approves this exact article. Set the true publication date, enable index/sitemap discovery through the existing registry, and rerun publication checks.

## Website checks

- `npm ci` passed using the existing lockfile; no dependency changes.
- `npm run build -- --webpack` passed twice, including the final citation change, TypeScript and 27 static routes. The supported webpack mode was used because previous daily runs documented Turbopack environment restrictions. Default Turbopack was not rerun today. Existing React 18 deprecation notice remains.
- `python3 scripts/check-seo.py` passed for 22 published pages. Separate assertions passed draft H1, noindex, canonical/social metadata, article and breadcrumb JSON-LD, no publication timestamp, hidden index card, sitemap exclusion, local links and campaign URL.
- Browser inspection: 320/390 px mobile and 1440 px desktop. No horizontal overflow; heading and instructions visually checked, All guides link worked, draft absent from index, no browser error logs. Temporary viewport override reset. Existing consent rejection dismissed the banner; analytics code was not changed.
- App Store website-guides campaign URL returned HTTP 200 after redirect. Reddit citations opened. Apple's versioned source returned HTTP 200 and the relevant instruction was read directly after web-tool 429 failures.
- `git diff --check` passed. No app source, dependency, analytics, deployment configuration, production data or Desktop checkout changes.

Until the shipping walkthrough and owner approval are complete, this remains a draft: noindex, no publication date, hidden from the rendered guide index and automatically excluded from the sitemap. No merge or deployment is authorised by this heartbeat.
