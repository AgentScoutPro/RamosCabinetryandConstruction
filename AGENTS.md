<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# C0D3AI Ramos Website Standard

This project uses the C0D3AI cinematic website standard for home page and premium
experience work.

When designing, rebuilding, or substantially editing the home page, treat the experience
as a scroll-led story of craft:

1. Raw material and room problem.
2. Measurement and design judgment.
3. Shop-built cabinetry and finish carpentry.
4. Installation and fit.
5. Finished room transformation.
6. East Valley trust, reviews, licensing, and free-estimate path.

Use the installed `scroll-world` skill when available:

`../.agents/skills/scroll-world/SKILL.md`

The home page should be the interactive showcase for the Ramos standard: real project
media, scrubbed video, before/after or material-to-finish reveals, client-specific proof,
and quiet premium UI. Keep the existing route structure, service pages, city pages,
gallery, reviews, contact page, sitemap, and SEO intent intact unless the user explicitly
asks to change them.

Avoid generic AI-site aesthetics, abstract gradient hero sections, decorative motion with
no story job, and copy/visuals that could fit another contractor by swapping the logo.

## Scroll Video Standard

All new scroll-driven video sections must use the proven production scrub pattern from Little Piece of Paradise and the C0D3AI reference sites:

- Use the shared `VideoScrubScene` and `useScrollScrubbedVideo` implementation.
- Do not create one-off scroll video engines, interpolation loops, autoplay scrubs, or section-specific seek logic.
- Scrubbed video uses `preload="metadata"`, `muted`, `playsInline`, and a pinned sticky viewport.
- Playback is driven by Framer Motion scroll progress through one `requestAnimationFrame`-batched `currentTime` update per progress change.
- `fastSeek` is only used during metadata/canplay sync, never as the continuous scroll path.
- Pacing is controlled by section runway height, not by capping video progress or smoothing currentTime.
- Scroll-scrub source videos must be encoded for seeking before use. Hero/feature scrub videos need dense keyframes, ideally all-intra for short hero clips (`-g 1 -keyint_min 1 -sc_threshold 0 -bf 0`), because long-GOP AI exports will stutter no matter how clean the React code is.
- Reduced motion falls back to a static final/poster frame with readable copy.
