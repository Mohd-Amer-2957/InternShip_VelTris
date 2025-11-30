# Copilot Instructions for AI Agents

## Project Overview
- **Stack:** React 19, Redux Toolkit, Vite, ESLint
- **Purpose:** Minimal Todo app using Redux Toolkit for state management, with Vite for fast development and HMR.

## Architecture & Data Flow
- **Entry Point:** `src/main.jsx` mounts `<App />` and wraps it with Redux `<Provider store={store}>`.
- **Store:** Defined in `src/app/store.js` using `@reduxjs/toolkit`. The root reducer is the default export from `src/todo/todoSlice.js`.
- **State Shape:**
  - `state.todos` is an array of todo objects: `{ id, text }`.
- **Slice:**
  - `src/todo/todoSlice.js` defines the `todo` slice with reducers: `addTodo`, `removeTodo`, `updateTodo`.
- **Components:**
  - `AddTodo.jsx`: Controlled input, dispatches `addTodo`.
  - `Todos.jsx`: Lists todos, dispatches `removeTodo` (note: currently missing `dispatch` import).
  - `App.jsx`: Layout, renders `AddTodo` and `Todos`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite, auto-opens browser)
- **Build:** `npm run build`
- **Preview Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint with React/React Hooks rules)

## Project-Specific Conventions
- **Redux Store:**
  - The store uses a single reducer (`todoReducer`).
  - Actions are dispatched directly from components using hooks (`useDispatch`).
- **Todos State:**
  - Initial state includes a sample todo: `{id:1, text:"Hello world !"}`.
  - IDs for new todos are generated with `nanoid()`.
- **Component Structure:**
  - All UI logic is colocated in `src/components/`.
  - State logic is in `src/todo/` and `src/app/`.
- **ESLint:**
  - Unused variables starting with uppercase or underscore are ignored.
  - ESLint config is in `eslint.config.js` (ESM format).

## Integration & Patterns
- **Redux Toolkit:** Used for all state logic; no legacy Redux patterns.
- **No TypeScript:** All files are JS/JSX.
- **No custom middleware or async logic.**
- **No routing or API integration.**

## Examples
- To add a todo: `dispatch(addTodo(input))` in `AddTodo.jsx`.
- To remove: `dispatch(removeTodo(todo))` in `Todos.jsx`.

## Key Files
- `src/main.jsx`, `src/app/store.js`, `src/todo/todoSlice.js`, `src/components/AddTodo.jsx`, `src/components/Todos.jsx`

---

**Update this file if you add new slices, async logic, or change the state structure.**
