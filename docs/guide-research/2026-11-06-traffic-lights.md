# Guide review — November 6, 2026

Question: **Should you pause your running watch at traffic lights?**

Status: **Draft. Do not merge or deploy.** The owner has not approved this article, and the shipping Watch behavior has not been tested on a device.

## Why this question

Reviewed the live branch's guides (interval setup, treadmill distance, running without an iPhone, pace fields) and open draft PRs #29 (FIT export) and #34 (heart-rate straps). None answers this recording-policy question. This article explains the two clocks, gives RunToMax's setting path, addresses planned recovery and provides Apple/Strava alternatives. It does not claim search volume, product superiority, improved fitness or injury prevention.

Search Console could not be read on this run: the authenticated browser connector failed when creating/claiming the task's tabs. The November 2 aggregate snapshot in the app repository was not treated as current query demand. Topic selection comes from the public runner question below, not inferred traffic or download metrics.

## Opened sources

Retrieved November 6, 2026:

1. [Runner discussion: To stop the watch or not stop the watch](https://www.reddit.com/r/runninglifestyle/comments/1wp12yr/to_stop_the_watch_or_not_stop_the_watch/). The original question contrasts pausing at stoplights with keeping the clock running. Replies include both wanting stops excluded and avoiding manual pauses after forgetting to resume. These are anecdotes, not evidence of prevalence or comparative accuracy. Search labelled the post September 24, 2026, while the opened cached page displayed a relative age of 26 days; the article does not assert an exact post date. The original thread was readable through web search's open function; a separate direct HTTP link check received Reddit's 403 block, not evidence of a removed article.
2. [Apple: Change settings in Workout on Apple Watch](https://support.apple.com/en-az/guide/watch/apde0be691be/watchos). Opened and checked the automatic-pause section (Settings → Workout → Auto-Pause), separately from reminders. No publication date displayed; current guide selected watchOS 27. The English Azerbaijan locale was accessible; the unlocalized URL returned 429. This is documentation of Apple's Workout app, not proof that its settings control RunToMax.
3. [Strava: Moving Time, Speed, and Pace Calculations](https://support.strava.com/en-us/articles/15401804-moving-time-speed-and-pace-calculations). Dated September 18, 2026. Describes timer time when pauses are recorded, GPS-derived moving time when no pauses are recorded, and elapsed time for runs tagged as races. Used only to explain an alternative platform's display, not to advertise public RTM-to-Strava sync.
4. [RunToMax public App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Shows version 1.3.5, October 22. Confirms release applicability; does not substitute for a device test.

A second candidate discussion in r/runcommunity timed out when opened and was not used as evidence. No source quotes or competitor workout plans were copied.

## Product verification and limits

Read the shipping submission source, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. Paths and key lines are in `docs/public-release-facts.md`. The Watch setting, default, interval exception, automatic-resume guard and iPhone elapsed-pace fields were checked. No development-main navigation or new Garmin features are described.

No personal HealthKit/Garmin records were accessed. No run was performed or fabricated. No current redesign screenshot is used to represent shipping 1.3.5. The guide's numerical example is explicitly illustrative.

Before publishing, on shipping 1.3.5 with a consented tester and a test activity:

1. Find the Watch gear → Workout → Session → Auto-Pause and confirm the toggle persists.
2. In a safe open area, check automatic pause/resume in an ordinary Outdoor run with the setting on; compare it with off. Do not test in traffic.
3. Pause manually and confirm that manual resumption is required. Do not assume movement resumes every kind of pause.
4. Start a short structured interval session with a timed stationary recovery; confirm its countdown continues with auto-pause on.
5. Save the test and verify the iPhone's Avg Pace, Elapsed Time and Elapsed Pace against the timer behavior. Note that the arithmetic example is not a promise of exact sensor timing.

## Web validation

- `npm ci` completed from the existing lockfile; zero reported dependency vulnerabilities.
- `npm run build -- --webpack` passed: production compile, TypeScript and static export. The supported webpack option avoids the environment's previously observed Turbopack port restriction. Existing Next.js warning about React 18 deprecation remains; dependencies were not changed.
- `python3 scripts/check-seo.py` passed all 20 published sitemap pages: metadata, local links, hreflang, image dimensions and JSON-LD.
- Separate draft checks passed: one H1, canonical/social metadata, noindex/follow, Article/Breadcrumb schema, no publication date, internal links and exclusion from the sitemap. The guide registry automatically adds it to the sitemap when `published` is set; do not put a noindex draft in the sitemap now.
- Local isolated headless Chrome checked 320, 390 and 1440 px widths, with no horizontal overflow or page errors. Index-to-article navigation passed. Mobile and desktop screenshots were inspected. The local consent banner was dismissed via Reject analytics for unobstructed inspection; analytics implementation was not changed.
- App Store campaign destination, Apple and Strava links returned HTTP 200. Reddit was independently opened as described above.
- `git diff --check` passed. No app source, production flags, deployment configuration or existing user checkout was changed.

Local evidence: `/private/tmp/rtm-guide-20261106-evidence/` contains responsive screenshots, `browser-checks.json` and `link-checks.json`. Build log: `/private/tmp/rtm-guide-build-20261106.log`. Browser checks used an isolated headless Chrome because the interactive browser connector failed; they did not access the user's browser profile.

## Approval and publication

This branch includes a draft route and draft index card only. `published` stays null and robots stays noindex. After the device check and approval for this article, set the actual publication date, remove draft/noindex wording, rerun checks, then merge and verify deployment. The prior approval of other guides does not authorize publishing this one.
