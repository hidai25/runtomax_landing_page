# Daily guide trial — November 9, 2026

## Draft and scope

Title: **Should you pause your Apple Watch run at traffic lights?**

Proposed route: `/guides/apple-watch-running-auto-pause/`.

Status: unpublished draft. Release-source verification and website checks can be completed, but physical shipping-app verification is unavailable. Owner approval is also pending. No merge or deployment is authorized for this article.

The guide explains a choice, not a universal training rule: auto-pause, manual pause, or uninterrupted recording; RunToMax settings; interval behavior; and moving versus elapsed time. The 10 km / 50 active minutes / 5 paused minutes example is invented arithmetic, not a recorded activity or a device accuracy test. No health records were accessed.

## Novelty and demand evidence

Reviewed main's five guides (intervals, treadmill distance, phone-free running, pace fields, Ultra Action button) and recent website PRs. Pending FIT export (#29), heart-rate strap (#34), track lane (#37), and missing-map (#38) guides do not answer this timing question. This article links to the pace-field and button guides without repeating their setup instructions.

Search Console could not be inspected: the computer-use tool reported the Mac locked, and opening the signed-in Chrome Search Console page failed with a `timeoutMs` tool error. No Search Console connector was available. No impressions, query counts, clicks, ranking or search-volume claims are made.

Original sources opened on November 9:

1. [Runner question: To stop the watch or not stop the watch](https://www.reddit.com/r/runninglifestyle/comments/1wp12yr/to_stop_the_watch_or_not_stop_the_watch/). The retrieved page labels the post **26 days ago**; an exact timestamp was not exposed. A city runner asks whether to pause at stoplights. Replies include both pausing to separate waits and leaving the clock running to avoid a forgotten restart. This demonstrates an actual question and conflicting preferences, not prevalence, physiology, or a defect in any app. No usernames or quotations are reproduced in the guide.
2. [Apple: Change settings in Workout on Apple Watch](https://support.apple.com/en-me/guide/watch/apde0be691be/watchos). No publication date displayed; opened current documentation. The auto-pause section describes the system Settings → Workout → Auto-Pause path for Apple's own Workout app. This is an alternative, explicitly separate from RunToMax's settings.
3. [Strava: Moving Time, Speed, and Pace Calculations](https://support.strava.com/en-us/articles/15401804-moving-time-speed-and-pace-calculations). Page dated **September 18, 2026**. Describes timer time when uploaded runs contain pauses, GPS-derived moving time when they do not, and elapsed time for race-tagged activities. Used only to explain cross-app differences; no direct RTM/Strava sync is advertised.
4. [Public RunToMax App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Version history still lists **1.3.5, October 22**, on this check. Store metadata confirms availability, not device behavior.

Other Reddit openings and a generic Apple URL failed to fetch. They are not used as article evidence. The region-specific Apple URL above opened successfully.

## Release-source verification

App repository tag: `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. Read using `git show`/`git grep`; the development checkout was not changed. Development main is not evidence of shipping availability.

| Article claim | Source at the release commit |
| --- | --- |
| Watch Settings → Workout → Session → Auto-Pause | `runtomax Watch App/Views/SettingsView.swift:35` routes the Workout category; `:318` exposes the Session toggle. `Views/HomeView.swift:283` presents Settings. |
| Auto-pause disabled for an active interval workout | `runtomax Watch App/Model/WorkoutManager.swift:3618` defines interval activity from runtime state; `:7825` guards auto-pause with `!isInIntervalWorkout`, not just work steps. |
| Auto-resume applies to automatic pauses | `WorkoutManager.swift:6246` requires the paused phase and `isAutoPaused`; manual resume remains explicit. No claim of instant transitions or accuracy is made. |
| Recorded pauses excluded from active time | `WorkoutManager.swift:4349` records pause events; `:4458` accumulates paused time; `:6378` subtracts pause accumulation when calculating active time. |
| Summary labels and explanation access | `runtomax/Views/WorkoutDetailView.swift:3659` uses Time / Avg Pace; `:3729` and following show Elapsed Time / Elapsed Pace and open the explanation. |
| Elapsed time and pace calculation | `runtomax/Model/AppModel.swift:1938` combines active duration and pause data within the wall-clock bound; `:1963` scales average pace by elapsed/active time; `:1930` computes duration divided by distance. |

Source-copy caution: the existing explanation at `WorkoutDetailView.swift:3904` reverses the written pace formula (distance ÷ time). Actual model arithmetic divides time by distance. The guide uses the correct arithmetic and does not repeat that copy. No app code was edited as part of this guide.

## Required before publication

- On the shipping 1.3.5 Watch app, confirm the settings labels and toggle visibility.
- With a short synthetic/test Outdoor recording, verify auto-pause/resume and manual pause/manual resume. Check the timer after restarting; do not assert a fixed detection delay.
- Check a structured workout's timed recovery continues while stationary with Auto-Pause enabled.
- Save the test run and confirm Time, Avg Pace, Elapsed Time and Elapsed Pace labels and info access on iPhone.
- Owner approves this exact article. Then set its real publication date and updated date, rerun checks and merge/deploy only with approval.

No new app screenshots are included because a shipping-device capture was unavailable. The page's numerical cards are clearly synthetic examples, not app UI.

## Website validation

The article definition uses `published: null`; index integration is conditional, and the existing sitemap generator excludes unpublished definitions. Robots metadata is noindex, with no fabricated publication date in JSON-LD or Open Graph.


- `npm ci --no-audit --no-fund`: passed with the existing lockfile.
- `npm run build -- --webpack`: passed, including TypeScript and static export. Existing React 18 deprecation warning remains; no dependency versions changed.
- `python3 scripts/check-seo.py`: passed for 21 published pages. Separate draft checks cover this noindex article, since that script follows the sitemap.
- Local headless Chrome: HTTP 200, one H1, correct canonical, noindex and unpublished article/breadcrumb schema, no horizontal overflow at 320, 390 and 1440 px, functioning All guides link, no page JavaScript errors, and no draft card on the index.
- Visually inspected 390 px and 1440 px full-page captures. Added space after the numbered setup steps during review.
- Draft-specific export check: internal link destinations exist, descriptions agree across normal/Open Graph/Twitter metadata, no publication date, no sitemap/index inclusion, existing App Store campaign URL retained.
- App Store campaign link followed to HTTP 200. The three original article citations were opened successfully, as listed above.
- `git diff --check`: passed.

Local reproducible preview captures and browser results: `/private/tmp/rtm-guide-20261109-evidence/`; these temporary files are not production assets. The commit and PR retain the article and research even if the temporary checkout is removed. No analytics/consent implementation was changed. Physical Watch/iPhone checks above remain outstanding.
