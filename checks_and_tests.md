# Checks and Tests

## 2026-11-14 — Step 1 checks

- **VitePress configuration — Passed:** `npm run build` completed successfully with VitePress 2.0.0-alpha.21.
- **Option switch & content parity — Passed for the Step 1 About Me content:** The homepage renders its three cards from one shared data module. The Toggle Styles control changed the reactive style state in both directions with no browser-console errors.
- **Mobile / narrow viewport — Passed for the Step 1 homepage:** At a 375px viewport, the card grid became one column and page width remained 375px, with no horizontal overflow.
- **Keyboard navigation & link check — Partially verified:** The page uses semantic links and a native toggle button with visible focus styling. The Step 1 email link is present. Full keyboard and external-link testing will be completed after the later pages add their required links.

The remaining integrity checks apply to later project, résumé, and external-link content and are not claimed as passed yet.

## 2026-11-14 — Step 2 checks

- **Option 1 structural navigation — Passed:** The About Me, Projects, and Contact & Resume pages render from the Option 1 navigation. Projects includes both in-page jump links, two project shells, card groups, and Check it Out / Honest Status containers.
- **Placeholder-content boundary — Passed:** The new project and résumé sections contain only structural headings and explicit Step 3 placeholders; no case-study body copy, résumé content, or external links were added early.
- **Mobile / narrow viewport — Passed for the new Projects page:** At a 375px viewport, project cards rendered as one column and page width remained 375px, with no horizontal overflow.
- **Build and browser errors — Passed:** `npm run build` completed successfully and the local browser preview reported no console errors.
- **Alternate presentation behavior — Deferred to Step 4:** The Toggle Styles foundation remains available, but Option 2's distinct single-scroll layout and matching-section transitions cannot be fully tested until its structure exists.

## 2026-11-14 — Step 3 checks

- **Production build — Passed:** `npm run build` completed successfully and generated the About Me, Projects, Contact & Resume, and résumé PDF output files.
- **Shared-content and structural check — Passed:** The case-study, contact, and résumé content are rendered from the shared content module. Step 2 placeholder text is absent from source pages.
- **Contact & Resume route — Passed:** The About Me CTA and the navigation link both target the internal Contact & Resume route.
- **Résumé asset integrity — Passed:** The downloadable résumé PDF has the same SHA-256 checksum as the user-provided source PDF.
- **Link availability — Partially passed:** GitHub profile, portfolio repository, and deployed portfolio returned HTTP 200. LinkedIn returned HTTP 999, LinkedIn's automated-request block, so it requires manual browser verification.
- **Visual and keyboard checks — Deferred by request:** No browser visual or interactive testing was performed during Step 3 to conserve usage. These checks remain for the final verification stage.

## 2026-11-14 — Step 4 checks

- **Production build — Passed:** `npm run build` completed successfully and generated the Option 2 route.
- **Option switch mapping — Passed statically:** The three Option 1 pages target Option 2 at `#about-me`, `#projects`, and `#contact-resume`. Option 2 navigation uses those same three anchors and maps its Toggle Styles control back to the corresponding Option 1 route.
- **Option 2 structure — Passed:** The generated single-page route has separate About Me, Projects, and Contact & Resume sections; stacked About Me cards; two desktop project columns; and separate résumé and contact-link structures.
- **Shared-content boundary — Passed:** Option 2 reads only shared labels/titles and retains Step 5 placeholders for its long-form case-study, résumé, and contact content. The Option 1 text was not duplicated into Option 2.
- **Visual and interactive checks — Deferred by request:** No browser visual or interactive testing was performed during Step 4 to conserve usage. Smooth scrolling, mobile presentation, and live toggle behavior remain for final verification.
