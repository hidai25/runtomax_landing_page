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

## November 8 draft guide check: saved run without a map

Apple's public US App Store listing still displays **1.3.5** on November 8, 2026. Verified against `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`, without changing the app checkout:

- `runtomax/Views/HistoryView.swift:1023–1049` renders the missing-route notice and **Open Health** action. It points to Workout Routes in Health and Location on the Watch.
- `runtomax/Views/PermissionsView.swift:32–45` presents inferred **Workout Routes — Looks off**; it does not report definitive read authorization. `HealthRouteAccessHint.swift:16–38` excludes recent runs (two-hour settling threshold), indoor/imported/recovered summaries, and checks whether any probed route is readable. The guide does not promise a two-hour sync deadline or universal notice.
- `runtomax/Model/HealthKitManager.swift:51` requests route read access; `hasRoute(for:)` returns nil when the workout has not reached HealthKit and probes the separate workout-route type. `AppModel.refreshRouteAccessState` refreshes on foreground/run-list updates.
- Watch `WorkoutManager.swift:3468–3480` requests route authorization; `:7889` requests location while in use. Health read access on the phone and location permission for recording are distinct.
- Apple's Health support article documents the profile → Privacy → Apps path. RunToMax's release wording also names Sharing → Apps. System labels can vary with OS version.

Source verification is complete; no physical shipping-iPhone/Watch permission-change or route-recovery test was performed. Keep the article unpublished, noindex and without a publication date until the checks in `docs/guide-research/2026-11-08-missing-run-map.md` and article-specific owner approval are complete. No private Health records or real route coordinates were accessed.

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

## November 10: Stryd power guide

Replaces the owner-rejected distance-units draft. Uses public 1.3.5 source, tag `v1.3.5-b57-submission` (`6b27f42cf2a2febf33b9672906dce46a6794ba04`). This is source verification, not a new physical-device test.

The owner explicitly instructed publication on November 10 after the pending connected-pod walkthrough was disclosed. Publish with the source-review qualification and non-affiliation statement intact; do not claim that device verification took place.

- Stryd pairing and target-power editing require paid Watch access in this release. State RunToMax Pro up front (`runtomax Watch App/Views/SettingsView.swift:1040`, `TargetPowerEditorView`).
- Pair on Watch: RunToMax Settings → Sensors → Stryd Foot Pod. Tap Scan for Stryd if needed, then select the pod (`StrydPairingView.swift`). “Record with Stryd” is a separate saved-distance choice, not a prerequisite for live power guidance.
- iPhone: Watch → Watch Screens → choose run type → Target power. Select W or % of threshold and set From/To. Tap a preview field for Stryd Power or Power vs target (`LibraryRootView.swift:485`, Watch `UserPreferences.swift:115`).
- Watch: Settings → Workout → Target Power; Threshold power is under YOUR NUMBERS in the same Workout settings. Percentages need a confirmed threshold (`PowerTargetFields.swift`, `PowerTarget.swift`). RunToMax's own estimate is not Stryd's Auto-Calculated Critical Power, and this flow is not account/CP sync with Stryd.
- Power guidance uses live pod watts, with roughly five-second smoothing; voice/haptics are separate settings. Missing readings clear guidance, rather than treating another sensor's watts as equivalent (`WorkoutManager.swift:292`, `:7303`; `Shared/PowerGuidance.swift`).
- Structured block editor includes Work power and Recovery power (`IntervalBuilderView.swift:449–450`). The guide links the existing interval tutorial; it does not reproduce Stryd plans or zone tables.
- Keep Stryd references descriptive, with a trademark/non-affiliation statement. No Stryd artwork or brand assets added. Public research does not establish a comprehensive third-party trademark licence or approval.
- Evidence and required shipping-device checks: [Stryd guide research](guide-research/2026-11-10-stryd-power.md).


## November 14 draft: running cadence on Apple Watch

