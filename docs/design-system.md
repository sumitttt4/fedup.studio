# Fedup Studio Design System

## 1) Typography scale

The site follows a two-breakpoint type scale:

- **Mobile**: default (`< md`)
- **Desktop**: `md` and up

| Role | Mobile | Desktop | Usage |
| --- | --- | --- | --- |
| Display heading | 2rem / 32px, 1.15 line-height, 0.01em tracking | 3rem / 48px, 1.1 line-height, 0.01em tracking | Hero headlines |
| Section heading | 1.625rem / 26px, 1.2 line-height | 2.25rem / 36px, 1.15 line-height | Section titles |
| Subheading | 1.125rem / 18px, 1.4 line-height | 1.25rem / 20px, 1.35 line-height | Supporting intros |
| Body | 0.95rem / 15.2px, 1.65 line-height | 1rem / 16px, 1.65 line-height | Paragraph copy |
| Caption / label | 0.7rem / 11.2px, uppercase, 0.16em tracking | 0.75rem / 12px, uppercase, 0.16em tracking | Metadata, chips, eyebrow labels |

### Typography utility classes

- `.ds-heading-display`
- `.ds-heading-section`
- `.ds-subheading`
- `.ds-body`
- `.ds-caption`

## 2) Spacing system

### Section layout

- Standard section vertical padding: `py-16` mobile / `py-24` desktop.
- Content wrapper horizontal padding: `px-6` mobile / `md:px-8` / `xl:px-12`.
- Content max width: `max-w-[1080px]` centered for long-form areas.

### Vertical rhythm

- Heading to copy spacing: `mt-4` to `mt-6`.
- Copy to CTA spacing: `mt-8`.
- Card stacks and repeated blocks: default `gap-4`, dense `gap-3`, roomy `gap-6`.

## 3) Accent rules (`#c84307`)

The accent color is reserved only for:

1. **Primary CTA surfaces and focus rings**.
2. **Emphasis labels / eyebrow tags** that call out a section.
3. **Key stat highlights** where a single value needs emphasis.

Do **not** use `#c84307` as a general decorative color. Neutral grayscale and contextual brand colors should carry the rest of the UI.

## 4) Card / border / radius conventions

- Base card background: `#141414`.
- Base card border: `1px solid rgba(255,255,255,0.1)`.
- Base radius: `rounded-2xl` (16px).
- Prominent cards may use `rounded-[2rem]`.
- Inner mini-cards: `rounded-xl` with subtle border or tonal fill.

Reusable utilities:

- `.ds-card`
- `.ds-card-hero`
- `.ds-chip`

## 5) Accessibility checks

### Contrast

- Body copy uses `text-zinc-300` or lighter against dark surfaces.
- Secondary metadata can use `text-zinc-400` but avoid `text-zinc-500` for long-form text.

### Focus states

- Interactive elements must expose visible keyboard focus:
  - `focus-visible:outline-none`
  - `focus-visible:ring-2 focus-visible:ring-[#c84307]`
  - `focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]`

### Tap target sizing

- Interactive controls target a minimum `44px` height.
- Buttons and chips use `min-h-11` where applicable.

