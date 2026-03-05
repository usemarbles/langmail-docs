---
name: langmail-brand
description: >
  Applies langmail's official brand colors, typography, components, and voice
  to any artifact built for langmail.dev or its documentation. Use whenever
  building or styling any web page, UI component, or written content for the
  langmail project.
resources:
  - .claude/skills/langmail-components.html
---

# langmail Brand System

## Overview

langmail is an open-source email preprocessing library for LLM consumption,
built in Rust with bindings for Node.js and Python. The visual identity sits
at the intersection of editorial email culture and developer tooling precision.
Always dark. Never light.

**Keywords**: langmail, brand, design system, colors, typography, components,
voice, tone, developer docs, open source

---

## 1. Colors

All surfaces use a warm near-black foundation with amber as the sole accent.
There are no secondary accent colors.

### CSS Variables

```css
:root {
  --bg:        #0F0D0A;  /* Page background — near-black, warm undertone    */
  --surface:   #1A1610;  /* Cards, panels, elevated surfaces                */
  --surface-2: #221D14;  /* Deeply nested surfaces, hover states            */
  --border:    #2E2618;  /* All dividers and borders                        */
  --amber:     #E8A838;  /* Primary accent — CTAs, highlights, active state */
  --amber-d:   #C48A20;  /* Hover / pressed variant of accent               */
  --amber-sub: #F0C878;  /* Strings in code, softer amber contexts          */
  --text-1:    #F4F0E8;  /* Primary text — slightly warm white              */
  --text-2:    #8A7A5A;  /* Secondary text — captions, metadata, placeholders */
  --text-3:    #4A4030;  /* Tertiary — disabled states, very subtle elements */
  --code-bg:   #130F08;  /* Code block backgrounds                          */
}
```

### Usage Rules

- `--bg` is always the outermost canvas. Never use pure `#000000`.
- `--amber` is used sparingly — CTAs, active states, accent text, logo mark.
  Do not use it for large fills or backgrounds.
- `--text-2` is the default for all UI chrome, nav links, labels, and captions.
  `--text-1` is reserved for content that demands reading attention.
- Amber on dark backgrounds (`--bg` or `--surface`) always passes contrast.
  Never place amber on `--amber-sub` or light surfaces.
- There is no light mode. Do not add one.

---

## 2. Typography

Three fonts form a strict hierarchy. Do not substitute or add fonts.

| Role             | Font         | Fallback        |
|------------------|--------------|-----------------|
| Display/Headings | Lora         | Georgia, serif  |
| Body / UI        | Geist        | system-ui, sans |
| Code             | Geist Mono   | monospace        |

### Google Fonts import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Geist:wght@300;400;500&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Name    | Font       | Size  | Weight | Line-height | Letter-spacing | Color      |
|---------|------------|-------|--------|-------------|----------------|------------|
| Display | Lora       | 48px  | 400    | 1.05        | -0.01em        | --text-1   |
| H1      | Lora       | 36px  | 400    | 1.10        | -0.01em        | --text-1   |
| H2      | Lora       | 24px  | 400    | 1.20        | 0              | --text-1   |
| H3      | Geist      | 16px  | 500    | 1.30        | 0              | --text-1   |
| Body    | Geist      | 15px  | 300    | 1.70        | 0              | --text-1   |
| Small   | Geist      | 13px  | 300    | 1.60        | 0              | --text-2   |
| Label   | Geist Mono | 11px  | 400    | 1.40        | 0.10em         | --amber    |

- Italic in Lora headings uses `--amber` for the italic span. Example:
  `Email preprocessing for <em style="color:var(--amber)">LLM consumption</em>`
- Labels are always uppercase: `text-transform: uppercase`
- H3 and below use Geist (sans-serif), not Lora

---

## 3. Logo & Wordmark

### Wordmark

```html
<span style="font-family:'Lora',serif; letter-spacing:-0.01em">
  <span style="color:#F4F0E8">lang</span><span style="color:#E8A838">mail</span>
</span>
```

