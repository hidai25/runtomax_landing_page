# Publishing a RunToMax guide

The index is `app/(en)/guides/page.tsx`. Each guide is a static Next.js route under `app/(en)/guides/`, except the already-published interval guide, whose existing URL must remain valid. The website is a static export deployed from `main` through GitHub Pages.

Before publishing:

1. Choose a specific question relevant to runners, and check search results and original sources. Product-specific questions and broader educational questions can coexist; answer broader questions honestly rather than implying RunToMax is the only option. Do not invent search volume or testimonials.
2. Verify product steps, feature availability and screenshots against the current shipping iPhone/Watch app. Simulator examples must contain only synthetic data and be labelled where appropriate. If verification is unavailable, leave the article unpublished.
3. For training or health claims, consult appropriate reliable sources, represent uncertainty and avoid promises of injury prevention or outcomes. Avoid fabricating author credentials or first-hand testing.
4. Add an accessible route with unique metadata and canonical URL, a relevant link to the app and links to relevant guides or feature pages. Add the article to the `guides` array on the index and to `app/sitemap.ts`. The publication date must reflect actual release, not a fabricated revision or test date. Reuse the existing website-guides campaign link where applicable.
5. Run `npm ci` and `npm run build`, inspect the static pages and links at mobile and desktop sizes, and check consent behavior if touched. Use a branch and pull request; merge only when authorized. Verify GitHub Pages and the live URL after deployment.

Create at most one well-checked article per day; a day with no publishable guide is preferable to an inaccurate or duplicate article. Review Search Console and App Store campaign aggregates over time. Search Console impressions are not website visits; website clicks to the App Store are not downloads, and App Store campaign metrics can be delayed or withheld below privacy thresholds.
