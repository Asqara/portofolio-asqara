# ASQARA Portfolio Design System

## 01 Philosophy

The portfolio is an engineering interface presented with editorial discipline. It combines cyber-brutalist structure, Swiss typographic hierarchy, and the functional density of a technical console. Visual quality comes from composition, type, spacing, image treatment, and meaningful interaction—not decorative effects.

The interface must never drift into generic AI-generated SaaS aesthetics.

## 02 Visual References

The reference language is architectural: exposed columns, fine rules, registration marks, numbered sections, oversized condensed-feeling type, and small monospace annotations. It is interpreted for ALFATH / ASQARA through system topology, data-flow imagery, production status, and operational metrics.

## 03 Grid

- Wide and desktop: 12 conceptual columns inside a `1500px` maximum shell.
- Tablet: 8 conceptual columns with two-column project and profile layouts.
- Mobile: 4 conceptual columns with intentional vertical sequences.
- The page shell is `viewport - 48px`, tightening to `-32px` and `-24px` at smaller widths.
- Border lines may reveal column boundaries; content should align to them.

## 04 Typography

- Primary: Geist. Used for display headlines, project titles, and reading text.
- Technical: Geist Mono. Used for metadata, navigation, coordinates, status, and compact body copy.
- Hero: `clamp(4rem, 8–13vw, 13rem)` depending on context.
- Section titles: `clamp(3rem, 5.7vw, 6rem)`.
- Body: approximately `.86rem–1.1rem`, with deliberate line height.
- Display type uses tight leading and negative tracking. It never overlaps adjacent content.
- All flexible text children have a minimum width of zero and long strings wrap safely.

## 05 Color

Light:

- Background `#F4F3EF`
- Surface `#FAF9F6`
- Text `#101010`
- Secondary `#595959`
- Border `#D4D2CC`
- Electric Violet `#8155FF`
- Signal Lime `#D7FF3F`

Dark:

- Background `#0C0D0F`
- Surface `#121317`
- Text `#F2F1EC`
- Secondary `#A8A8A2`
- Border `#292B30`
- Electric Violet `#9875FF`
- Signal Lime `#D7FF3F`

Violet signals interaction, section identity, and active system paths. Lime is reserved for positive status and scarce operational highlights.

## 06 Structural Lines

Borders are one pixel and use the border token. Surfaces default to square corners. Section dividers are functional and often carry grid alignment. Decorative crosshairs are permitted only when they support the technical visual language.

## 07 Spacing

The base rhythm uses `4, 8, 12, 18, 24, 32, 48, 64, 80`. Large display compositions may extend to `100+`. Dense technical modules use 12–24px; narrative sections use 50–90px.

## 08 Images

- Covers and gallery images use an 8:5 aspect ratio.
- Source artwork is authored at `1600 × 1000`.
- Images reserve intrinsic dimensions through `next/image`.
- Screenshots use `object-fit: cover`; dashboard-heavy images may use top-center positioning.
- Default presentation slightly reduces saturation; hover restores it with a maximum scale of `1.025`.

## 09 Motion

- Motion must feel measured and engineered.
- Common durations: 180–450ms.
- Paths activate, packets travel linearly, nodes pulse subtly, and media scales minimally.
- No bounce, scroll hijacking, or decorative perpetual rotation outside the single scan indicator.
- `prefers-reduced-motion` collapses animation and restores native scroll behavior.

## 10 Navigation

The desktop header is a sticky architectural strip with a wordmark, section links, real Bogor time, theme control, and direct project contact. Mobile replaces the desktop links with a full-width technical menu panel; it does not use a floating drawer.

## 11 Project Cards

Cards are cells in the project grid, never floating containers. They share structural borders and include media, index, title, category, year, concise description, and a restrained stack line. Hover changes image scale, saturation, arrow position, and border emphasis only.

## 12 Project Detail

Case studies use an oversized title, fixed-ratio hero media, summary grid, challenge/solution narrative, system layers, supplied metrics, optional gallery, and a full-width next-project transition. Null links, empty galleries, and empty metrics are not rendered.

## 13 Dark Mode

Dark mode uses independently chosen surface and border values rather than inversion. White-on-black system sections reverse in dark mode to preserve their editorial interruption. The chosen theme follows system preference by default and persists through `next-themes`.

## 14 Responsive Behavior

- `1440+`: full 12-column rhythm and four-column work grid.
- `1024–1439`: tightened shell; work may reduce to two columns when required.
- `768–1023`: eight-column logic, technical visuals recompose, not merely shrink.
- `320–767`: four-column logic, single-column project cells, vertical architecture and data flow, stacked metadata.
- Minimum controls are approximately 44px.
- No horizontal overflow is accepted at 320, 375, 390, 430, 768, 1024, 1280, 1440, or 1920px.

## 15 Accessibility

Use semantic landmarks and heading order, visible keyboard focus, meaningful alt text, reduced-motion handling, real link destinations, and touch-accessible equivalents for hover behavior. Contrast targets WCAG AA. The native cursor is retained; contextual media labels appear only on fine pointers.

## 16 Anti-Patterns

Prohibited:

- purple gradients and giant glow blobs
- glassmorphism
- pill-heavy or highly rounded card systems
- floating technology icons
- typing gimmicks, carousels, and cursor replacement
- skill percentages or circular meters
- fake system telemetry, uptime, adoption, or engagement numbers
- generic startup copy and vague claims
- badge walls, browser-window mockups, and ornamental dashboards
- animation on every element

When decoration conflicts with hierarchy, structure, typography, or clarity, clarity wins.
