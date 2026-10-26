# Work Card 03: Core Behaviour

## Goal

Make the game work in memory: **Next week** (up to 4) takes a quarter of rent, transport and food plus one random life event, updates the money left, the week count, the cost rows, the event rows and the bars, shows the run-out / made-it messages, and **Start again** resets the run. A refresh may lose changes until Card 04, and that is expected here.

## Inputs

- `build-blueprint.md` (Data / State / Storage Rules, Implementation Rules)
- `architecture.md` (Data / State Model, User Flow)
- `design.md` (Colour, Component Style)

## Files likely touched

- `src/App.jsx`
- `src/components/InputPanel.jsx`
- `src/components/Controls.jsx`
- `src/components/MoneyLeftPanel.jsx`
- `src/components/CostRow.jsx`
- `src/components/EventRow.jsx`
- `src/components/SplitBar.jsx`
- `src/styles.css`

## Instructions for the coding agent

1. **Run state** in `App`: `salary`, `rent`, `transport`, `food`, `week` (0 to 4), and `events` (one `{ week, name, amount }` per week played). Derive `spent` per category, `moneyLeft`, and `locked`.
2. **Enable rule**: **Next week** stays disabled until all four inputs are numbers of 0 or more and salary is above 0.
3. **Lock rule**: the first **Next week** press locks the four inputs (disable them and show a muted/locked look).
4. **Each press**: take `rent/4`, `transport/4`, `food/4`, and pick one life event at random from: tyre RM180, kenduri RM100, phone screen RM250, Shopee 11.11 RM120, parking saman RM50, no surprise this week RM0. Add the event row `{ week, name, amount }` and increase `week` by 1.
5. **Money left** = salary minus everything taken so far (costs + events). Show two decimals. Accent blue `#1D6FF2` at RM0 or more; red `#D22B2B` with a minus sign below RM0.
6. **Bars**: the hero split bar has four segments (rent, transport, food, life events), each as wide as its share of the money spent so far, no gaps; empty before week 1. Each cost row's bar shows that row's share of the money spent so far (rows have no done or total).
7. **Messages**: if money left goes below RM0, show "Ran out in week N" and stop **Next week**. After week 4, show "Made it with RM X left".
8. **Start again**: put the example inputs back (RM2,800 / RM800 / RM200 / RM600), set week to 0, clear the events, and unlock the inputs. The page never tells the player to refresh.
9. Keep everything in memory for this card; do not add `localStorage` yet.

## What not to do

- No `localStorage` yet (Card 04).
- No backend, auth, database, or API.
- Do not hand-write a figure into the page; every amount is worked out from the inputs and the events.
- Never advise, rate, recommend, or work out interest; show figures only.
- Do not add any action the brief does not have.

## Done when

- **Next week** works up to 4 times, with the enable/lock rules.
- Each week takes a quarter of each cost plus one random event.
- Money left, week count, cost rows, event rows, split bar and row bars all update.
- "Ran out in week N" and "Made it with RM X left" show correctly.
- **Start again** resets the run and never says refresh.

## Verification steps

- With the example inputs, each week takes **RM400.00** before the event (RM800/4 + RM200/4 + RM600/4 = RM200 + RM50 + RM150).
- After 4 weeks the month ends with **RM200.00 to RM1,200.00** left, depending on which random events were drawn (RM2,800 − RM1,600 costs − events between RM0 and RM1,000).
- Before week 1 the split bar is empty; after weeks, the four segments are shares of the money spent so far with no gaps.
- **Next week** is disabled with an empty or zero-salary input and locks the four numbers after the first press.
- Below RM0 the money left is red with a minus sign and shows "Ran out in week N", and **Next week** stops.
- After week 4 the message reads "Made it with RM X left".
- **Start again** restores the example inputs and week 0, and the page never mentions refreshing.

Design check: input, rows, update controls, empty state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Press **Next week** once: the week line shows `Week 1 of 4` and the cost rows each moved by a quarter (rent RM200.00, transport RM50.00, food RM150.00).
- Press **Next week** up to 4 times and confirm the money left, the split bar and the event rows change each week, and each event row shows a name and an amount.
- Try **Next week** before all four numbers are filled, and confirm it is off; after the first press, confirm all four inputs are locked.
- Force a run-out (for example set rent high and salary low) and confirm "Ran out in week N" shows, money left is red with a minus sign, and **Next week** stops.
- Press **Start again** and confirm the example inputs are back and the week is 0.
- Refresh the browser: it is fine if the run resets here (saving comes in Card 04).

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the week maths, the enable/lock rules, or the run-out / made-it messages do not match the rules, stop and fix before Card 04.

## Status

Done — interactive game: editable inputs, enable/lock rules, Next week (quarter costs + random event), money-left colour, split bar and row bars, run-out / made-it messages, Start again. In memory only (no localStorage yet).