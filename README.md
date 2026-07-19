# fxzan — Portfolio Site
**URL:** https://fxzan.dev  
**Stack:** Pure HTML · Vanilla JS · Tailwind CSS  
**Theme:** Permanent dark mode — no toggle, no light variant

---
---
# Design Reference

## 1. Typefaces

Two fonts. Used with strict boundaries — never swap their roles.

| Token      | Family    | Weights loaded      | Google Fonts import string                    |
| ---------- | --------- | ------------------- | --------------------------------------------- |
| `-display` | Inter     | 300, 400, 500, 600  | `family=Inter:wght@300;400;500;600`           |
| `-mono`    | DM Mono   | 400, 500            | `family=DM+Mono:wght@400;500`                 |

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

**Rules**
- `-display` (Inter) is used for everything except the two places below.
- `-mono` (DM Mono) is used in exactly **two places**: the `fxzan` nav logo and section overline labels. Nowhere else. This is the developer identity signal — its rarity is what makes it work.
- Never use `-mono` for body copy, buttons, headings, or any element not listed in the type scale below.

---

## 2. Color Tokens

Pure monochrome. No hue anywhere. Depth is expressed entirely through layered backgrounds — never shadows.

| Token        | Hex         | Role                                                                  |
| ------------ | ----------- | --------------------------------------------------------------------- |
| `--bg`       | `#0D0D0D`   | Root page background. The darkest layer.                              |
| `--surface`  | `#161616`   | Nav background (scrolled state), footer background, mobile menu bg   |
| `--card`     | `#1C1C1C`   | Project cards, accordion row default bg, work history row bg, screenshot placeholders, tech tags bg |
| `--card-h`   | `#222222`   | Hover state for accordion rows, accordion open body bg, `btn-secondary` hover bg |
| `--border`   | `#2A2A2A`   | All borders and dividers. Section separators, card borders, footer rule, nav scroll border |
| `--accent`   | `#E8E8E8`   | CTA button (`btn-primary`) fill, active nav link color, `focus-visible` outline |
| `--on-accent`| `#0D0D0D`   | Text placed on `--accent` background — `btn-primary` label only       |
| `--text-1`   | `#F0F0F0`   | Primary text — hero name, all headings (h1/h2/h3), nav logo, active states, company names, accordion project names |
| `--text-2`   | `#A0A0A0`   | Body copy, descriptions, nav link default, work role + description, contact sub, accordion desc, `btn-secondary` default color, mobile menu links |
| `--text-3`   | `#555555`   | Receding elements — overlines, captions, work dates, tech tags, footer text, accordion icon, screenshot placeholder text |

**Depth model — darkest to lightest**
```
--bg (#0D0D0D)  →  --surface (#161616)  →  --card (#1C1C1C)  →  --card-h (#222222)
```
No element sits above `--card-h`. No box-shadows anywhere in the UI.

**Absolute rules**
- Never place `--text-1` on `--accent`. Use `--on-accent` (`#0D0D0D`) instead.
- `--accent` appears in three places only: `btn-primary` background, active nav link, `focus-visible` outline. Never decorative.
- `--text-3` is for elements that should recede. Never use it for anything the user needs to read comfortably.
- No hue is ever introduced. If you're reaching for a color, stop.

---

## 3. Typography Scale

Every element in the site maps to exactly one rule below. The rule defines font, size, weight, tracking, color, and line-height. When building a new element, find its rule here first.

