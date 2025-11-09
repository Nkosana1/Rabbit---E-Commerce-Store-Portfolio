## Frontend App Overview

This Vite + React app powers the Rabbit e-commerce storefront UI. It currently includes:

- `components/Common` &mdash; reusable navigation elements such as the header, navbar, and search bar
- `components/Layout` &mdash; layout primitives including the cart drawer and top bar wrapper
- `pages/` &mdash; ready for view-level route components
- `assets/` &mdash; static icons and imagery

### Run locally

```bash
npm install
npm run dev
```

The development server will start at `http://localhost:5173/`.

### Linting

```bash
npm run lint
```

The ESLint configuration lives in `eslint.config.js` and enforces React hook rules, refresh-safe code, and unused variable checks.
