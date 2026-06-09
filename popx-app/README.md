# PopX — Authentication & Account Management

This repository contains a small React application that demonstrates a basic user flow for account creation, login, and profile display. The project is built with Vite and uses Tailwind CSS for layout and styling.

Purpose: provide a compact, well-structured starter that shows how to wire simple forms, pass data between routes, and keep the UI responsive and design-accurate.

## Project overview

- Welcome page with clear calls-to-action
- Create Account form collecting name, email, phone and optional company
- Login form accepting email and password
- Account Settings page which displays the user's name and email passed from the previous pages

User data is kept in memory and passed between routes using React Router's navigation state (suitable for demo apps; for persistence use a backend or local storage).

## Tech stack

- React 19 — UI library using hooks and functional components
- Vite — development server and build tool
- React Router DOM — client-side routing and navigation state
- Tailwind CSS — utility-first CSS for responsive layouts
- ESLint — code quality checks and linting rules

## Project structure (important files)

```
src/
├── page/
│   ├── Welcome.jsx
│   ├── CreateAccount.jsx
│   ├── Login.jsx
│   └── AccountSettings.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css

public/
├── Group1585.svg
└── d51c7025-46da-4a3e-aa82-50beb1bb4797.png
```

## How it works

- Forms in `CreateAccount.jsx` and `Login.jsx` collect user input.
- When a user submits, `navigate()` is called with a `state` object containing `name` and `email`.
- `AccountSettings.jsx` reads `location.state` via React Router's `useLocation()` hook and renders the values.

This approach is light and requires no backend; the trade-off is that data does not survive page reloads.

## Development

Prerequisites: Node.js 16+ and npm/yarn.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint code:

```bash
npm run lint
```

## Notes and next steps

- For real applications, integrate an authentication backend and persistent storage.
- Move inline design-specific styles into CSS/Tailwind utilities for maintainability.
- Add form validation and accessibility improvements.

## Author

Sarthak Gupta (sarthakg97)
Email: sarthakguptaa2002@gmail.com

Repository: https://github.com/sarthakg97/popx-app
