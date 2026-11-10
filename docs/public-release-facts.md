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

## November 6 draft guide check: Ultra Action button

The public US App Store page still lists **1.3.5** on November 6, 2026. Verified against `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`, rather than development main:

- `runtomax Watch App/Intents/WorkoutIntents.swift` gates the Workout picker / Smart Action intents to **watchOS 11 or later**. `RunToMaxStartWorkoutIntent.suggestedWorkouts` registers Outdoor Run and Treadmill Run. The during-run branch dispatches the configured action instead of starting a second activity.
- `Views/SettingsView.swift` exposes the **Buttons → Shortcuts** path without a paid gate. `Views/ShortcutsView.swift` provides two presets: **RunToMax** maps Action to pause/resume and Action + Side to Lap; **System workout style** maps Action to Lap and Action + Side to pause/resume. Individual pickers can override these presets. Basic Outdoor recording remains free.
- `Model/WorkoutManager.swift:5389–5445` executes these actions and shows feedback. `Model/ControlLayout.swift` maps pause/resume and lap to distinct actions. Pausing does not end/save the activity. The article uses the normal End/save flow and makes no claim of a completely screen-free session.
- `Shared/StartMode.swift` names the mode **Precision Start**. `RunToMaxStartWorkoutIntent.perform()` first arms a cold run in this mode, then starts an already armed run. `ShortcutsView` exposes **Start mode**. The guide fixes the Workout binding to Outdoor Run; it does not promise a mode-independent start or automatic waiting for a GPS threshold.
- Apple’s opened Action button guide documents Settings → Action Button → Action → Workout, selecting a supported app, and different press-and-hold behavior. The RunToMax-specific workout choices and mappings come from release source, not from Apple’s generic instructions.

**Publication blocker:** no physical shipping-app Ultra test was performed. Check the system app/workout picker labels, Precision Start from idle and armed states, both presets’ pause/resume/lap behavior, displayed confirmation and normal End/save flow. Keep this article as a noindex draft with no publication date until these checks and article-specific owner approval are complete. Evidence is in `docs/guide-research/2026-11-06-ultra-action-button.md`.

## November 10: Stryd power guide — draft only

Replaces the owner-rejected distance-units draft. Uses public 1.3.5 source, tag `v1.3.5-b57-submission` (`6b27f42cf2a2febf33b9672906dce46a6794ba04`). This is source verification, not a new physical-device test.

- Stryd pairing and target-power editing require paid Watch access in this release. State RunToMax Pro up front (`runtomax Watch App/Views/SettingsView.swift:1040`, `TargetPowerEditorView`).
- Pair on Watch: RunToMax Settings → Sensors → Stryd Foot Pod. Tap Scan for Stryd if needed, then select the pod (`StrydPairingView.swift`). “Record with Stryd” is a separate saved-distance choice, not a prerequisite for live power guidance.
- iPhone: Watch → Watch Screens → choose run type → Target power. Select W or % of threshold and set From/To. Tap a preview field for Stryd Power or Power vs target (`LibraryRootView.swift:485`, Watch `UserPreferences.swift:115`).
- Watch: Settings → Workout → Target Power; Threshold power is under YOUR NUMBERS in the same Workout settings. Percentages need a confirmed threshold (`PowerTargetFields.swift`, `PowerTarget.swift`). RunToMax's own estimate is not Stryd's Auto-Calculated Critical Power, and this flow is not account/CP sync with Stryd.
- Power guidance uses live pod watts, with roughly five-second smoothing; voice/haptics are separate settings. Missing readings clear guidance, rather than treating another sensor's watts as equivalent (`WorkoutManager.swift:292`, `:7303`; `Shared/PowerGuidance.swift`).
- Structured block editor includes Work power and Recovery power (`IntervalBuilderView.swift:449–450`). The guide links the existing interval tutorial; it does not reproduce Stryd plans or zone tables.
- Keep Stryd references descriptive, with a trademark/non-affiliation statement. No Stryd artwork or brand assets added. Public research does not establish a comprehensive third-party trademark licence or approval.
- Evidence and required shipping-device checks: [Stryd guide research](guide-research/2026-11-10-stryd-power.md).
