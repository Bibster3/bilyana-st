# Small, scoped prompts for incremental fixes

Use these one at a time to avoid oversized diffs.

## Prompt 1 — Fix asset path/case mismatch only
```
The build fails because of an asset case mismatch (`best-shop.png` vs `best-shop.PNG`).

Please do only this:
1. Find every import/reference to this asset.
2. Make the file name and all references consistent with exact case.
3. Run the build to confirm the fix.

Constraints:
- No refactors.
- No dependency changes.
- Do not touch unrelated files.
```

## Prompt 2 — Ignore generated artifacts in Git
```
This repo currently tracks generated output folders (`build/`, `dist/`, `static/`) but `.gitignore` does not exclude them.

Please do only this:
1. Update `.gitignore` to ignore generated artifacts (`build/`, `dist/`, `static/`).
2. Remove currently tracked files from Git index (keep local files) for those folders.
3. Show `git status` so I can review exactly what changed.

Constraints:
- No source-code edits.
- No formatting-only churn in other files.
```

## Prompt 3 — Remove CRA leftovers from Vite project
```
Tooling is mixed between Vite and CRA (e.g., `react-scripts`, CRA test scaffold, and duplicate entrypoints like `index.js` + `main.jsx`).

Please do only this cleanup:
1. Remove unused CRA-only dependencies/config that are no longer needed.
2. Keep the single Vite entrypoint and remove obsolete duplicate entrypoint files.
3. Remove obsolete CRA scaffold files if unused.
4. Ensure app still builds with Vite.

Constraints:
- Keep behavior unchanged.
- Avoid broad component refactors.
- Do not combine with lint/test script additions in this commit.
```

## Prompt 4 — Add enforceable quality gates
```
Add a minimal quality gate to `package.json` scripts.

Please do only this:
1. Add scripts for at least one enforceable check (`test`, `lint`, and/or `type-check`).
2. Prefer checks that work with the current stack and existing dependencies.
3. Run the new script(s) and report results.

Constraints:
- No UI changes.
- No unrelated dependency churn.
- Keep this commit focused on scripts/tooling commands.
```
