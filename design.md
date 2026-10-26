# Design Direction

## Design Inspiration URL

Fallback 3: Playful student dashboard (learner picked all six; I chose 3 because this page is a tool built from cost rows, a main figure and step controls).

## What We Borrow

- Layout: hero card holding the main figure, then a stack of rows, then controls.
- Spacing: 12px between rows, 24px card padding, one clear gap between the input card and the results.
- Color mood: blue accent on a lightly blue-tinted page; a five-colour row palette.
- Typography feel: friendly, rounded, student-friendly; bold numbers.
- Card/button style: soft cards with a 16px radius and a soft shadow; one solid blue primary button.
- Mobile feel: single column, big number first, controls reachable with a thumb.

## What We Do Not Copy

- Brand/logo: no borrowed logo or brand name.
- Content/copy: no copied text, no brand voice.
- Testimonials/stats: no testimonials; any figure is the learner's own sample data or a figure worked out from it.
- Photos/private identity: no photos of real people; no real names, account numbers or balances.
- Exact layout if it would look like a clone: keep the shape generic; do not imitate any one site pixel for pixel.

## Visual Mood

Playful, encouraging, clear, student-friendly, blue.

## Layout Rules

Browser-local tool layout:

- Header: app name **KL Salary Month** with a small inline SVG coin/ring icon, one-line purpose under it ("Can you survive a month in KL on your salary?"), and a `Sample data` pill.
- Input card first: the four number inputs (salary, rent, transport, food) with clear labels, pre-filled with the example data.
- Hero card: the money-left figure at 48px or larger in the blue accent (red with a minus sign below RM0), the week line (`Week N of 4`) under it, and the split bar across the card with a legend.
- Cost rows: rent, transport, food — dot in the row colour, bold name, amount so far on the right, and a progress bar for that row's share of the money spent so far.
- Week event rows: one row per week played, event name and amount.
- Controls: **Next week** (solid blue, the primary action) and **Start again** (quiet secondary), grouped together.
- Empty state: before week 1 the bar is empty and the cost rows show RM0.00; the page still explains what to do.

## Color / Contrast Rules

- Accent: blue `#1D6FF2` (primary button, money-left figure, focus ring).
- Page background: light blue tint `#F2F7FF` (never plain white or plain grey).
- Surface: white cards `#FFFFFF`, border `#DCE7F5`.
- Money left: accent blue `#1D6FF2` at RM0 or more; red `#D22B2B` with a minus sign below RM0.
- Five-colour row palette: rent `#1D6FF2`, transport `#12B886`, food `#F59F00`, life events `#E8590C`, muted/finished grey `#94A3B8`.
- Text: `#0F1B2D` on white (AA or better); every row colour carries a text label, so colour is never the only signal.
- AA contrast on every text/background and every bar segment label.

## Typography Feel

Friendly and rounded, student-friendly, with bold, large numbers. One system sans stack (for example `system-ui, "Segoe UI", Roboto, sans-serif`). Numbers tabular so amounts line up. No decorative or novelty fonts.

## Component Style

- Buttons: **Next week** solid blue, 12px radius, bold label; disabled state is muted grey and clearly not clickable. **Start again** is a quiet outline/secondary button. Both are real buttons with visible focus rings.
- Cards: white, 16px radius, soft shadow, 24px padding; 12px between rows.
- Inputs: labelled number fields with a visible focus ring; disabled (locked) inputs are visually muted after the first press.
- Status chips / labels: `Sample data` pill in the header; `Week N of 4` line; a `Ran out` red pill or `Made it` blue pill for the outcome message; `Locked` hint on the inputs after the first press.

## Mobile Rules

- Single column at phone width; stack the input card, hero card, cost rows, event rows, then controls.
- Money-left figure stays the largest thing on the first screen; it never shrinks below 48px.
- Controls sit full width and stay thumb-reachable; no horizontal scrolling.
- Row text wraps rather than clipping; the split bar keeps its four segments readable.

## Accessibility Basics

- Readable contrast on all text and bars (AA or better).
- Visible focus states on every button and input.
- Buttons and inputs have clear text labels; the four inputs have visible labels, not placeholder-only.
- No tiny tap targets: buttons and inputs at least 44px tall.
- The `Ran out` / `Made it` message is real text, not colour alone; money-left direction is text plus colour.
- Bars carry a text amount beside them, so colour is never the only signal.
- Respect reduced motion: bars skip the grow animation when the user prefers reduced motion.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked sample (here every figure comes from the learner's own sample data; the page carries a `Sample data` pill).
- No "lorem ipsum" in final proof.
- No random gradient blobs or generic AI decoration.
- One clear primary action: **Next week**; the money-left figure is the most prominent element.
- Readable on phone width.
- Figures only: show sums, counts and what is left; no advice, ratings, recommendations, or interest.

## Visual recipe

The build follows this section card by card. For a page that shows rows and a main figure:

- Header: the app name with one emoji or a small inline SVG icon, the one-line purpose under it, and a `Sample data` pill.
- Hero card: a short label, the main figure at 48px or larger in the accent colour, one line under it with the count behind it (for example `4 plans in progress`), and a stacked bar across the card showing each counted row's share of the main figure, one colour per row, with a small legend under it.
- Each row: a coloured dot or an emoji on the left in that row's colour, the name in bold, the main amount on the right, and under them a progress bar for done of total with the text `6 of 12` beside it and a pill for what is left (`6 left`). A finished row is muted, with a `Finished` pill and a full grey bar.
- Colour: one accent colour from the style, plus a five-colour row palette, every colour with AA contrast on its background.
- Depth: cards with a 16px radius, a soft shadow and 24px padding, 12px between rows, and a page background tinted lightly with the accent, never plain white or plain grey.
- Motion: bars grow from 0 when the page loads (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. Emoji are fine as icons.

For an app where the learner adds or changes items, use the same row recipe for the items and the hero card for the count that matters most.

Mapping this recipe to KL Salary Month:

- Header: **KL Salary Month**, the one-line purpose, and the `Sample data` pill.
- Hero card: label `Money left`; the money-left figure (48px+) in accent blue (red with minus below RM0); one line under it reading `Week N of 4`; the split bar across the card with four segments (rent, transport, food, life events) sized to each share of the money spent so far, and a legend under it. Before week 1 the bar is empty.
- Cost rows: rent, transport, food — row-colour dot, bold name, amount so far on the right, and a bar for that row's share of the money spent so far (rows have no done or total, so no `6 of 12` and no left pill).
- Event rows: one row per week already played — event name (bold) and amount on the right.
- Controls: **Next week** (accent primary) and **Start again** (secondary).

## Design Verification Checklist

- [ ] The first screen matches the intended mood (playful, blue, student-friendly).
- [ ] The layout supports the user goal (four numbers, Next week, see money left and rows).
- [ ] Mobile width is readable.
- [ ] Nothing clones another brand.
- [ ] The build avoids fake claims and generic AI decoration.
- [ ] The money-left figure is the most prominent element.
- [ ] Colour is never the only signal; every segment and row carries a label or amount.