# Public website release facts

Reviewed November 2, 2026. Public App Store release confirmed by the owner and Apple's lookup response: **1.3.5 (build 57)**. Source reference in the app repository: `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`.

Do not use development main as evidence of App Store availability.

| Item | Public 1.3.5 | Evidence in release source |
| --- | --- | --- |
| Free recording; three included coached runs for eligible runners | Available; distinct from a subscription trial | `RunAnalysisAccessStore`, `CoachedPreviewEligibility`, `LegalDisclaimers` |
| Optional account sync | Configured in Release, opt-in; uploads subject to access checks | `project.pbxproj` Release has `TRAINING_SYNC_ENABLED = YES`; `TrainingSyncAPI`, `TrainingSyncCoordinator`, `TrainingSyncUploadAccess` |
| Strava | Not public; supported TestFlight builds only | `FeatureFlags.stravaEnabled = isSandboxDistribution` in Release |
| Direct Garmin Connect | Not included | Garmin integration added after this release tag |
| Interval library | **Watch → Workouts**, Running / My Workouts, + → Build new, Send to Watch | `RootView`, `LibraryRootView`, `IntervalsLibraryView`, `IntervalBuilderView` |
| Treadmill correction | Watch summary, Calibrate / Save calibration; treadmill run with active steps | `SummaryView.showsTreadmillCalibration`, `TreadmillCalibrationCard` |

This is source verification, not a new physical-device test. Website guides say so explicitly. Screenshots of the redesigned app use synthetic data and are labelled as a design preview because the public release has an earlier layout.

Accuracy statistics remain historical observations from the September 22 website report, not fresh validation of 1.3.5. No new personal workout records were accessed for this review. Do not turn these into a guarantee or present Garmin as ground truth.

When the next version goes live, recheck this matrix, FAQ (both languages), support, coaching pages, privacy availability text, llms.txt and guide navigation together. Keep per-page content dates and article metadata synchronized. Never add invented reviews, ratings, credentials or performance results.

## November 3 guide check: running without the iPhone

Apple's public App Store page still shows version 1.3.5 on November 3, 2026:
https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260

Checked the same submission source `6b27f42cf2a2febf33b9672906dce46a6794ba04` (not development main):

- `runtomax Watch App/Model/WorkoutManager.swift`, `start(mode:)`: creates a local HealthKit workout session and builder; starts local location updates for GPS modes. Run recording is not gated on phone reachability.
- `runtomax Watch App/Views/HomeView.swift`: Outdoor starts through the readiness/armed flow. Outdoor and Treadmill recording remain free; structured features check account access.
- `runtomax/Views/RootView.swift`, `LibraryRootView.swift`, `IntervalsLibraryView.swift`: Watch → Workouts; Send to Watch may instead read Send workout & route if a route is linked, then Queued while pending.
- `runtomax Watch App/Model/SentWorkoutStore.swift`: delivered sessions are persisted locally and added to the wrist library. Sending is not evidence that delivery completed; the guide tells runners to check the Watch before leaving.
- `runtomax Watch App/Model/WatchBridge.swift`, `sendFullPayload`/`flushOutbox`: workout details are cached to disk and queued for later delivery if the phone is unreachable. `requestTodaysCallRefresh` requires a reachable phone.

This confirms source behavior and release applicability, not a fresh offline physical-device test. No private health records were read. No TestFlight-only features are advertised.