| Rule name       | Font       | Size                          | Weight | Tracking   | Color        | Line-height | Used for                                                    |
| --------------- | ---------- | ----------------------------- | ------ | ---------- | ------------ | ----------- | ----------------------------------------------------------- |
| **hero-name**   | `-display` | `clamp(3.5rem, 8vw, 7rem)`   | 300    | `+0.02em`  | `--text-1`   | `1.05`      | Full name in About hero. Weight 300 is intentional — never change it. |
| **portfolio-title** | `-display` | `clamp(2rem, 5vw, 3.5rem)` | 300  | `+0.01em`  | `--text-1`   | `1.1`       | "Things I've built" — Portfolio page hero title             |
| **heading-1**   | `-display` | `clamp(1.6rem, 3vw, 2.2rem)` | 600    | `-0.02em`  | `--text-1`   | `1.25`      | Section headings — "Get in touch", "Other work"             |
| **heading-2**   | `-display` | `clamp(1.4rem, 3vw, 1.9rem)` | 600    | `-0.02em`  | `--text-1`   | `1.25`      | Capstone project titles                                     |
| **feature-title** | `-display` | `0.9375rem`                 | 500    | `0`        | `--text-1`   | `1.4`       | Accordion project names (closed row)                        |
| **body-large**  | `-display` | `0.9375rem`                  | 400    | `0`        | `--text-2`   | `1.75`      | About bio paragraphs, capstone descriptions, contact sub, portfolio hero sub |
| **body**        | `-display` | `1rem`                       | 400    | `0`        | `--text-2`   | `1.65`      | Base body — set on `<body>`. Default for any unstyled copy  |
| **body-small**  | `-display` | `0.875rem`                   | 400    | `0`        | `--text-2`   | `1.7`       | Accordion descriptions, work role, work description         |
| **overline**    | `-mono`    | `0.7rem`                     | 500    | `+0.12em`  | `--text-3`   | `1.0`       | Section labels — `// about`, `// work`, `// project 01` etc. Always lowercase. Always `-mono`. |
| **caption**     | `-display` | `0.75rem`                    | 400    | `0`        | `--text-3`   | `1.5`       | Footer copyright, "Built by me", footer nav links, footer external links |
| **logo**        | `-mono`    | `1rem`                       | 500    | `+0.05em`  | `--text-1`   | `1.0`       | `fxzan` nav wordmark only                                   |
| **nav-link**    | `-display` | `0.875rem`                   | 400    | `0`        | `--text-2`   | `1.0`       | Nav links (About, Portfolio). Active state: `--accent`      |
| **btn-label**   | `-display` | `0.875rem`                   | 500    | `+0.01em`  | see Buttons  | `1.0`       | All button text — primary and secondary                     |
| **work-company**| `-display` | `0.9375rem`                  | 500    | `0`        | `--text-1`   | `1.4`       | Company name in work history                                |
| **work-dates**  | `-mono`    | `0.75rem`                    | 400    | `0`        | `--text-3`   | `1.0`       | Date ranges in work history — the third use of `-mono`, acceptable as data |
| **tag-label**   | `-mono`    | `0.7rem`                     | 400    | `+0.04em`  | `--text-3`   | `1.0`       | Tech tags (`HTML`, `React`, `Tailwind CSS` etc.)            |
| **placeholder** | `-mono`    | `0.75rem`                    | 400    | `0`        | `--text-3`   | `1.0`       | Screenshot placeholder text — `// screenshot — hero`        |

**Global typography rules**
- **Sentence case always.** No Title Case in headings or buttons. Overlines are lowercase only.
- **`-mono` weight ceiling is 500.** Never 600 in DM Mono.
- **`-display` weight ceiling is 600.** Used only for `heading-1` and `heading-2`. Buttons use 500. Body stays at 400. 300 is the hero name and portfolio title only — never use it elsewhere.
- **Max line length for body copy:** `max-width: 65ch`. Applied to `.about-body p`, `.capstone-desc`, `.contact-sub`, `.accordion-desc`.
- **Hero name** scales from `3.5rem` (mobile) to `7rem` (desktop) via `clamp()`. Do not hardcode either end.
- **Overlines always precede a section**, never follow it. Margin below: `1.25rem`.

---

## 4. Layout

### Container

```css
max-width: 900px;
margin:    0 auto;
padding:   0 2rem;
```

Used by: `nav`, `.container` (all page sections), `.footer-inner`, `.footer-bottom`.

### Section padding

| Section                     | Padding           | CSS class / element          |
| --------------------------- | ----------------- | ---------------------------- |
| About — Hero                | `8rem 0 6rem`     | `.hero`                      |
| About — About               | `5rem 0`          | `section` default            |
| About — Work history        | `5rem 0`          | `section` default            |
| About — Contact             | `5rem 0 6rem`     | `section` default            |
| Portfolio — Hero            | `6rem 0 4rem`     | `.portfolio-hero`            |
| Portfolio — Capstone        | `6rem 0`          | `.capstone`                  |
| Portfolio — Minor projects  | `5rem 0`          | `.accordion-section`         |
| Nav height                  | `64px` fixed      | `header`, `#app padding-top` |
| Footer                      | `1.75rem 0`       | `footer`                     |

### Section separators

Sections are separated by `border-top: 1px solid var(--border)`, applied via `section + section` selector. No extra margin between sections — the border does the work.

### Spacing tokens

| Token    | Value  | Used for                                                       |
| -------- | ------ | -------------------------------------------------------------- |
| `-r`     | `4px`  | **All** `border-radius` — buttons, cards, tags, images, focus ring. No exceptions. |
| n/a      | `0`    | Accordion rows — `border-radius: 0`. Flush rectangle intentionally. |

---

## 5. Buttons

Two variants. Each has one job. Never mix their usage.

