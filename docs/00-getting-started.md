# Getting Started

Use this guide to install dependencies and run the app locally.

## Prerequisites

- Node.js 18+ (Node 20 LTS recommended)
- npm 9+ (comes with Node.js)

## 1) Get the code

Clone the repo and move into the project folder:

```bash
git clone <your-repo-url>
cd uds-sample-app
```

## 2) Install packages

Install all project dependencies:

```bash
npm ci
```

If you are making dependency changes, use:

```bash
npm install
```

## 3) Run the application

Start the Vite dev server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## 4) Run Storybook (optional)

Start Storybook for design-system component development:

```bash
npm run storybook
```

Then open `http://localhost:6006`.

## Helpful commands

- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run lint:styles` - run Stylelint for SCSS
