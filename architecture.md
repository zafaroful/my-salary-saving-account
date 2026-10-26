# Architecture

## Build Shape

Browser-local tool. One page; the main action changes one run of data (the month) that stays after a refresh.

## Stack Decision

- Vite + React, plain CSS.
- `localStorage` for browser-local persistence (confirmed part of the shape).
- No backend, auth, database, payment, or live API.

## Structure Overview

One page, top to bottom:

1. Header: title and one-line description.
2. Four number inputs: salary (RM), rent per month, transport per month, food per month. Pre-filled with the example data on open.
3. Controls: **Next week** (up to 4) and **Start again**.
4. Money left panel: the money-left figure, the week reached out of 4, and the split bar.
5. Cost rows: rent, transport, food — each with amount taken so far and its share bar.
6. Week event rows: one row per week played, with the event name and amount.
7. Status message: "Ran out in week N" or "Made it with RM X left".

## Component Map

- `App` — holds the run state, locking rule, week stepping, random event, reset.
- `InputPanel` — the four number inputs; disabled once the run has started.
- `Controls` — **Next week** (with enable/disable rule) and **Start again**.
- `MoneyLeftPanel` — money-left figure, week reached out of 4, split bar.
- `CostRow` — one row for rent / transport / food: label, amount so far, share bar.
- `EventRow` — one row per week: event name and amount.
- `SplitBar` — reusable bar that draws segments as shares of the money spent so far, no gaps.

## Data / State Model

One data type: the run state.

Fields (4 input numbers + run progress):

- `salary` (number, gross monthly, must be > 0 to start)
- `rent` (number, average per month, 0 or more)
- `transport` (number, average per month, 0 or more)
- `food` (number, average per month, 0 or more)
- `week` (number, 0 to 4)
- `spent` (derived: amount taken so far per category — rent, transport, food, events)
- `events` (list: one entry per week, `{ week, name, amount }`)
- `moneyLeft` (derived: salary minus all amounts taken so far)
- `locked` (derived: true after the first **Next week** press)

Derived rules:

- Each week takes a quarter of rent, transport and food: `rent/4`, `transport/4`, `food/4`.
- One life event per week, chosen at random from: tyre RM180, kenduri RM100, phone screen RM250, Shopee 11.11 RM120, parking saman RM50, no surprise this week RM0.
- Amounts show two decimals.

## Storage Logic

- `localStorage` key: `kl-salary-month-run`.
- Stores the run state (the four numbers, week, and event list) as JSON.
- On load, read the key; if present, restore the run; if absent or unreadable, start fresh with the example inputs at week 0.
- **Start again** writes the example inputs back and resets week to 0 (and clears the stored run back to the fresh state).
- Refresh-persistence test: play a week, refresh the browser, confirm the same week and money left remain.

## User Flow

1. Page opens with example inputs (RM2,800 / RM800 / RM200 / RM600) and week 0; bar empty.
2. **Next week** is off until all four are filled with numbers of 0 or more and salary above 0.
3. First **Next week** press locks the four numbers.
4. Each press takes the week's quarter costs plus one random event; money left, week reached, rows, and bars update.
5. If money left goes below RM0: show "Ran out in week N" and stop **Next week**.
6. After week 4: show "Made it with RM X left".
7. **Start again** puts the example inputs back and starts at week 0. The page never tells the player to refresh.

## File Expectations

- `index.html`, `src/main.jsx`, `src/App.jsx`
- `src/components/` — the components above
- `src/styles.css` — plain CSS
- `package.json`, `vite.config.js`
- Created at Build time only, not during planning.

## Constraints

- No more than the four input numbers and the run progress: one data type only.
- No backend, auth, database, payments, live API, secrets, uploads, or multi-user sync.
- Sample data only; no real names, phone numbers, IC numbers, account numbers, real balances or company names.
- Figures only: sums and what is left; no advice, ratings, recommendations, or interest.

## Technical Non-Goals

- User accounts, payments, a database, live data.
- Tax or EPF sums.
- Multiple months, saved run history beyond the current run.
- Any server or online service.

## Verification Notes

- Open with example inputs; each week takes RM400.00 before the event; month ends with RM200.00 to RM1,200.00 left.
- **Next week** disabled until the four inputs are valid; locks after the first press.
- "Ran out in week N" below RM0; "Made it with RM X left" after week 4.
- Bar empty before week 1; segments are shares of money spent so far, no gaps.
- **Start again** resets inputs and week; never says refresh.
- Amounts show two decimals; money-left colour rule (accent at RM0+, red with minus below RM0).
- Refresh after a week keeps the run.