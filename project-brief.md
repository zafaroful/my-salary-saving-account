# Project Brief

## Project Identity

- Name: KL Salary Month
- One line: A one-page browser budget game that runs a four-week KL month on your own numbers and shows what is left.

## One-Sentence Concept

Type your gross monthly salary, average rent, transport and food, then press Next week up to four times to see the money left after each week's costs and one random life event.

## Target User

The learner (yourself): a young adult in a first job in Kuala Lumpur, budgeting a full month with your own numbers instead of finding out the cost of living after the money runs out.

## User Goal

Understand and do, on one screen:

- Type four numbers: gross monthly salary, average rent per month, average transport per month, average food per month.
- Press **Next week** up to four times; each week takes a quarter of rent, transport and food, plus one random life event from the sample list.
- See the money left, the week reached out of 4, one row each for rent, transport and food with the amount taken so far, and one row for each week's event with its amount.
- See one bar under the money left, split into four parts (rent, transport, food, life events), each part as wide as its share of the money spent so far, no gaps; empty before week 1. Each row's bar shows that row's share of the money spent so far.
- The four numbers lock after the first press.
- **Next week** stays off until all four are filled in with numbers of 0 or more (salary above 0).
- Below RM0 the page shows "Ran out in week N" and **Next week** stops.
- After week 4 it shows "Made it with RM X left".
- **Start again** puts the example inputs back and starts at week 0; the page never tells the player to refresh.
- Amounts show two decimals. Money left is in the accent colour at RM0 or more, and red with a minus sign below RM0.

## Build Shape

Browser-local tool.

## Shape Confirmation

Confirmed by the learner. I read this as a browser-local tool because the one page creates and changes one kind of data (the four numbers, money left, weeks reached, and each week's event) that you press **Next week** to advance.

## Version-One Success

Done enough today when:

- The example inputs show on the screen when the page opens: salary RM2,800, rent RM800, transport RM200, food RM600.
- Each week takes RM400.00 before the event; the month ends with RM200.00 to RM1,200.00 left (the event is random, so check the rule, not one end figure).
- "Ran out in week N" shows below RM0; "Made it with RM X left" shows after week 4.
- **Start again** puts the example inputs back and starts at week 0.

## Now / Later / Never

### Now

- One browser page: four input numbers, **Next week** (up to 4), **Start again**.
- Money left, week reached out of 4, cost rows (rent, transport, food) with amounts taken so far, one row per week's event with its amount.
- Shared bar split into rent, transport, food, life events; per-row bars.
- Random life event each week from the sample list.
- Two-decimal amounts, accent/red money-left colour rule.
- Works in the browser in this workspace.

### Later

- More sample life events.
- Extra months or a repeat month.
- Saved history of past runs (only within the confirmed browser-local shape).

### Never

- User accounts, login, payments, a database, a backend, live data, or tax/EPF sums.
- Real people's names, phone numbers, IC numbers, account numbers, real balances or company names.

## Assumptions

- Sample data stays sample data: illustrative examples, never real records.
- Sample life events: tyre RM180, kenduri RM100, phone screen RM250, Shopee 11.11 RM120, parking saman RM50, no surprise this week RM0.
- One life event is chosen at random each week.
- Money is shown as figures only (sums and what is left); no advice, ratings, recommendations or interest.

## Proof Target

The page opens with the example inputs, each week takes RM400.00 before the event, the month ends with RM200.00 to RM1,200.00 left, and the run-out / made-it messages, the bars and **Start again** all match the rules above — checked in the browser from the sample data.

## Trainer / Learner Notes

- The learner chose themselves as the target user (answer 2 made their own).
- Tonight is Spec, Build and Check only; Ship is taught in Build & Ship.