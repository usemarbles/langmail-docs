---
title: Changelog
description: All notable changes to langmail are documented here. Versioning follows Semantic Versioning.
---

## v0.1.0

**2025-01-01** — Initial release

### Added

- `preprocess()` — parses raw RFC 5322 email strings into structured `ParsedEmail` objects
- `toLLMContext()` — serializes `ParsedEmail` to clean Markdown for LLM consumption
- HTML to Markdown conversion via `htmd`
- Quoted reply detection for Gmail, Outlook, and Apple Mail
- Signature stripping via heuristic pattern matching
- CTA extraction with position analysis and multi-language keyword matching
- Zero-width character and HTML entity normalisation
- URL stripping with anchor text preservation
- Node.js bindings via napi-rs, published to npm as `langmail`
- Python bindings via PyO3, published to PyPI as `langmail`
- Rust core published to crates.io as `langmail-core`

:::tip[Stay updated]
Watch the [GitHub releases](https://github.com/usemarbles/langmail/releases) page to get notified of new versions.
:::