- `lang` → `--text-1` (#F4F0E8)
- `mail` → `--amber` (#E8A838)
- Always lowercase. Never all-caps, never title-case.

### Envelope mark (SVG)

```svg
<svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Body: white/text-1 -->
  <rect x="1" y="1" width="38" height="28" rx="2"
        stroke="#F4F0E8" stroke-width="1.5"/>
  <!-- Flap fold: amber -->
  <path d="M1 4L20 17L39 4"
        stroke="#E8A838" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

- Rectangle (body) → `--text-1` (#F4F0E8) — mirrors `lang`
- Fold line (flap) → `--amber` (#E8A838) — mirrors `mail`
- Outline only. No fills. No other envelope styles.
- Adjust `stroke-width` by render size: 1.5 at ≥32px, 2 at 16–32px, 2.5 at <16px

### Logo combinations

```html
<!-- Nav size (18px wordmark) -->
<div style="display:flex; align-items:center; gap:9px">
  <svg width="22" height="16" viewBox="0 0 40 30" fill="none">
    <rect x="1" y="1" width="38" height="28" rx="2" stroke="#F4F0E8" stroke-width="1.5"/>
    <path d="M1 4L20 17L39 4" stroke="#E8A838" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  <span style="font-family:'Lora',serif;font-size:18px;letter-spacing:-0.01em">
    <span style="color:#F4F0E8">lang</span><span style="color:#E8A838">mail</span>
  </span>
</div>
```

Scale icon proportionally: at 18px wordmark use 22×16px icon. At 32px wordmark
use 44×33px icon. Always maintain the 4:3 width-to-height ratio.

---

## 4. Components

### Buttons

```css
/* Primary */
.btn-primary {
  font-family: 'Geist', sans-serif;
  font-size: 13px; font-weight: 500;
  color: #0F0D0A; background: var(--amber);
  padding: 9px 20px; border-radius: 4px; border: none;
  transition: background 0.15s; cursor: pointer;
}
.btn-primary:hover { background: var(--amber-d); }

/* Secondary */
.btn-secondary {
  font-family: 'Geist', sans-serif;
  font-size: 13px; font-weight: 400;
  color: var(--text-1); background: transparent;
  padding: 9px 20px; border-radius: 4px;
  border: 1px solid var(--border);
  transition: border-color 0.15s; cursor: pointer;
}
.btn-secondary:hover { border-color: var(--text-2); }

/* Ghost */
.btn-ghost {
  font-family: 'Geist', sans-serif;
  font-size: 13px; font-weight: 300;
  color: var(--text-2); background: transparent;
  padding: 9px 20px; border: none; cursor: pointer;
  transition: color 0.15s;
}
.btn-ghost:hover { color: var(--text-1); }

/* Small modifier */
.btn-sm { font-size: 12px; padding: 6px 14px; }
```

### Code blocks

```html
<div style="background:var(--code-bg); border:1px solid var(--border); border-radius:6px; overflow:hidden">
  <div style="display:flex; justify-content:space-between; padding:10px 16px;
              border-bottom:1px solid var(--border); background:var(--surface)">
    <span style="font-family:'Geist Mono',monospace; font-size:10px;
                 color:var(--text-2); letter-spacing:0.08em; text-transform:uppercase">
      typescript
    </span>
    <span style="font-family:'Geist Mono',monospace; font-size:10px; color:var(--text-2)">
      copy
    </span>
  </div>
  <div style="padding:20px 22px; font-family:'Geist Mono',monospace;
              font-size:13px; line-height:1.8; color:var(--text-1)">
    <!-- code content here -->
  </div>
</div>
```

**Syntax token colors:**
- Keywords (`import`, `const`, `await`) → `--amber` (#E8A838)
- Strings → `--amber-sub` (#F0C878)
- Comments → `--text-2` (#8A7A5A), italic
- Default tokens → `--text-1`

**Inline code:**
```css
.inline-code {
  font-family: 'Geist Mono', monospace;
  font-size: 0.875em;
  color: var(--amber-sub);
  background: var(--code-bg);
  border: 1px solid var(--border);
  padding: 2px 6px; border-radius: 3px;
}
```

### Badges & pills

```css
/* Amber badge */
.badge-amber {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--amber); border: 1px solid var(--amber-d);
  background: color-mix(in srgb, var(--amber) 8%, transparent);
  padding: 3px 9px; border-radius: 100px; display: inline-flex;
  align-items: center; gap: 5px;
}

/* Neutral badge */
.badge-neutral {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--text-2); border: 1px solid var(--border);
  background: var(--surface);
  padding: 3px 9px; border-radius: 100px;
}

/* Feature pill — active */
.pill-active {
  font-family: 'Geist', sans-serif; font-size: 12px;
  color: var(--amber); border: 1px solid var(--amber-d);
  background: color-mix(in srgb, var(--amber) 8%, var(--surface));
  padding: 5px 13px; border-radius: 100px;
}

