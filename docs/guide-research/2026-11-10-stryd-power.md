# Stryd watts on Apple Watch — editorial evidence

Reviewed November 10, 2026. Replaces the rejected distance-units article in draft PR #40. This is the day's replacement article, not an additional published guide.

## Question and scope

How can a runner follow an existing watt-based workout using a Stryd pod and RunToMax on Apple Watch? Answer with pairing, target entry, display and missing-data instructions. Do not prescribe power zones, reproduce Stryd workouts, infer improved fitness or imply that a pod makes a session safe.

Search Console was unavailable during this run. No search-volume estimate or demand-prevalence claim is made. Existing published guides cover intervals, treadmill distance, phone-free recording, pace fields and the Ultra Action button; this article adds power-specific setup and links the interval tutorial.

## Public sources opened

| Source | Date shown / checked | Use and limits |
| --- | --- | --- |
| [Stryd: Critical Power Definition](https://help.stryd.com/en/articles/6879345-critical-power-definition) | August 12, 2025; checked November 10, 2026 | Explains Stryd's CP and cautions against substituting thresholds from other power systems. Link readers to the original; do not copy zone tables, tests or plans. The 300 W example is arithmetic, not a prescribed workout. |
| [Stryd: How to use the Apple Watch and Stryd](https://help.stryd.com/en/articles/8970460-how-to-use-the-apple-watch-and-stryd) | May 29, 2025; checked November 10, 2026 | Stryd's own app offers targets and structured sessions. It is a relevant alternative, not evidence about RunToMax's interface. |
| [Stryd Hardware Common Questions](https://help.stryd.com/en/articles/8977365-stryd-hardware-common-questions) | May 15, 2026; checked November 10, 2026 | Motion wakes the pod; follow official troubleshooting rather than recommending unprompted resets. Does not establish RunToMax compatibility with every pod generation or Stryd Duo feature. |
| [Power range when target is used](https://www.reddit.com/r/strydrunning/comments/1k8n9co/power_range_when_target_is_used/) | April 26, 2025; opened original November 10, 2026 | A runner asks about a percentage-of-CP target and the watch's displayed range. Evidence of a real question only, not widespread dissatisfaction or a current defect. |
| [Apple Watch users: workflow discussion](https://www.reddit.com/r/strydrunning/comments/1rrn6cl/apple_watch_users_what_does_your_workflow_look/) | March 2026; search dates comments March 14; original displays relative ages | Mixed experiences with syncing and workflows, including positive experiences of Stryd's own app and a different third-party app. Counterevidence to any suggestion that everyone needs a replacement. No comments or testimonials copied into the article. |
| [RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260) | Checked November 10, 2026 | Public version remains 1.3.5; do not advertise development-main navigation or features as shipping. |

## Brand and intellectual-property review

- [Stryd's official homepage](https://www.stryd.com/us/en) links a [public media kit](https://drive.google.com/drive/folders/1CR0cPfPXL2VCPe4wv-ArcuJtlpVsFEej). The folder was opened in the browser. Its top level contained feature cards, lifestyle/pod images, a press-release PDF and a promo video, with 2020 modification dates. No comprehensive third-party brand licence was visible at that level. No assets were downloaded or reused. A public folder is not assumed to grant unrestricted reuse rights.
- [Stryd Club terms](https://club.stryd.com/tos), opened November 10, state that website use grants no intellectual-property or trademark licence. These are club/forum terms and contain unreplaced template placeholders, so they are not treated as complete partner or hardware-brand terms.
- The article uses the name descriptively, in original text, with the same trademark and non-affiliation wording already used by RunToMax's release pairing screen. No Stryd logo, product photo, copied chart, plan or endorsement claim is added.
- RunToMax's threshold suggestion is explicitly distinct from Stryd's Auto-Calculated Critical Power. Manual entry is not described as Stryd-account sync. No promise of PowerCenter export, Stryd subscription entitlement or support for every hardware generation is made.
- This is a check against available public guidance, not a blanket assertion of Stryd approval or legal compliance. No private partner agreement or comprehensive brand permission was available. Any later use of Stryd assets or partnership claims requires checking the applicable permission first.

## Shipping source verification

App source tag: `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04` (1.3.5 build 57). No private health records accessed; no app code changed or app build run.

| Claim | Release-source evidence |
| --- | --- |
| RunToMax Pro required for pairing and power target setup | Watch `Views/SettingsView.swift`: Sensors Stryd row checks `WatchRecordingPolicy.hasPaidWatch`; `TargetPowerEditorView` uses the same gate. |
| Pair under Settings → Sensors → Stryd Foot Pod | Watch `Views/StrydPairingView.swift`: scan/select, connection status and live watts. `Record with Stryd` is a separate saved-distance switch. |
| iPhone Watch → Watch Screens, select run type, Target power | Phone `Views/LibraryRootView.swift`: `RunSetupChooserView`, `PowerTargetFields`, `PowerGuidanceOptionsView`; preferences broadcast after changes. |
| W or % of threshold, From/To, confirmed threshold | `Shared/PowerTargetFields.swift` and `Shared/PowerTarget.swift`: percentage conversion requires the manual/confirmed anchor. Default 250–270 W is an initializer, not individualized advice. |
| Watch target and threshold locations | Watch `Views/SettingsView.swift`: Workout → TARGETS → Target Power; Workout → YOUR NUMBERS → Threshold power. |
| Display field names | Watch `Model/UserPreferences.swift`: Stryd Power and Power vs target. |
| Roughly five-second power guidance, separate voice/haptic controls | `Shared/PowerGuidance.swift`: rolling samples; cues include settling, tolerance and cooldown rules, so immediate alerts are not promised. Watch `Model/WorkoutManager.swift` uses `livePodWatts`, paid access, spoken-cue/Quiet Mode settings. |
| Missing readings do not substitute Apple's separate watts | `WorkoutManager.livePodWatts` checks the pod's live status; `PowerGuidance` clears the average when missing. |
| Work and recovery power targets | Phone `Views/IntervalBuilderView.swift`: separate `Work power` / `Recovery power` fields; Watch interval HUD compares live power with the active step's target. |

## Publication authorization and verification

The owner explicitly requested “Deploy the guide” on November 10 after receiving the Stryd draft and the disclosure that a connected-pod walkthrough remained pending. This authorizes publication of this specific article. Set the actual publication date to November 10, remove draft/noindex markers, and activate the registry-driven index and sitemap entry. Retain the public source-verification qualification; this instruction is not evidence of a physical-device test.

Pending physical shipping-app check with a connected pod: verify pairing and waking; a live watt reading; the separate distance switch; phone/Watch target sync; both display fields; manually confirmed percentage conversion; work/recovery target transitions; missing-pod behavior; and spoken/haptic/Quiet Mode settings. Use synthetic example targets and no uploaded personal health data. No physical-device test or screenshot is claimed here.

Website validation completed November 10:

- `npm ci` succeeded (144 packages). Lockfile and dependencies unchanged.
- `npm run build -- --webpack` succeeded: 26 static routes. Existing React 18 deprecation warning only.
- `python3 scripts/check-seo.py` passed for 21 published pages.
- Initial draft checks passed for canonical URL, noindex/follow, unpublished schema, exclusion from index/sitemap, internal links and removal of the rejected units route. Publication checks subsequently verify the dated article metadata, index/sitemap inclusion and absence of draft/noindex markers.
- Browser review at 390×844 and 1280×900: title, setup instructions and percentage/interval text wrap readably; document scroll width equals viewport width at both sizes. Viewport override reset afterward.
- The article's three Stryd help links were opened as original sources above. The unchanged App Store campaign link was opened during the same day's initial guide validation.
- Analytics/consent code unchanged. No app/device test performed. Publication deployment follows the owner's explicit approval through PR #40 and the existing GitHub Pages workflow.
