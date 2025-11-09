# Rabbit E-Commerce Store Portfolio

This repository now follows a clean, top-level structure so it is easier to navigate:

- `apps/frontend` &mdash; Vite + React storefront application
- `BackEnd/` &mdash; reserved for future server or API work
- `.gitignore` &mdash; shared ignore rules for every app

## Getting Started

```bash
cd apps/frontend
npm install
npm run dev
```

The dev server runs on `http://localhost:5173/` by default.

## Project Layout

- `apps/frontend/src/components` contains page layouts and common UI (header, navbar, search bar, etc.)
- `apps/frontend/src/pages` is ready for route-level pages
- `apps/frontend/src/assets` stores static assets such as icons

Feel free to drop backend code inside `BackEnd/` when you're ready. Each app can keep its own `package.json` so dependencies stay isolated.

