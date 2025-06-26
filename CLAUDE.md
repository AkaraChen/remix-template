# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the application for production.
- `pnpm run lint`: Runs ESLint to check for code style issues.
- `pnpm run preview`: Previews the production build locally.
- `pnpm run typecheck`: Runs TypeScript to check for type errors.

## Code Architecture and Structure

This is a [Remix SPA Mode](https://remix.run/docs/en/main/guides/spa-mode) application built with React and Vite. It utilizes [Client Data](https://remix.run/docs/en/main/guides/client-data) for data handling. Styling is managed with Tailwind CSS.

### Key Directories and Files:

- `app/`: Contains the core application logic.
    - `entry.client.tsx`: Client-side entry point for the Remix application.
    - `root.tsx`: The root component of the Remix application.
    - `routes/`: Contains route components, which define the application's pages and data loading.
    - `tailwind.css`: Main Tailwind CSS file.
- `components/ui/`: Houses reusable UI components, likely following Shadcn UI patterns, built on top of Radix UI primitives.
- `lib/utils.ts`: Common utility functions.
- Component files should be named using `kebab-case` (e.g., `my-component.tsx`).
- `public/`: Static assets like `favicon.ico`.
- Configuration files:
    - `package.json`: Project dependencies and scripts.
    - `pnpm-lock.yaml`: Dependency lock file.
    - `tsconfig.json`: TypeScript configuration.
    - `vite.config.ts`: Vite build tool configuration.
    - `postcss.config.js`: PostCSS configuration for CSS processing.
    - `tailwind.config.ts`: Tailwind CSS configuration.