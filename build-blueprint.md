# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- This blueprint is the builder-ready specification; the work cards follow it.

## Project Identity

- Name: **KL Salary Month**
- One line: A one-page browser budget game that runs a four-week KL month on your own numbers and shows what is left.
- Target user: yourself — a young adult in a first job in Kuala Lumpur, budgeting a full month with your own numbers.

## Build Shape

Browser-local tool. One page; the main action changes one run of data (the month) that stays after a refresh.

## Version-One Promise

The page opens with the example inputs (salary RM2,800, rent RM800, transport RM200, food RM600). Each week takes RM400.00 before the event; the month ends with RM200.00 to RM1,200.00 left. Reasons to trust it: the run-out and made-it messages, the split bar, the cost rows and **Start again** all follow the rules below, checked in the browser from the sample data.

## Scope Lock

### Now

- One browser page: four number inputs, **Next week** (up to 4), **Start again**.
- Money left, week reached out of 4, cost rows (rent, transport, food) with amount taken so far, one row per week's event with its amount.
- Shared split bar (rent, transport, food, life events) plus a per-row share bar.
- Random life event each week from the sample list.
- Two-decimal amounts; money-left colour rule (accent at RM0+, red with minus below RM0).
- Runs in the browser in this workspace.

### Later

- More sample life events.
- Extra months or a repeat month.
- Saved history of past runs (only within the confirmed browser-local shape).

### Never

- User accounts, login, payments, a database, a backend, live data, or tax/EPF sums.
- Real people's names, phone numbers, IC numbers, account numbers, real balances or company names.
- Advice, ratings, recommendations, or interest calculations.

## Architecture Summary

- Stack: Vite + React, plain CSS. No new libraries.
- One page, one data type (the run state).
- Components: `App`, `InputPanel`, `Controls`, `MoneyLeftPanel`, `CostRow`, `EventRow`, `SplitBar`.
- Reusable `SplitBar` draws segments as shares of the money spent so far, no gaps.
- `localStorage` for persistence; no backend.

## Data / State / Storage Rules

- Run state fields: `salary`, `rent`, `transport`, `food` (numbers), `week` (0 to 4), `events` (one `{ week, name, amount }` per week played).
- Derived: `spent` per category, `moneyLeft` (salary minus everything taken so far), `locked` (true after the first **Next week** press).
- Each week takes a quarter of rent, transport and food (`rent/4`, `transport/4`, `food/4`).
- Sample life events (one random per week): tyre RM180, kenduri RM100, phone screen RM250, Shopee 11.11 RM120, parking saman RM50, no surprise this week RM0.
- Amounts show two decimals.
- `localStorage` key: `kl-salary-month-run`, storing the run state as JSON. On load: restore if present and readable, else start fresh with the example inputs at week 0.
- **Start again** writes the example inputs back, sets week to 0, and clears the stored run back to the fresh state.
- Refresh-persistence test: play a week, refresh, confirm the same week and money left remain.

## Design Direction Summary

- Inspiration: Fallback 3, Playful student dashboard, with a blue accent and a page built from cost rows and a main figure.
- Borrow: card + row layout, soft cards, the hero card holding the main figure, a stacked split bar, the five-colour row palette, friendly type with big numbers, mobile single-column stacking.
- Do not copy: any brand, logo, content, copy, testimonials, photos, private identity, or an exact pixel-for-pixel clone of any site.
- Mood: playful, encouraging, clear, student-friendly, blue.
- Colour: accent blue `#1D6FF2`; page tint `#F2F7FF`; white cards with `#DCE7F5` border; red `#D22B2B` with minus below RM0; row palette rent `#1D6FF2`, transport `#12B886`, food `#F59F00`, life events `#E8590C`, muted `#94A3B8`.
- Type: one system sans stack; tabular numbers; money-left figure 48px+.
- Follow the `## Visual recipe` in `design.md` card by card.

## Implementation Rules

- Build card by card; implement only the current work card.
- Plain CSS and inline SVG only; no new library. Emoji are fine as icons.
- Cards: 16px radius, soft shadow, 24px padding, 12px between rows; page background tinted with the accent.
- Buttons and inputs at least 44px tall with visible focus states; inputs have visible labels.
- Bars grow from 0 on load (CSS transition); respect `prefers-reduced-motion`.
- Colour is never the only signal: every segment and row carries a label or amount.
- Money-left colour: accent blue at RM0 or more, red with a minus sign below RM0.
- Before week 1 the split bar is empty and cost rows read RM0.00.
- **Next week** disabled until all four inputs are numbers of 0 or more and salary is above 0; inputs lock after the first press.
- Below RM0: show "Ran out in week N" and stop **Next week**. After week 4: show "Made it with RM X left".
- The page never tells the player to refresh.

## File and Folder Expectations

- `index.html`, `src/main.jsx`, `src/App.jsx`
- `src/components/` — `InputPanel`, `Controls`, `MoneyLeftPanel`, `CostRow`, `EventRow`, `SplitBar`
- `src/styles.css`
- `package.json`, `vite.config.js`
- Created at Build time only, not during planning.

## Work Card Plan

1. **01 Project skeleton** — Vite + React app in this folder, header and layout shell, `design.md` tokens in `styles.css`, `npm run dev` runs.
2. **02 First visible version** — the four inputs pre-filled with the example data, the money-left hero card, week line, and cost rows at week 0 (empty bar), styled per the recipe.
3. **03 Core behaviour** — **Next week** (enable/lock rules, quarter costs, random event, week count, money-left colour), the split bar and row bars, run-out / made-it messages, **Start again**, `localStorage` persistence.
4. **04 Save or polish** — empty-state and mobile checks, two-decimal formatting everywhere, reduced-motion, accessibility pass, refresh-persistence proof, small polish.

## Review Mirror

Optional tonight: `prompts/07-review-mirror.md`, not a work card.

## Proof Ladder

The app running on localhost, improved your way. No GitHub or Vercel.

## 60-Second Explanation Template

"KL Salary Month is a one-page budget game. You type your salary, rent, transport and food, then press Next week up to four times. Each week takes a quarter of the costs plus one random life event, and the page shows what is left, the week you reached, a bar split by what was spent, and a row for each event. If the money runs out it says Ran out in week N; if you reach week 4 it says Made it with RM X left. It runs in the browser and remembers your run after a refresh."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card; do not jump ahead.
- Stop after verification.
- Update `build-status.md` after each work card.
- Do not add backend, auth, database, or API unless this blueprint explicitly allows it (it does not).
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers.
- Apply the browser-local tool guardrails: one data type, real sample item, update/mark behaviour, delete (here: **Start again** resets the run), `localStorage` save, refresh proof, empty-state and mobile checks.
- Add no action the brief does not have; the money-left figure is the most prominent thing.
- For this money brief: work out and show figures only (sums, counts, what is left); never advise, rate or recommend, and never work out interest.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.