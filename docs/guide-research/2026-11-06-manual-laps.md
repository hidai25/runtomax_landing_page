# Guide review — November 6, 2026

Question: **How to mark laps on Apple Watch during a run.**

Status: **Draft. Do not merge or deploy.** Shipping Watch behavior still needs a physical-device check; the owner has not approved this replacement article for publication.

## Editorial scope

The owner requested a different subject. This replacement covers a practical RunToMax task: recording laps in an ordinary Outdoor run when a warm-up, rep or recovery does not have a preplanned end. It is not another workout-builder article. Reviewed the existing guides (interval setup, treadmill distance, running without an iPhone, pace fields) and separate drafts #29 (FIT export) and #34 (heart-rate straps) to avoid duplication.

Search Console could not be read: the authenticated browser connector failed when creating or claiming task tabs. The November 2 aggregate snapshot was not treated as current query demand. There are no search-volume, prevalence, competitive-superiority or download claims.

## Opened sources

Retrieved November 6, 2026:

1. [Runner question: Lap function in an open run](https://www.reddit.com/r/watchletic/comments/1qpej2g/lap_function_in_a_open_run/). The original question asks about freestyle sessions and warm-ups whose length changes with the route. Another runner describes group training where the session is unknown beforehand. Conflicting replies say lap controls already exist, including a response describing the Crown + Side setting. This supports a discoverability/how-to question, not a verified competitor defect or evidence of widespread demand. Search indexed February 2, 2026; the opened cached page displayed a relative age of seven months. No exact publication date is asserted in the article. No quotes or names are republished.
2. [Apple: Start a workout on Apple Watch](https://support.apple.com/en-az/guide/watch/apdd16e8761a/watchos). The “Use the workout controls” section documents marking a segment, including double-tapping the display. Used only for a short alternative-app explanation. No publication date displayed; the opened guide is the current watchOS guide. The English Azerbaijan locale was accessible; some other Apple guide URLs returned rate limits. Apple’s app controls do not establish RunToMax’s controls.
3. [RunToMax public App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Shows version 1.3.5, October 22. Confirms release applicability, not a fresh device test.

Two other candidate Reddit pages could not be opened and were excluded. The published article does not need to repeat the Reddit discussion: its purpose is answering the practical question, with product instructions grounded in release source.

## Product checks and limits

Checked source tag `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`. Detailed file references are in `docs/public-release-facts.md`. Verified the controls location, plain versus combined Lap actions, editor labels, Ultra shortcut preset, Auto-Lap independence and free basic access. Did not use development main to claim feature availability, copy competitor workouts or access personal health records.

The example is illustrative, not a prescribed workout or claimed first-hand test. No screenshots were fabricated. No physical Watch test is claimed.

Before publication:

- On the shipping app, record a synthetic short Outdoor session, swipe left, tap LAP and confirm the overall timer continues and metrics return.
- Check the Buttons → Buttons editor, plain Lap and combined-action labels, and Workout → Auto-Lap → Enabled path.
- Confirm manual-only behavior with Auto-Lap off and the presence of automatic laps with it on.
- On an Ultra with the Action button bound to RunToMax, verify System workout style maps Action to Lap and Action + Side to pause/resume.
- Obtain the owner’s approval of this specific replacement article, then add the actual publication date and remove noindex. The existing sitemap automatically includes dated guides; this draft stays excluded until then.

## Web validation

- Production webpack build, TypeScript and static export passed. The dependency lockfile is unchanged from the successful locked installation; no dependency changes were needed. The existing React 18 deprecation warning remains.
- `python3 scripts/check-seo.py` passed all 20 published pages. Separate draft checks passed canonical/social titles, noindex, BlogPosting/Breadcrumb schema, absent publication date and sitemap exclusion.
- Isolated headless Chrome checked widths 320, 390 and 1440 px: HTTP 200, one H1, no horizontal overflow and no page errors. Index navigation to the replacement passed. Mobile and desktop screenshots were inspected.
- All seven internal link destinations exist in the export. Apple’s documentation and the App Store campaign destination returned HTTP 200. The superseded unpublished route is absent from the export.
- `git diff --check` passed. No production deployment, analytics setting change or app source modification was performed.

Local build log: `/private/tmp/rtm-guide-manual-laps-build-20261106.log`. Browser screenshots and JSON check results: `/private/tmp/rtm-guide-manual-laps-20261106-evidence/`. A durable preview copy is under the chat’s visualization directory, `guide-manual-laps-20261106`.
