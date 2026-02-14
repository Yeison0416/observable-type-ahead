# Observable Type-Ahead

A modular, scalable, and professional TypeScript project implementing a type-ahead (autocomplete) feature using RxJS, Handlebars, and SCSS/SASS. Built with high software standards, this project demonstrates modern frontend architecture, state management, and clean separation of concerns.

---

## Features

- Type-ahead/autocomplete input with real-time filtering
- RxJS-based observable state management
- Modular, BEM-compliant SCSS styling
- Handlebars templating for clean UI composition
- Pure domain logic for business rules
- Component-based architecture
- TypeScript for type safety and maintainability
- Webpack for development and production builds

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

- Opens a local dev server with live reloading

### Build for Production

```bash
npm run build
```

- Generates optimized bundle in `dist/`

## Usage

1. The main controller component composes the UI and orchestrates state.
2. State is managed via an RxJS store for predictable reactivity.
3. Components are split by responsibility and react only to app state.
4. Domain logic is handled by pure functions for easy testing and maintenance.

## Folder Structure

- `src/app/components/` — UI components
- `src/app/state/` — State management
- `src/app/types/` — TypeScript types
- `src/app/domain/` — Pure domain logic
- `src/app/` — Main controller and composition

## Demo
