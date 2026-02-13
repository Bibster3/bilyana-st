# Hiring Review (Junior Frontend Candidate)

## Major red flags

1. **Build is currently broken** due to an asset path/case mismatch (`best-shop.png` vs `best-shop.PNG`).
2. **Repository includes generated artifacts** (`build/`, `dist/`, `static/`) in source control while `.gitignore` does not exclude them.
3. **Tooling configuration is inconsistent** (Vite project with CRA leftovers like `react-scripts`, CRA test scaffold, and `index.js` + `main.jsx` entrypoints).
4. **No enforced quality gate** in scripts (`test`, `lint`, or type-check command missing).

## Recommendation

These are all fixable and common for junior portfolios, but as-is they are significant process/maintainability concerns for production readiness.
