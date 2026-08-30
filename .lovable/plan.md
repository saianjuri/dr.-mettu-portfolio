# Plan: Add real photos of Dr. Sai Anjuri

## Goal
Increase authenticity by using a real, professional photo of Dr. Sai Anjuri in the
personal-brand anchor sections, replacing the current generated portrait.

## Recommended sections
1. **Hero (homepage)** — `src/components/site/Hero.tsx`
   - Replace the current `portrait-saianjuri.png` (generated image) with a real
     professional photograph in the circular portrait frame.
   - Keep the existing circular framing, teal accent marks, and `object-cover`
     positioning.

2. **About page** — `src/routes/about.tsx`
   - Replace the rectangular portrait in the editorial hero with the same real
     photograph (or a second, complementary real photo).
   - Keep the existing rounded frame, grounding shadow, and orange accent mark.

## Not recommended
- **Blog article images** — keep the face-free documentary photography. Adding
  a personal photo here would break the editorial privacy/licensing direction
  already established.
- **Portfolio / Expertise** — these are project- and capability-led; no personal
  photo needed.
- **Credibility strip, Footer** — icon-based; no photo slot.

## How it works
- You provide the real photo(s) (upload in chat or confirm they already exist in
  the project).
- I upload each as a Lovable Asset (`.asset.json` pointer) so it's served from
  CDN — no binary file left in the repo.
- I swap the `src` references in `Hero.tsx` and `about.tsx` to the new asset URL(s).
- Keep `portrait-saianjuri.png.asset.json` until the new asset is confirmed
  working, then delete the old generated asset to avoid orphaning CDN objects.

## Open item
I need the actual photo file from you to proceed (upload in chat, or tell me
where it already lives in the project). The plan cannot be implemented without it.
