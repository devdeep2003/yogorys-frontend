# Yogorys Frontend

A calm, dark, yoga-inspired web interface built with **React 19**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui**. Features dedicated workspaces for Judge and Administrator authentication with an authentic terminal-style ASCII meditation art composition.

---

## Features

- **Dark Yoga Aesthetic**: Atmospheric deep charcoal and midnight navy background (`#07080d`), soft violet/indigo ambient glows, and restrained glassmorphism (`backdrop-blur-xl`).
- **Authentic ASCII Monospace Art**: A custom, mathematically proportioned terminal-style illustration of a person meditating in full lotus pose (*Padmasana*). Built purely from standard ASCII characters with character density shading, an aspect-corrected circular halo, sparse celestial stars, and horizontal water ripples without external image or network dependencies.
- **Dedicated Role Workspaces**:
  - `/judge/login`: Judge workspace sign-in with Judge ID and password credentials.
  - `/admin/login`: Administrator workspace sign-in with Username and password credentials.
  - Role switcher tab component allowing seamless navigation between roles with active state indicators.
- **Accessible & Responsive Forms**:
  - Built with shadcn/ui (`Card`, `Input`, `Label`, `Button`, `Alert`) and Radix UI primitives.
  - Password visibility toggle with accessible `aria-pressed` states.
  - Accessible touch targets: all buttons, tabs, inputs, and toggles meet or exceed the **44px** minimum touch target standard.
  - Controlled inputs with inline validation, `autocomplete="username"` and `autocomplete="current-password"` support.
  - Local simulated submission feedback (UI demonstration; no mock backend or nonexistent dashboard redirect).
- **Responsive Across All Viewports**:
  - Two-column split composition on desktop (`≥1024px`).
  - Balanced stacked layout on tablet (`431px–1023px`) ensuring the artwork does not compete with form interactions.
  - Compact vertical stack on mobile (`320px–430px`) with dynamically scaled font sizes preventing line wraps or horizontal page scroll.
  - Verified at 200% browser zoom without layout breakage.

---

## Routes

| Route | Description | Primary Fields |
| :--- | :--- | :--- |
| `/` | Default redirect | Redirects automatically to `/judge/login` |
| `/judge/login` | Judge Login Page | Judge ID, Password, Show/Hide Toggle |
| `/admin/login` | Administrator Login Page | Username, Password, Show/Hide Toggle |
| `*` | Not Found Fallback | 404 screen with link to return to `/judge/login` |

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (`button`, `input`, `label`, `card`, `alert`) powered by Radix UI
- **Routing**: [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint 10

---

## Project Structure

```text
yogorys-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── artwork/
│   │   │   └── MeditatingAsciiArt.jsx   # Monospace ASCII lotus meditation art
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx            # Reusable controlled authentication form
│   │   │   └── RoleSwitcher.jsx         # Accessible Judge/Admin role navigation
│   │   ├── layout/
│   │   │   └── AuthLayout.jsx           # Responsive atmospheric shell & background
│   │   └── ui/                          # shadcn/ui components (button, input, card, etc.)
│   ├── lib/
│   │   └── utils.js                     # clsx + tailwind-merge helper (cn)
│   ├── pages/
│   │   ├── AdminLoginPage.jsx           # Admin login route view
│   │   ├── JudgeLoginPage.jsx           # Judge login route view
│   │   └── NotFoundPage.jsx             # Fallback 404 view
│   ├── App.jsx                          # Router configuration
│   ├── index.css                        # Tailwind v4 theme tokens & reset styles
│   └── main.jsx                         # Application entry point
├── components.json                      # shadcn/ui configuration
├── jsconfig.json                        # Path alias (@/*) resolution
├── package.json
└── vite.config.js                       # Vite plugins & path resolution
```

---

## Getting Started

### Prerequisites

- Node.js `≥ 20.x` (tested on Node v24)
- npm `≥ 10.x`

### Installation

```bash
npm install
```

### Development Server

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality and formatting issues:

```bash
npm run lint
```

---

## Responsive & Accessibility Verification

The interface has been audited and verified via automated Chrome DevTools Protocol (CDP) testing across:
- **320px** — Narrow Mobile (e.g. iPhone SE)
- **360px** — Standard Android Mobile
- **390px** — Modern Mobile (e.g. iPhone 14/15)
- **430px** — Large Mobile (e.g. iPhone Pro Max)
- **768px** — Tablet (e.g. iPad Portrait)
- **1024px** — Small Desktop / iPad Landscape
- **1440px** — Large Desktop
- **200% Zoom** — Browser zoom compliance
