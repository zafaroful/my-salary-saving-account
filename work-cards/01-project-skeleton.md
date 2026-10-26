# Work Card 01: Project Skeleton

## Goal

Create the Vite + React app in this project folder, with the app name as a header and one line under it, and `npm run dev` running. Nothing else on the page yet.

## Inputs

- `build-blueprint.md` (Project Identity, File and Folder Expectations)
- `project-brief.md` (name: KL Salary Month)
- `design.md` (header, page background tint, type)

## Files likely touched

- `index.html` (title)
- `package.json` (name)
- `src/main.jsx`, `src/App.jsx`, `src/styles.css`
- Created by the scaffolder: `vite.config.js`, `src/`, `public/`

## Instructions for the coding agent

1. Create the app in a temporary subfolder, then move it up, so nothing in this folder is deleted:

   ```bash
   npx -y create-vite@9.2.1 app-temp --template react --no-interactive
   ```

2. Ignore the scaffolder's "cd app-temp" hint. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`. Then delete the empty `app-temp` folder.
3. Set the `<title>` in `index.html` to `KL Salary Month`, and the `"name"` in `package.json` to `kl-salary-month`.
4. Run `npm install`, then `npm run dev`.
5. Replace the starter content in `src/App.jsx` with a header only:
   - the app name **KL Salary Month** as the page heading;
   - one line under it: "Can you survive a month in KL on your salary?";
   - a `Sample data` pill in the header.
6. In `src/styles.css`: set the page background to the light accent tint `#F2F7FF` (never plain white or grey) and the system sans stack from `design.md`. Leave room for the cards to come in Card 02.
7. Remove the default Vite demo content and logos from `App.jsx` and `index.html`.

## What not to do

- Do not delete or overwrite any existing file in this folder.
- Never run a scaffolder with `--overwrite`, and never choose "Remove existing files": that empties this folder and deletes the planning files, `prompts/`, `templates/` and `work-cards/`.
- Do not build inputs, the hero card, rows, or any behaviour yet.
- Do not install any library beyond what `create-vite` adds.
- Do not add backend, auth, database, or API.

## Done when

- The app runs with `npm run dev` and the page shows the **KL Salary Month** header, the one-line purpose, and the `Sample data` pill on the tinted background.
- `index.html` title is `KL Salary Month` and `package.json` name is `kl-salary-month`.
- No planning file is missing.

## Verification steps

- `npm run dev` starts without errors and serves a local URL.
- The page shows the header, one line, and the pill.
- The page background is the light blue tint.
- Confirm the planning files still exist: `START_HERE.md`, `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`, `prompts/`, `templates/`, `work-cards/`.

Design check: header, tinted background, and type follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- The dev server starts with `npm run dev` and the app shell loads in the browser.
- The header shows **KL Salary Month**, the one line under it, and the `Sample data` pill.
- The planning markdown files are still in the folder.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the scaffolder would overwrite or delete anything in this folder, stop and put a hand up for a trainer.

## Status

Done — Vite + React app in this folder, header + one line + `Sample data` pill on the tinted background; `npm run dev` runs at http://localhost:5173.