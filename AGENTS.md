# GGST Ramlethal Combo Book

## Project scope

- Maintain a simple combo reference web app for Ramlethal Valentine in Guilty Gear -Strive-.
- Optimize the page for iPhone Safari. Combo learning progress tracking is out of scope.
- Cover game version 2.0 and later. Mark older-version material and unverified routes clearly; never present them as confirmed current routes.

## Combo selection

- Begin with a small set of reliable routes and add routes gradually.
- Keep the existing 14 entries and six main candidates when resuming work; verify them before changing their status or details.
- Organize routes by real match situations, including punish after blocking an invincible reversal, poke hit, normal hit during offense, anti-air, and corner situations.
- Prioritize the main routes within each situation.
- Choose routes by balancing damage, execution difficulty, how often and reliably the opportunity can be recognized in a match, extra learning burden, shared route sections, and the post-combo oki situation.
- Do not create meterless and meter-using versions for every situation. Include meter routes only when the added reward is meaningful and the route is practical to land.
- Record post-combo oki when it has been verified. Label unknown or unverified outcomes explicitly.

## Research and evidence

- Prefer YouTube material from Ramlethal specialists and professional or high-level players who use Ramlethal in matches. General character roundups are secondary references.
- Use specialist explanations to understand route intent and match footage to judge what is practical.
- Check that a route applies to version 2.0 or later before marking it current. Keep older-version references clearly identified as historical context.
- Add source links for researched routes. Distinguish directly verified details from estimates or unresolved questions.

## Interface and delivery

- Keep the interface simple and usable in iPhone Safari. Show situation, route, damage and meter where known, execution or setup conditions, post-combo oki, and supporting video links without requiring progress tracking.
- When modifying the app, run the relevant checks and tests, then commit the changes locally.
- Do not push to GitHub until the user explicitly approves the push.

## Handoff status

- The GitHub repository is `18takusun/ggst-combo-book`; its default branch is `main`.
- The page retains all 14 seed entries and their existing route data. Six entries are marked as provisional main candidates and are shown first; the main set is not gameplay-verified.
- All 14 routes remain marked unverified in the current training environment. Damage and route notes are inherited from Dustloop version 2.00 or 2.03 references.
- The page groups candidates by match situation, shows provisional difficulty, meter use, shared route notes, and explicitly unverified post-combo oki. It links specialist/high-level match footage as context, not as proof of individual routes.
- The current 14 entries do not yet provide verified routes for punish after blocking an invincible reversal, a normal hit during offense, or corner-specific situations. Add these only after checking a current-version source or in-game testing.
- The situation selector already includes those categories so verified entries can be added without changing the interface.
- Before app changes, compare the implementation with this plan and report the differences. This initial comparison has been reported; use it to guide the next work.
