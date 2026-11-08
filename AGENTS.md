# GGST Combo Book

## Project scope

- Maintain a simple combo reference web app for multiple Guilty Gear -Strive- characters. Ramlethal remains the original character; add characters one at a time.
- Support desktop and iPhone Safari layouts. Combo learning progress tracking is out of scope.
- Cover game version 2.0 and later. Keep source/version metadata available in the details, but do not show practical-rating or training-verification labels in the browsing UI.

## Combo selection

- The combo database can grow beyond the initial set. Let the user mark routes as part of their personal list on the page and offer a view containing only those selected routes.
- Use the personal My Combos selection as the only user-managed route list, separate from curated main candidates. Persist the selection in the current browser's local storage and include it in backup exports.
- Keep existing researched route data when adding routes; distinguish overlapping options by their practical difference.
- Organize routes by real match situations, including punish after blocking an invincible reversal, poke hit, normal hit during offense, anti-air, and corner situations.
- Prioritize the main routes within each situation.
- Choose routes by balancing damage, execution difficulty, how often and reliably the opportunity can be recognized in a match, extra learning burden, shared route sections, and the post-combo oki situation.
- Do not create meterless and meter-using versions for every situation. Include meter routes only when the added reward is meaningful and the route is practical to land.
- Include useful post-combo oki notes when available. Omit empty or unverified placeholders from the browsing UI.

## Research and evidence

- Prefer character specialists' explanations and professional or high-level match footage for the character being documented. General character roundups are secondary references.
- Use specialist explanations to understand route intent and match footage to judge what is practical for each character.
- Check that a route applies to version 2.0 or later before marking it current. Keep older-version references clearly identified as historical context.
- Add source links for researched routes. Distinguish directly verified details from estimates or unresolved questions.

## Interface and delivery

- Keep the interface simple and responsive. Show character, situation, route, damage and meter where known, execution or setup conditions, post-combo oki, and supporting source/video links without requiring progress tracking.
- When modifying the app, run the relevant checks and tests, then commit the changes locally.
- Do not push to GitHub until the user explicitly approves the push.

## Handoff status

- The GitHub repository is `18takusun/ggst-combo-book`; its default branch is `main`.
- The Ramlethal collection retains its 28 current routes and existing route data. User selections remain in `ramComboBook`.
- The Sol collection starts with 19 routes based on a Sol player's Ver.2.0 combo and oki guide, Dustloop combo data, and the official Ver.2.03 Sidewinder Ignited adjustment. User selections and backups are isolated in `solComboBook`.
- A character selector switches between independent combo collections without adding a row of tabs as the roster grows. Starter groups are collapsible with route counts; groups containing main candidates open by default. Each collection keeps compact horizontal rows, hit/CH/anti-air/meter variants, expanded conditions/oki/sources, and its own personal My Combos view.
- Treat sourced routes as researched candidates rather than independent in-game tests. Keep route damage blank when the available source does not provide a directly usable value.
- The Ramlethal collection retains its links to RedDitto/SQ match footage and the specialist RAMLETHAL COMBOS Ver.2.01 guide. The Sol collection links to a current practical-combo video, Sol player Tatuma's videos, a 2.0 route guide, Dustloop, and the official 2.03 patch notes.
- Before app changes, compare the implementation with this plan and report the differences. This initial comparison has been reported; use it to guide the next work.