### `btn-primary` — CTA

**Used for:** "Get in touch" in the nav. One instance per page. Never reuse for project links or secondary actions.

```css
background:    var(--accent);      /* #E8E8E8 */
color:         var(--on-accent);   /* #0D0D0D */
font-family:   -display;           /* Inter */
font-size:     0.875rem;           /* btn-label */
font-weight:   500;                /* btn-label */
letter-spacing: 0.01em;           /* btn-label */
padding:       0.65rem 1.5rem;
border-radius: 4px;                /* -r */
border:        none;
```

| State   | Background  | Color        | Border               |
| ------- | ----------- | ------------ | -------------------- |
| Default | `--accent`  | `--on-accent`| none                 |
| Hover   | `#FFFFFF`   | `--on-accent`| none                 |
| Focus   | `--accent`  | `--on-accent`| `focus-visible` rule |

---

### `btn-secondary` — Actions

**Used for:** Project links (`Live →`, `GitHub →`), email link, LinkedIn link, resume download. Everything that isn't the primary CTA.

```css
background:    var(--card);        /* #1C1C1C */
color:         var(--text-2);      /* #A0A0A0 */
font-family:   -display;           /* Inter */
font-size:     0.875rem;           /* btn-label */
font-weight:   400;                /* btn-label — lighter than primary */
padding:       0.65rem 1.25rem;
border-radius: 4px;                /* -r */
border:        none;
```

| State   | Background  | Color      | Border                      |
| ------- | ----------- | ---------- | --------------------------- |
| Default | `--card`    | `--text-2` | none                        |
| Hover   | `--card-h`  | `--text-1` | `box-shadow: inset 0 0 0 1px var(--text-3);`|
| Focus   | `--card`    | `--text-2` | `focus-visible` rule        |

**Button group spacing:** `gap: 0.75rem` in a flex row. Use `flex-wrap: wrap` so groups reflow cleanly on narrow viewports.

**Button rules**
- No box-shadows on any button, ever.
- No all-caps. Sentence case only.
- `btn-secondary` weight is 400, not 500 — it reads lighter than primary on purpose.

---

## 6. Navigation

### Structure

```
[fxzan logo]          [About]  [Portfolio]          [Get in touch]
```

| Element       | Typography rule | Color default | Color active/hover  |
| ------------- | --------------- | ------------- | ------------------- |
| Logo `fxzan`  | `logo`          | `--text-1`    | `--text-1` (static) |
| Nav links     | `nav-link`      | `--text-2`    | hover: `--text-1` · active: `--accent` |
| CTA button    | `btn-primary`   | —             | see Buttons         |

Active page link uses `aria-current="page"` and `.active` class → `color: var(--accent)`.

### Scroll states

| State    | Background                                          | Border-bottom           | Shadow |
| -------- | --------------------------------------------------- | ----------------------- | ------ |
| At top   | `transparent`                                       | none                    | none   |
| Scrolled | `rgba(22,22,22,0.9)` + `backdrop-filter: blur(10px)`| `1px solid var(--border)` | none |

Triggered at `scrollY > 10px`. Class `.scrolled` added to `<header>`.

### Mobile (≤ 640px)

Nav links and CTA button are hidden. Burger button appears — three `1.5px` bars in `--text-1`.

**Burger open state:** bars animate to an `×` via `transform: translateY + rotate`. No separate close icon needed.

**Mobile menu:** drops below the nav bar at `top: 64px`, `background: var(--surface)`, `border-bottom: 1px solid var(--border)`. Contains `nav-link` links and `btn-primary` CTA. Font uses `body` rule at `1rem` for links.

---

## 7. Section Overlines

Every section starts with an overline label. This is the `//` prefix pattern — the quiet developer identity marker.

**Typography rule:** `overline`  
**Color:** `--text-3`  
**Font:** `-mono` (DM Mono 500)

```
// about
// work
// contact
// selected work
// project 01
// project 02
// project 03
// more projects
```

```css
.overline {
  font-family:    'DM Mono', monospace;
  font-size:      0.7rem;
  font-weight:    500;
  letter-spacing: 0.12em;
  color:          var(--text-3);
  text-transform: lowercase;
  display:        block;
  margin-bottom:  1.25rem;
}
```

- Always placed **above** the section heading, never below.
- Always lowercase. No exceptions.
- Numbered overlines (`// project 01`) only where sequence has real meaning — the ordered capstone projects. Not used decoratively.

---

## 8. About Page

### Hero section

```
[overline]     // full-stack developer
[name]         Faizan
               Ahmed
[descriptor]   Frontend-focused. Building clean, considered experiences for the web.
               ─────────────────────────────────────────────── (--border rule)
```