/* Feature pill — inactive */
.pill-inactive {
  font-family: 'Geist', sans-serif; font-size: 12px;
  color: var(--text-2); border: 1px solid var(--border);
  background: var(--surface);
  padding: 5px 13px; border-radius: 100px;
}
```

### Navigation

**Top nav structure:** logo left, links center, GitHub + CTA right.
Nav links use `--text-2` at rest, `--text-1` on hover/active. No underlines.

**Docs sidebar active state:**
```css
.sidebar-item.active {
  color: var(--amber);
  border-left: 2px solid var(--amber);
  background: color-mix(in srgb, var(--amber) 6%, transparent);
  padding-left: 10px;
}
```

Sidebar group labels: Geist Mono, 10px, uppercase, `--text-2`.
Sidebar items: Geist, 13px, weight 300, `--text-2` at rest.

### Cards

- Background: `--surface`
- Border: `--border` at rest → `--amber-d` on hover
- Border-radius: 0 (sharp corners throughout the system)
- Titles: Geist 500, 14px, `--text-1`
- Body: Geist 300, 13px, `--text-2`, line-height 1.6
- Arrow indicator: `--text-3` at rest → `--amber` on hover, translateX(3px)

### Callouts / admonitions

Three variants for docs use:

```css
.callout {
  border-left: 3px solid;
  padding: 14px 18px;
  border-radius: 0 4px 4px 0;
}

/* Note — amber */
.callout-note {
  border-color: var(--amber);
  background: color-mix(in srgb, var(--amber) 7%, var(--surface));
}

/* Warning — burnt orange */
.callout-warning {
  border-color: #C07830;
  background: color-mix(in srgb, #C07830 7%, var(--surface));
}

/* Tip — neutral */
.callout-tip {
  border-color: var(--text-2);
  background: var(--surface);
}
```

Callout label: Geist Mono, 10px, uppercase, matching border color.
Callout body: Geist 300, 13px, `--text-1`, line-height 1.6.

---

## 5. Spacing & Layout

- Base unit: **4px**. All spacing is multiples of 4.
- Preferred spacing values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80
- Border-radius: **4px** for interactive elements (buttons, badges, code blocks).
  **6px** for card icons and larger container elements. **100px** for pills.
  **0** for cards and panels — sharp corners everywhere else.
- Grid gaps between panels and cards: **2px** (the seam between surfaces)
- Maximum content width: **1120px** centered

---

## 6. Voice & Tone

**Core character:**
Precise but not cold. Assumes competence, never condescends. Dry wit is
allowed but never at the expense of clarity. Writes like a senior engineer
who respects your time.

**Principles:**

1. **Be direct.** Lead with what something does, not what it is.
2. **Assume competence.** Don't over-explain standard concepts.
3. **No hype.** Never use "powerful", "seamless", "robust", or "blazing-fast"
   without a number behind them.
4. **Short sentences.** Especially in docs. One idea per sentence.
5. **Contractions are fine.** "It doesn't" not "it does not."
6. **Wit is a seasoning, not the dish.** Dry observations in comments and
   error messages are welcome. Comedy in hero headlines is not.

**Word substitutions:**

| Avoid                                        | Use instead                                      |
|----------------------------------------------|--------------------------------------------------|
| "powerful preprocessing library"             | "converts raw emails into LLM-ready input"       |
| "easily extract CTAs"                        | "extract CTAs with a single function call"       |
| "robust HTML parsing"                        | "handles malformed HTML without crashing"        |
| "seamless integration"                       | *(just describe what it does)*                   |
| "we think you'll love it"                    | *(omit entirely)*                                |

**Voice in context:**
- **Hero copy:** Short, confident, factual. No adjectives that aren't earned.
- **Docs:** Imperative voice. "Call `preprocessEmail()` to parse the message."
- **Code comments:** Minimal. Only when the why isn't obvious from the code.
- **Error messages:** Specific. Say what failed and where, not just that it failed.

---

## 7. Usage Contexts

This skill applies to:
- **langmail.dev** — marketing/entry landing page
- **langmail.dev/docs** — full documentation site

It does not apply to:
- Email templates
- Social media graphics
- Print materials
- Light-mode variants

---

## 8. What Not To Do

- **No light mode.** Ever.
- **No secondary accent colors.** Amber is the only accent.
- **No Inter, Roboto, or system fonts** for headings or body. Lora and Geist only.
- **No rounded cards.** Border-radius 0 for all panels and cards.
- **No purple gradients.** No generic AI aesthetics.
- **No filled envelope variants.** Outline only.
- **No hype words** in copy without data to back them up.
- **No `#000000` black** anywhere. Always use `--bg` (#0F0D0A) as the darkest value.
