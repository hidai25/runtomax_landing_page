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
