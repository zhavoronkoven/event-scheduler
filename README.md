# Event Scheduler

A responsive event scheduling application built with React, React Router, Vite, Tailwind CSS and daisyUI. Users can browse events, view event details, register, sign in, and create events through a REST API.

## Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   └── EventCard.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── EventDetailsPage.jsx
│   ├── SignInPage.jsx
│   ├── SignUpPage.jsx
│   └── CreateEventPage.jsx
├── App.jsx
├── router.jsx
├── index.css
└── main.jsx
```

## Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage.jsx` | Fetches and displays events sorted chronologically using `GET /api/events`. |
| `/events/:id` | `EventDetailsPage.jsx` | Fetches and displays an event using `GET /api/events/:id`. |
| `/signup` | `SignUpPage.jsx` | Registers a new user using `POST /api/users` and redirects to Sign In after success. |
| `/signin` | `SignInPage.jsx` | Authenticates a user using `POST /api/auth/login`, stores the API token, and redirects to Home. |
| `/events/create` | `CreateEventPage.jsx` | Provides a protected form for creating events using `POST /api/events`. |

### Route Protection

The `/events/create` route is accessible only to authenticated users. Unauthenticated users are redirected to `/signin`.

The API token is stored in `localStorage` and automatically attached to authenticated requests.

## Components and Modules

### Root

- **`main.jsx`** — Entry point that renders the React application.
- **`App.jsx`** — Root component that initializes the application and provides shared context.
- **`router.jsx`** — Defines application routes and their corresponding pages.

### Components

- **`Layout.jsx`** — Provides the shared page structure, including the header, page content, and footer.
- **`Header.jsx`** — Displays navigation links based on the user's authentication state.
- **`ProtectedRoute.jsx`** — Restricts access to protected routes and redirects unauthenticated users to Sign In.
- **`EventCard.jsx`** — Displays an event's title, description, date, and location as a navigable card.

### Context

- **`AuthContext.jsx`** — Manages authentication state and provides authentication methods throughout the application.

### Pages

- **`HomePage.jsx`** — Fetches events, handles loading and error states, sorts events chronologically, and displays the event list.
- **`EventDetailsPage.jsx`** — Fetches and displays the details of a selected event.
- **`SignInPage.jsx`** — Handles user sign-in, stores the authentication token, and displays authentication errors.
- **`SignUpPage.jsx`** — Handles user registration, form validation, and registration errors.
- **`CreateEventPage.jsx`** — Handles event creation, form submission, and API errors.

API requests and their response handling are implemented directly in the relevant page components.

### Styling

- **`index.css`** — Contains global styles and Tailwind CSS imports or directives.

## Authentication

- The API token is stored in `localStorage`.
- Authenticated requests include the token in their request headers.
- The `/events/create` route is protected.
- Unauthenticated users are redirected to `/signin`.

## Technology Stack

- Reac
- React Router
- Vite
- Tailwind CSS
- REST API
- localStorage

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
```

## Deployment

The production build is generated in the `dist/` directory and can be deployed to Render as a static site.