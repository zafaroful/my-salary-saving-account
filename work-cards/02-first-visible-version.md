# Work Card 02: First Visible Version

## Goal

Put the layout and the `## Visual recipe` from `design.md` on screen with the sample data filled in, so the page looks finished. Nothing interactive yet.

## Inputs

- `design.md` (Visual recipe, Layout Rules, Colour, Component Style)
- `architecture.md` (Data / State Model, Component Map)
- `build-blueprint.md` (Implementation Rules)

## Files likely touched

- `src/App.jsx`
- `src/components/InputPanel.jsx`
- `src/components/MoneyLeftPanel.jsx`
- `src/components/CostRow.jsx`
- `src/components/SplitBar.jsx`
- `src/styles.css`

## Instructions for the coding agent

Build the static layout, top to bottom, with the sample data shown but not typed by the user yet:

1. **Input card**: the four number inputs, visible labels (Gross monthly salary, Rent per month, Transport per month, Food per month), pre-filled with RM2,800 / RM800 / RM200 / RM600. Show them as plain fields; disabled/locked styling comes in Card 03.
2. **Hero card** (`MoneyLeftPanel`): label `Money left`; the figure **RM2,800.00** at 48px or larger in accent blue `#1D6FF2`; one line under it `Week 0 of 4`; and the split bar across the card with a four-item legend (rent, transport, food, life events). At week 0 the bar is **empty**.
3. **Cost rows** (`CostRow`): rent, transport, food — a row-colour dot, bold name, amount so far on the right as **RM0.00**, and an empty share bar for each.
4. **Event rows**: none yet at week 0 (show nothing, or a quiet "No weeks played yet" line).
5. **Controls**: **Next week** (solid accent primary, disabled) and **Start again** (secondary). They are visible; behaviour comes in Card 03.
6. Styling per the recipe: cards with 16px radius, soft shadow, 24px padding, 12px between rows; white cards with `#DCE7F5` border; type from `design.md`; money-left figure largest thing on screen.
7. Use plain CSS and inline SVG only; no new library.

## What not to do

- No interactivity yet: no week stepping, no locking, no random events, no `localStorage`.
- Do not type a money-left value in by hand as if it were worked out; at this card the figure is the sample salary shown as a placeholder state (week 0), and Card 03 works out the real figure from the inputs.
- Do not add backend, auth, database, or API.
- Do not invent claims, testimonials, logos, or real numbers.

## Done when

- The page shows the input card, the money-left hero card with an empty split bar and legend, the three cost rows at RM0.00, and the two controls.
- It matches the Visual recipe: header, hero card, coloured rows, pills, depth, tinted background, money-left figure 48px+.
- No behaviour works yet.

## Verification steps

- The page renders all sections in order: header, inputs, hero card, cost rows, controls.
- The four inputs show the example values.
- Money left shows RM2,800.00 in accent blue; week line reads `Week 0 of 4`.
- The split bar is empty and the legend lists rent, transport, food, life events.
- Cost rows show RM0.00 with empty share bars.

Design check: header, hero card, coloured rows, pills, depth, background, and money-left prominence follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- The page shows the four inputs with RM2,800 / RM800 / RM200 / RM600 already filled in.
- Money left shows RM2,800.00 in blue and `Week 0 of 4` under it.
- The split bar is empty and the cost rows show RM0.00.
- The page still looks right when the browser is narrowed to phone width (no cut-off text or cards).

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the layout does not match the Visual recipe or the money-left figure is not the most prominent element, stop and fix it before Card 03.

## Status

Done — static layout (inputs, money-left hero card, split bar + legend, cost rows, empty events, controls) on the tinted background; no behaviour yet.