| Element      | Typography rule | Notes                                    |
| ------------ | --------------- | ---------------------------------------- |
| Overline     | `overline`      | `// full-stack developer`                |
| Name         | `hero-name`     | Two lines. Weight 300. Never bold.       |
| Descriptor   | `body`          | `--text-2`. `max-width: 42ch`.           |
| Rule         | —               | `border-top: 1px solid var(--border)`. `margin-top: 5rem`. |

### About section

Two-column grid: `1fr 2fr`, `gap: 4rem`. Left column holds the overline. Right column holds the bio.

| Element      | Typography rule | Notes                          |
| ------------ | --------------- | ------------------------------ |
| Overline     | `overline`      | `// about`                     |
| Bio text     | `body-large`    | `max-width: 65ch`. `line-height: 1.75`. Paragraphs separated by `margin-top: 1rem`. |

### Work history section

Plain list. No timeline graphics or icons. Each row: `border-top: 1px solid var(--border)`. Last row also has `border-bottom`.

Grid per row: `grid-template-columns: 1fr auto`, `gap: 0.5rem 2rem`.

| Element      | Typography rule | Notes                                       |
| ------------ | --------------- | ------------------------------------------- |
| Overline     | `overline`      | `// work`                                   |
| Company      | `work-company`  | `--text-1`, weight 500                      |
| Role         | `body-small`    | `--text-2`. `margin-top: 0.2rem`.           |
| Description  | `body-small`    | `--text-2`. `margin-top: 0.35rem`. `grid-column: 1 / -1`. |
| Dates        | `work-dates`    | `-mono`. `--text-3`. Right-aligned via grid auto column. |

### Contact section

```
[overline]    // contact
[heading]     Get in touch          ← heading-1 rule
[sub]         [one line invite]     ← body-large rule
[buttons]     [email]  [GitHub →]  [LinkedIn →]   ← btn-secondary × 3
```

Button group: `display: flex`, `gap: 0.75rem`, `flex-wrap: wrap`.

---

## 9. Portfolio Page

### Portfolio hero

```
[overline]    // selected work
[title]       Things I've built     ← portfolio-title rule
[sub]         [one sentence]        ← body-large rule, max-width: 55ch
```

Padding: `6rem 0 4rem`.

### Capstone project sections

Each capstone is a full-width section, `padding: 6rem 0`, separated by `border-top: 1px solid var(--border)`.

```
[overline]        // project 01
[title row]       [Project name]          [Live →]  [GitHub →]
[description]     [max 3 sentences]
[tech tags]       [Tag]  [Tag]  [Tag]
[screenshots]     [image]  [image]
                  [wide image spanning both columns — optional]
```

| Element        | Typography rule  | Notes                                         |
| -------------- | ---------------- | --------------------------------------------- |
| Overline       | `overline`       | `// project 01`, `// project 02`, etc.        |
| Title          | `heading-2`      | `--text-1`. Left side of flex row.            |
| Action buttons | `btn-secondary`  | `Live →`, `GitHub →`. Right side, `gap: 0.75rem`. |
| Description    | `body-large`     | `--text-2`. `max-width: 60ch`. `line-height: 1.75`. `margin-bottom: 1.5rem`. |
| Tech tags      | see Tech Tags    | `margin-bottom: 2rem`.                        |
| Screenshots    | see Screenshots  | —                                             |

### Tech Tags

```css
.tech-tag {
  font-family:    'DM Mono', monospace;   /* tag-label rule */
  font-size:      0.7rem;
  font-weight:    400;
  letter-spacing: 0.04em;
  color:          var(--text-3);
  background:     var(--card);
  border:         1px solid var(--border);
  padding:        0.25rem 0.6rem;
  border-radius:  4px;                    /* -r */
}
```

Tag group: `display: flex`, `flex-wrap: wrap`, `gap: 0.5rem`.

### Screenshots

```css
.capstone-screens {
  display:               grid;
  grid-template-columns: 1fr 1fr;
  gap:                   1rem;
}
.screen-placeholder {
  background:   var(--card);
  border:       1px solid var(--border);
  border-radius: 4px;
  aspect-ratio: 16/10;
}
/* Wide hero shot — spans full width */
.capstone-screens.wide .screen-placeholder:first-child {
  grid-column:  1 / -1;
  aspect-ratio: 16/7;
}
```

Placeholder text uses `placeholder` typography rule.

### Minor projects — Accordion

Section padding: `5rem 0`. `border-top: 1px solid var(--border)`.

Heading row:

