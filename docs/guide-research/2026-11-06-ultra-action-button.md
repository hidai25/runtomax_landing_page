# Guide review — November 6, 2026

Question: **Sweaty screen? Use the Apple Watch Ultra Action button.**

Status: **Draft. Do not merge or deploy.** Physical shipping-app checks and approval of the completed article remain pending.

## Scope and evidence

The owner specifically requested an Ultra Action button guide for runners bothered by sweaty-screen taps. The article centers one-press pause/resume in RunToMax, with lap marking, an alternative preset and Precision Start. It replaces the previous draft topic within PR #35, rather than adding another daily article. Existing published guides and separate drafts cover intervals, treadmill distance, phone-free runs, pace fields, FIT export and heart-rate straps; none covers this setup.

Search Console was unavailable through the authenticated browser connector. No search-volume, prevalence, performance, download or wet-screen reliability claims are made. The problem is framed conditionally for readers experiencing it, not as a hardware defect or a first-hand test.

## Sources opened on November 6, 2026

1. [Apple: Use the Action button on Apple Watch Ultra models](https://support.apple.com/en-mt/guide/watch/apda005904ef/watchos). Current watchOS guide; no publication date displayed. Documents choosing Workout, selecting a supported app, simultaneous button presses and different press-and-hold functions. Used for system setup and the existence of an Apple Workout alternative; RunToMax behavior is verified separately.
2. [Runner discussion: Change second press of Action button to stop run workout?](https://www.reddit.com/r/applewatchultra/comments/1pbb3bi/change_2nd_press_of_action_button_to_stop_run/). The original poster describes dripping sweat and struggling with touchscreen controls at a finish. Conflicting replies prefer swiping or raise accidental-button concerns. This is anecdotal context, not evidence of prevalence or a competitor defect. Search reported eleven months old, while the cached open page displayed seven months; no exact publication date is asserted. Some replies confuse button names; technical instructions come from Apple and release source, not those replies. No quote, identity or testimonial is republished.
3. [RunToMax public App Store listing](https://apps.apple.com/us/app/runtomax-running-coach-plan/id6767669260). Checked earlier on this same day: version 1.3.5, October 22. Establishes release applicability, not device testing.

## Release verification and publication checks

Checked `v1.3.5-b57-submission`, commit `6b27f42cf2a2febf33b9672906dce46a6794ba04`; references are in `docs/public-release-facts.md`. Verified watchOS 11 availability for intents, Workout picker entries, Buttons → Shortcuts, both presets, Precision Start labels/branches and during-run dispatch. No development-only capabilities, personal health data or fabricated screenshots were used.

Before publishing, verify on a physical Ultra with the shipping app:

- Apple’s Workout app picker exposes RunToMax and the Outdoor Run choice using the stated labels.
- Precision Start from idle opens readiness; the next press starts; an already armed run starts on the next press.
- RunToMax preset: Action pauses and resumes; Action + Side marks a lap during an ordinary run without ending it. Check the on-screen confirmation and timer state.
- System workout style: Action marks a lap; Action + Side pauses and resumes. Verify behavior after a pause, not just the first running-state press.
- Reopening settings retains the chosen mapping. The regular End/save flow succeeds.

This is source-verified instructional content, not a completed physical/wet-screen test. No universal reliability claim is made. Keep noindex, no publication date and sitemap exclusion until checks and owner approval are complete.

## Web validation

- Production webpack build, TypeScript and static export passed. Dependencies and lockfile are unchanged from the earlier successful locked installation; the existing React 18 deprecation warning remains.
- `python3 scripts/check-seo.py` passed all 20 published pages. Additional draft checks passed canonical/social titles, noindex, BlogPosting/Breadcrumb schema, no publication date and sitemap exclusion.
- Isolated headless Chrome checked widths 320, 390 and 1440 px: HTTP 200, one H1, no horizontal overflow or page errors. Index navigation passed; mobile and desktop screenshots were inspected.
- Six internal destinations exist in the export. Apple documentation and the App Store campaign URL returned HTTP 200. Both superseded draft routes are absent.
- `git diff --check` passed. No deployment, app source, analytics settings or personal records changed.

Build log: `/private/tmp/rtm-guide-ultra-action-build-20261106.log`. Screenshots and browser/link results: `/private/tmp/rtm-guide-ultra-action-20261106-evidence/`. Durable preview copy: the chat visualization directory’s `guide-ultra-action-20261106` folder.
