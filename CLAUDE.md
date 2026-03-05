# CLAUDE.md

## Project Overview

This is the documentation site for [langmail](https://github.com/usemarbles/langmail), an open-source email preprocessing library for LLM consumption.

The site is separate from the library repo and will be deployed at `langmail.dev`.

## Stack

- **Astro** + **Starlight** for docs pages
- Custom landing page at `/` (`src/pages/index.astro`)
- Dark-only theme — no light mode

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Structure

- `src/pages/index.astro` — Custom landing page (not a Starlight page)
- `src/content/docs/` — Starlight documentation pages (Markdown)
- `src/styles/theme.css` — Starlight CSS variable overrides for brand colors
- `src/components/EmptyThemeSelect.astro` — Disables light/dark toggle

## Brand System

Colors, typography, and component patterns are defined in the langmail repo at `.claude/skills/langmail-brand.md`. Key points:

- **Colors**: Warm near-black (`#0F0D0A`) with amber (`#E8A838`) accent
- **Fonts**: Lora (headings), Geist (body/UI), Geist Mono (code)
- **No light mode**. Ever.
- **No secondary accent colors**. Amber only.
