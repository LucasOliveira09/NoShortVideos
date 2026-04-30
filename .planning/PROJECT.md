# NoShortVideos

## Background
In the age of algorithmic content, it's increasingly difficult to maintain focus during work. Short-form videos like YouTube Shorts, TikToks, and Instagram Reels are designed to be addictive and easily pull users into endless scrolling sessions.

## Core Value
Regain focus and productivity by seamlessly hiding distracting short-form video content from the browser, starting with Google Chrome. The extension removes the temptation of clicking on algorithmic feeds without entirely blocking the useful parts of these platforms.

## What This Is
"NoShortVideos" is a Chrome extension that actively manipulates the DOM on specific websites to hide short-form video components (e.g., YouTube Shorts shelf, TikTok feeds) while maintaining the core functionality of the sites. It includes a popup interface to toggle features on and off and configure settings.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Chrome First | Chrome has the largest market share and Manifest V3 is standardized there. | — Pending |
| Hide, Don't Block | Users might still need to visit youtube.com for a tutorial; blocking the entire domain is too aggressive. Hiding just the Shorts is more effective for productivity. | — Pending |
| Popup UI | Users need control over the extension's behavior and the ability to add specific settings. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-30 after initialization*
