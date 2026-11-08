# GGST Ramlethal Combo Book

## Project scope

- Maintain a simple combo reference web app for Ramlethal Valentine in Guilty Gear -Strive-.
- Optimize the page for iPhone Safari. Combo learning progress tracking is out of scope.
- Cover game version 2.0 and later. Keep source/version metadata available in the details, but do not show practical-rating or training-verification labels in the browsing UI.

## Combo selection

- Begin with a small set of reliable routes and add routes gradually.
- Keep the existing 14 entries and six main candidates when resuming work; verify them before changing their status or details.
- Organize routes by real match situations, including punish after blocking an invincible reversal, poke hit, normal hit during offense, anti-air, and corner situations.
- Prioritize the main routes within each situation.
- Choose routes by balancing damage, execution difficulty, how often and reliably the opportunity can be recognized in a match, extra learning burden, shared route sections, and the post-combo oki situation.
- Do not create meterless and meter-using versions for every situation. Include meter routes only when the added reward is meaningful and the route is practical to land.
- Include useful post-combo oki notes when available. Omit empty or unverified placeholders from the browsing UI.

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
- All 14 routes remain unverified in the current training environment. Eight entries are now cross-referenced against the Ver.2.03 combo list; several Ver.2.00 entries are still historical references.
- The page groups candidates by match situation and starter, shows damage and meter, and keeps route conditions, oki notes, and source links in the expanded details. It links specialist/high-level match footage as context, not as proof of individual routes.
- The default list shows the six main candidates grouped by starter. The all-routes view preserves the 14 seeded entries; label overlapping routes with their practical difference (for example, easy/short or damage/corner carry), and keep normal hit, counter hit, anti-air, and meter-use variants separate.
- A current Dustloop guide identifies the c.S route as a basic punish after blocking unsafe moves such as supers or reversals. This is a sourced candidate, not an independent in-game test. Normal-hit conversions during offense and corner-specific routes still need review.
- Combo clips are linked on the cards where a route-specific Dustloop clip was available. The general RedDitto/SQ YouTube references remain match context rather than route validation.
- The situation selector already includes those categories so verified entries can be added without changing the interface.
- Before app changes, compare the implementation with this plan and report the differences. This initial comparison has been reported; use it to guide the next work.
