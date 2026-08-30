# Plan: Polish pass — build health + SEO structured data

## Scope
Two low-risk, high-value polish items only. No visual/layout/typography changes
— the earlier sitewide audit already unified those, and they verified clean.

## 1. Production build health check
- Run `bun run build` from the project root and capture the result.
- If it passes cleanly (exit 0, no errors), no changes needed.
- If it surfaces warnings or errors (missing imports, type issues, unused vars),
  fix each at its source so the published build is green before going live.
- This is a verification step; only edit code if the build actually fails.

## 2. SEO structured data (Person / Profile JSON-LD)
Add `application/ld+json` Person structured data, reusing the existing `scripts`
pattern already used in `src/routes/blog.$slug.tsx` (head → scripts →
`{ type: "application/ld+json", children: JSON.stringify({...}) }`).

### Homepage — `src/routes/index.tsx`
Add a `scripts` array to the existing `head()` with a Person object:
- `@type: "Person"`
- `name: "Dr. Sai Anjuri"`
- `jobTitle: "PharmD"`
- `description`: same value as the page meta description
- `knowsAbout`: ["Pharmacy", "Fitness", "Nutrition", "Photography"]
- `alumniOf`: "Jawaharlal Nehru Technological University, Hyderabad"
- `url`: the published homepage URL (omit if not yet known — leave relative)
- Same `Person` is referenced as `author` in the blog Article JSON-LD already,
  so this gives search engines a consistent author identity.

### About page — `src/routes/about.tsx`
Add a matching `scripts` array to the existing `head()` with a richer Profile:
- `@type: "Person"` (schema.org `ProfilePage` is deprecated; Person is correct)
- `name`, `jobTitle`, `description` (use the About page meta description)
- `alumniOf`: list both JNTU Hyderabad (PharmD) and the school/intermediate
  institutions as `EducationalOrganization` entries with `name` only
- `knowsAbout`: the four disciplines

### What stays unchanged
- No visual changes — layout, colors, typography, spacing untouched.
- No new dependencies.
- No changes to the existing blog Article JSON-LD.
- Education section content on About already added in the previous turn; this
  only adds the invisible structured-data layer.

## Verification
- Re-run `bun run build`; confirm exit 0 with no new warnings.
- Spot-check the homepage and About `<head>` in the browser to confirm the
  `<script type="application/ld+json">` block is present and valid JSON.
- No runtime/visual regression expected (structured data is head-only).
