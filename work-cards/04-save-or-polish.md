# Work Card 04: Save or Polish

## Goal

Save the run with `localStorage`, prove it survives a refresh, check the empty state and phone width, and polish the details so every line of the Visual recipe matches `design.md`.

## Inputs

- `build-blueprint.md` (Data / State / Storage Rules, Verification)
- `design.md` (Visual recipe, Accessibility Basics, Design Verification Checklist)
- `architecture.md` (Storage Logic)

## Files likely touched

- `src/App.jsx`
- `src/styles.css`
- any component needing a polish pass

## Instructions for the coding agent

1. **Save**: write the run state to `localStorage` under the key `kl-salary-month-run` as JSON whenever it changes. On load, read the key; if present and readable, restore the run (inputs locked if the run has started, week, money left, events, bars); if absent or unreadable, start fresh with the example inputs at week 0.
2. **Start again**: write the example inputs back and reset the stored run to the fresh state.
3. **Refresh proof**: make it easy to see that a played week remains after a refresh.
4. **Empty state**: before week 1, the split bar is empty, cost rows read RM0.00, and no event rows (or a quiet "No weeks played yet" line); the page still explains what to do.
5. **Two decimals** everywhere amounts show.
6. **Motion**: bars grow from 0 on load with a CSS transition; respect `prefers-reduced-motion` and skip the animation when the user prefers reduced motion. Nothing else moves.
7. **Accessibility pass**: visible focus states, labels on inputs and buttons, no tiny tap targets (44px+), colour never the only signal (amounts beside bars), the outcome message as real text.
8. **Final Visual recipe check**: header, hero card, coloured rows, pills, depth, tinted background, money-left prominence, legend.

## What not to do

- No backend, auth, database, payments, or API.
- No secrets or keys in code.
- Do not add any action the brief does not have.
- Never advise, rate, recommend, or work out interest; show figures only.
- Do not add a new library.

## Done when

- The run is saved under `kl-salary-month-run`, and a played week survives a browser refresh in the same browser.
- **Start again** resets both the screen and the stored run.
- The empty state, two-decimal amounts, reduced-motion, and accessibility basics are in place.
- Every line of the Visual recipe in `design.md` is checked.

## Verification steps

- Play at least one week, refresh the browser, and confirm the same week, money left and event rows remain.
- Press **Start again**, refresh, and confirm the example inputs are back at week 0 (the reset is saved too).
- At phone width, no text, button or card is cut off, and the money-left figure is still the largest thing on the first screen.
- Amounts show two decimals; money left is accent blue at RM0+ and red with a minus sign below RM0.
- With reduced motion set, the bars do not animate.

Design check: item card/list, input, update/delete controls (here **Start again** is the reset), empty state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Play 2 weeks, then refresh the browser: the same week, money left and event rows are still there.
- Press **Start again**, then refresh: the example inputs are back and the week is 0.
- Narrow the browser to phone width: nothing is cut off and the money-left figure is still the biggest thing.
- Confirm every amount shows two decimals, and money left is blue above RM0 and red with a minus sign below RM0.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Stop condition

If persistence does not survive a refresh in the same browser, stop and fix before polishing further.

## Status

Done — run saved under `kl-salary-month-run`, restores after refresh; Start again resets the stored run; empty state, two-decimal amounts, reduced-motion and accessibility basics in place.