| Element    | Typography rule | Notes                              |
| ---------- | --------------- | ---------------------------------- |
| Overline   | `overline`      | `// more projects`                 |
| Heading    | `heading-1`     | "Other work"                       |
| Sub        | `body-small`    | One sentence. `--text-2`.          |

**Accordion row (closed state)**

```css
.accordion-trigger {
  background:  var(--card);         /* --card */
  padding:     1.1rem 1.25rem;
  border-radius: 0;                 /* flush — no radius */
}
```

Row layout: flex, `justify-content: space-between`, `gap: 1rem`.

| Element          | Typography rule  | Notes                                            |
| ---------------- | ---------------- | ------------------------------------------------ |
| Project name     | `feature-title`  | `--text-1`. Truncates with ellipsis if too long. |
| Preview tags     | `tag-label`      | 2–3 tags max in closed row. Hidden on mobile.    |
| `+` icon         | `overline` font  | `-mono`, `--text-3`. Rotates `45deg` when open → becomes `×`. |

**Accordion states**

| State   | Row background | Icon transform   | Body           |
| ------- | -------------- | ---------------- | -------------- |
| Closed  | `--card`       | `rotate(0)`      | `max-height: 0`, `opacity: 0` |
| Hover   | `--card-h`     | `rotate(0)`      | unchanged      |
| Open    | `--card-h`     | `rotate(45deg)`  | `max-height: scrollHeight`, `opacity: 1` |

```css
transition: max-height 0.3s ease;                       /* body panel */
transition: background 0.15s;                           /* trigger row */
transition: transform 0.25s;                            /* icon */
```

**Accordion body (open state)**

Background: `--card-h`. `border-top: 1px solid var(--border)`. Padding: `1.25rem`.

| Element         | Typography rule | Notes                                  |
| --------------- | --------------- | -------------------------------------- |
| Description     | `body-small`    | `--text-2`. `max-width: 65ch`. `line-height: 1.7`. |
| Tech tags (full)| `tag-label`     | Complete list, all tags shown.         |
| Action buttons  | `btn-secondary` | `Live →`, `GitHub →`. `gap: 0.5rem`.  |

One accordion open at a time — opening a new one closes the previous.

---

## 10. Footer

```
[nav links]       About  ·  Portfolio          [ext links]  GitHub  ·  LinkedIn
──────────────────────────────────────────────────────────────────────────────
© 2025 Faizan                                               Built by me
```

```css
footer {
  background:  var(--surface);
  border-top:  1px solid var(--border);
  padding:     1.75rem 0 1rem;
}
```

Internal rule between rows: `border-top: 1px solid var(--border)`, `margin-top: 1.25rem`.

| Element          | Typography rule | Color      | Hover      |
| ---------------- | --------------- | ---------- | ---------- |
| Nav links        | `caption`       | `--text-3` | `--text-2` |
| External links   | `caption`       | `--text-3` | `--text-2` |
| Copyright        | `caption`       | `--text-3` | static     |
| "Built by me"    | `caption`       | `--text-3` | static     |

---

## 11. Accessibility

| Feature                | Implementation                                                    |
| ---------------------- | ----------------------------------------------------------------- |
| Keyboard nav           | All interactive elements reachable by `Tab`                       |
| Focus ring             | `outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px` — applied via `:focus-visible` |
| Accordion ARIA         | `aria-expanded`, `aria-controls` on trigger; `role="region"` on panel |
| Active nav link        | `aria-current="page"` + `.active` class                          |
| Burger button          | `aria-label="Open navigation menu"` / `"Close navigation menu"` toggled on state |
| Focus trap             | Mobile menu traps focus while open — `trapFocus(container, signal)` utility |
| Reduced motion         | `@media (prefers-reduced-motion: reduce)` sets all transitions to `0.01ms` |

---

## 12. Responsive Breakpoints

| Breakpoint | Width    | Changes                                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------------------ |
| Mobile     | ≤ 640px  | Nav links hidden → burger menu; about grid → 1 column; capstone screenshots → 1 column; accordion preview tags hidden; work item dates move below company |
| Desktop    | > 640px  | Full layout as documented above                                                            |

---

## 13. What this design is not

Things deliberately excluded. If you're tempted to add these, don't.

- No skills section with progress bars, percentages, or technology logo grids
- No scroll-triggered reveals, or parallax, minimal entrance animations.
- No gradients anywhere
- No coloured accents — every hex value is a shade of grey or near-white/near-black
- No box-shadows on any element
- No `border-radius` larger than `4px`
- No blog section unless there are actual posts worth reading
- No testimonials
- No visitor counters or social proof widgets
- No dark/light toggle — permanent dark only