Public US App Store listing checked November 14: **1.3.5**, October 22. Audited its source tag `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. This is source verification, not a physical-device test.

- `Shared/BasicWatchScreenPreferences.swift:12–18,33–42`: cadence is a default and allowed free field; five fields, saved per workspace.
- `runtomax/Model/ButtonMapping.swift:208,242–243,277–282`: Running Form category contains Cadence, filtered through the free allowlist.
- `runtomax/Views/LibraryRootView.swift:64,619–631,653–660,726–743,2414–2443`: Watch Screens title, optional Sync, automatic persistence and sending, separate run-type choices, preview field picker.
- `runtomax Watch App/Views/MetricValue.swift:89–91`: Cadence displays `metrics.cadenceSPM` with `spm` units.
- `runtomax Watch App/Model/UserPreferences.swift:102`: picker title Cadence.

**Publication blocked:** a shipping 1.3.5 phone/Watch walkthrough is unavailable. The owner's development installation does not establish public-release behavior. No private run records were opened. Keep this noindex draft without a release date until the checks in [the research note](guide-research/2026-11-14-running-cadence.md) and owner approval are complete.

## November 19 guide check — Water Lock on a run

Apple’s [US lookup](https://itunes.apple.com/lookup?id=6767669260&country=us) returned 1.3.5. Checked the Watch source at `v1.3.5-b57-submission` (`31c0797f38f4381d90629aa5c85b091d9af63efa`).

- `Views/SessionView.swift` places Controls one leftward swipe from metrics during recording. `Views/ControlsView.swift` reads the configured layout. Only the lap action returns to metrics automatically.
- `Model/ControlLayout.swift` puts LOCK in the bottom-right default slot and calls WatchKit’s water lock API without changing workout state. END opens the confirmation in `ControlsView.swift`, where SAVE finalizes the run.
- Apple documents Control Center, the droplet, the Crown hold and the speaker tones in [Water Lock support](https://support.apple.com/en-us/108352). A [runner’s wet-sleeve question](https://www.reddit.com/r/running/comments/rjkejj/) motivated the topic. Search Console was unavailable for this run.
- The owner approved deployment on November 19 after the physical Watch check was disclosed as pending. The instructions were checked against the release source and Apple’s documentation. No hands-on Water Lock test was performed.

## November 19 guide check — treadmill distance and Apple Health

Apple’s [US lookup](https://itunes.apple.com/lookup?id=6767669260&country=us) returned version 1.3.5. Checked the app release tag `v1.3.5-b57-submission` (peeled commit `31c0797f38f4381d90629aa5c85b091d9af63efa`).

- Watch `Views/SummaryView.swift` and `Views/TreadmillCalibrationCard.swift` gate the card on treadmill mode and recorded active steps. The runner sets the belt distance in the displayed unit and the incline, then saves. The summary adjusts the run and the card records the stride baseline.
- Watch `Model/TreadmillHealthCorrection.swift` targets a RunToMax-authored indoor running workout. It verifies the replacement distance before removing the original. The summary exposes a pending state and a retry action. The guide makes the Health result conditional on a successful sync.
- The 5.0 km and 4.7 km readings are an illustrative example. This review used release source and [Apple’s calibration instructions](https://support.apple.com/en-us/105048). A physical Watch-to-Health sync was not tested for this revision.

## November 19 Garmin compatibility check

The [US App Store lookup](https://itunes.apple.com/lookup?id=6767669260&country=us) returned 1.3.5. The Garmin Connect descriptions apply to the 1.4 submission (`v1.4-b63-submission`, commit `530130ef8c03d4a4aa7e2e1995b72754ca75b10c`). The tagged iPhone GarminConnectView and the [Garmin privacy disclosure](https://runtomax.com/privacy/#garmin) describe account connection, selected workout sends and separately enabled new-run import. Available data depends on the run. The 1.3.5 Apple Health route remains documented. This review used release source and the store listing.

## French Garmin guide and FAQ — November 19, 2026

The French App Store listing for 1.4 confirms free recording, Garmin run import and week one of each plan, Pro calendar sends, auto-renewal and French prices (€6.99 monthly, €29.99 yearly). Checked the 1.4 submission source at 530130ef8c03d4a4aa7e2e1995b72754ca75b10c, especially GarminConnectView and IntervalsLibraryView, for authorization, calendar date, confirmation and same-day library replacement. Garmin documents the subsequent sync to a compatible device. No physical-watch delivery or pilot result is claimed.

- https://apps.apple.com/fr/app/runtomax-coach-course-%C3%A0-pied/id6767669260
- https://support.garmin.com/fr-FR/?faq=Oyqt6jUjOF8L1Rnuc9Sms8

## November 20 cadence guide check

Apple’s US lookup reports 1.4, released November 19. The paired iPhone reports 1.4 (63). The submission tag is `v1.4-b63-submission` at `530130ef`. In that tag, `YouTabView.swift` opens the Apple Watch device row and `YourAppleWatchPage.swift` opens Watch screens. `Shared/BasicWatchScreenPreferences.swift` includes cadence in both the free defaults and allowed fields. The editor in `LibraryRootView.swift` saves the selected workspace, sends changes and offers a Sync retry. `ButtonMapping.swift` puts Cadence in Running Form. The Watch’s `MetricValue.swift` renders the cadence field in spm.

This supersedes the November 14 applicability and acceptance notes for the cadence draft. The Watch Bluetooth connection timed out during two device checks. Physical delivery and a live cadence reading remain unverified.

Publication check on November 20: both paired physical devices reported 1.4 (63). The submission-tag Watch simulator rendered synthetic cadence in its default position and then at the top left after loading the moved Outdoor field. The shipping preference payload preserved the separate Treadmill layout. The [research note](guide-research/2026-11-14-running-cadence.md) records the test boundaries and owner approval.

## November 20 verification for the missing-map guide

Verified against RunToMax 1.4 build 63, submission tag `v1.4-b63-submission`. The phone’s HealthKitManager requests workout and route data separately. RunDetailLoadOutcome treats an available outdoor workout with no route as retryable and an indoor workout with an available source as complete. RunNoMap distinguishes an unqueried or restored summary from a confirmed empty route. The Watch WorkoutManager requests location access and uses HKWorkoutRouteBuilder. Both tagged app test suites passed on an isolated iPhone simulator with synthetic records. The article makes no claim about restoring an unrecorded route. See the [complaint, sources and release checks](guide-research/2026-11-08-missing-run-map.md).

## VO₂ max accuracy guide · November 23, 2026

- RunToMax 1.4.1, build 65 (app source `78bb6a0b`). Trends’ Pro VO₂ max detail prioritizes a manually recorded test, then an available RunToMax estimate. The info button explains the active source. See `TrendsView.vo2Card`, `MetricExplanation.vo2Max` and `VO2MaxEstimator.estimate`.
- The screenshot uses the released `MetricExplainerSheet` and its explanation factory in the iPhone simulator. Synthetic inputs feed the real estimator: maximum HR 184 bpm, resting HR 50 bpm and a 5 km effort of 24 minutes. This illustrates the heart-rate/performance fallback. The app also supports a submaximal pace/heart-rate method.
- The accuracy statistic applies to Apple Watch Series 10 in Lambe et al., [Mayo Clinic Proceedings: Digital Health, 2026](https://doi.org/10.1016/j.mcpdig.2026.100357). Forty participants completed exercise testing and 35 contributed to the final comparison. Mean absolute error was 6.79 mL/kg/min. The article reports a factual finding in original prose and links to the source. The study did not evaluate RunToMax.

## Garmin treadmill guide · November 24, 2026

The model examples use Garmin’s US Forerunner 965 and original Enduro manuals. The 965 heart-rate accessory manual documents manual calibration with compatible straps. Garmin Support documents the distinction between editing an activity total, recorded laps and exported files. The article links these sources and makes no claim that later edits propagate to RunToMax. On November 26 the [US App Store listing](https://apps.apple.com/us/app/id6767669260) showed version 1.4.3 and described importing new Garmin runs after sync. The November 25 Xcode archive identifies both the iPhone and embedded Watch apps as 1.4.3 build 67. The phone’s compiled French catalog contains the Garmin run-import prompt and enable action. See the [runner complaint and keyword check](guide-research/2026-11-25-garmin-treadmill.md). No physical Garmin run was performed for this guide.

## Apple Watch heart rate zones guide, checked November 25, 2026

The US App Store lookup returned version 1.4.2, released November 23. In the corresponding submission tag `v1.4.2-b66-submission` (e777f6d0), `runtomax/Model/ButtonMapping.swift` and the watch’s `Model/UserPreferences.swift` expose the HR Zone field. The watch’s `Views/MetricValue.swift` renders that field from the live heart rate, separately from the Heart Rate field in bpm. Apple Workout settings and Fitness steps were checked against Apple’s user guide. These checks used release source and documentation. No physical run was performed.

The guide image is a watchOS simulator capture of the 1.4.2 shared Centered 4 layout (`Centered4LayoutShared`) with Heart Rate in the bottom field. A temporary preview supplied example data (132 bpm, Z2 for a runner with a maximum of 200 bpm). It illustrates the RunToMax section.
