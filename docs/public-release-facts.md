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

## November 4 guide check: running pace fields

Apple's public App Store page still shows 1.3.5 on November 4, 2026. Checked source tag `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`:

- `runtomax/Views/RootView.swift` routes the **Watch** tab to `LibraryRootView`; its setup tile is **Watch Screens**. Run types have separate screens; tapping a preview field opens the metric picker. Changes save automatically, with a prompt to open the Watch app when it is not reachable.
- `runtomax Watch App/Model/UserPreferences.swift` provides the picker titles **Pace**, **Lap Pace**, **Smoothed Pace**, **Avg Pace**. `Views/MetricValue.swift` binds them respectively to current pace, current lap pace, `PaceCalc.smoothedPaceSecPerKm`, and workout average pace.
- `runtomax Watch App/Model/PaceCalc.swift` uses an anchor at least 60 seconds old for Smoothed Pace. It returns no pace until an eligible sample and sufficient distance exist. Smoothing does not create a separate distance source or promise corrected GPS.
- `Shared/BasicWatchScreenPreferences.swift` includes all four fields in `allowedFields`. Basic editing preserves one five-field screen; additional screens/layouts are gated by paid access in `LibraryRootView`.

This is release-source verification, not a new device or GPS accuracy test. The guide intentionally excludes live Stryd pace from development PR #239 and does not use screenshots of the unreleased redesign.

## November 6 draft guide check: manual laps

The public US App Store page still lists **1.3.5** on November 6, 2026. Verified against `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`, rather than development main:

- `runtomax Watch App/Views/SessionView.swift:540–567` places Controls to the right of metrics (swipe left), without the separate advanced Laps tab’s paid gate. `ControlsView.swift` returns to metrics after a Lap action.
- `Model/ControlLayout.swift` defaults bottom-left to Lap. Plain Lap calls `wm.lap()`; Lap + Pause also toggles pause, while Lap + End requests an end through the controls confirmation path. `Model/WorkoutManager.swift:4910` records the lap and resets its anchors without ending an ordinary run.
- `Views/SettingsView.swift` provides the Buttons category, with a Buttons row that opens `ControlsEditorView.swift`. That editor assigns Lap to a position; controls editing is not gated by Pro.
- `Views/ShortcutsView.swift` provides **System workout style**: Action button = Lap, Action + Side button = pause/resume. Its binding help explains the required Apple Watch app configuration. These mappings differ from the RunToMax preset; do not claim every Ultra is configured to lap by default.
- `Views/SettingsView.swift:294,1283–1296` exposes **Workout → Auto-Lap → Enabled**. `Model/WorkoutManager.swift:2825–2840,7158–7185` confirms that a manual lap does not disable automatic distance lap recording in an ordinary run. The guide is scoped to ordinary Outdoor mode, not the interval runtime or Track mode.
- Lap Pace availability was checked in the November 4 entry above. Do not promise the separately gated advanced Laps tab as a free feature.

**Publication blocker:** source verification is complete, but no physical test of the shipping Watch app was performed. Verify swipe direction, the default LAP control, continued recording, the settings labels, Auto-Lap off/on, and both Ultra shortcut actions before publication. Keep this article as a noindex draft with no publication date until those checks and article-specific owner approval are complete. Research and web validation are recorded in `docs/guide-research/2026-11-06-manual-laps.md`.
