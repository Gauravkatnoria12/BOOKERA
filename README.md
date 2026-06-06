# Frontend

A React-based frontend for the LibraryMgmt landing page built with Vite and Tailwind CSS.

## Project overview

- Modern single-page UI with animated hero, book showcase, quote sections, featured collection, contact CTA, marquee, and footer.
- Built with:
  - `React 19`
  - `Vite`
  - `Tailwind CSS`
  - `GSAP`
  - `lucide-react`
- Clean component structure under `src/components/` and visual assets in `src/assets/`.

## Key files

- `src/App.jsx` — main page layout and sections
- `src/components/Nav.jsx` — navigation bar
- `src/components/Books.jsx` — book listing section
- `src/components/GetInTouch.jsx` — contact/CTA section
- `src/components/Marquee.jsx` — animated marquee section
- `src/components/Footer.jsx` — footer content
- `src/index.css` — global styles
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — Tailwind configuration

## Getting started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run ESLint checks:

```bash
npm run lint
```

## Available scripts

- `npm run dev` — starts Vite development server with hot module replacement
- `npm run build` — bundles the app for production
- `npm run preview` — locally previews the production build
- `npm run lint` — runs ESLint across the project

## Notes

- The app is currently configured as a static frontend experience.
- To deploy, build the project and serve the `dist/` output via any static host.

## License

This project does not include a license file. Add one if you intend to share or publish the source.
