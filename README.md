# Call Activity UI — React frontend challenge

A **historical frontend coding exercise (2021)**: a call-activity interface built with React and Axios. The application was based on a supplied hiring-challenge starter and interacts with an external call-activity API.

## Implemented interface

- Inbound and outbound call history with date grouping and call-state icons
- Separate **Calls** and **Archived** views
- A call detail panel showing direction, participants and duration
- Archive/unarchive actions through API requests
- Loading indicator and CSS-styled views

## Technology

React 17, React hooks, Axios, React Icons, CSS, Babel and Webpack 4.

## Project structure

- `src/App.jsx` — call list, view selection, API loading
- `src/components/Activity.jsx` — activity rows
- `src/components/Detail.jsx` — call details and archive actions
- `src/css/` — application styling

## Running locally

```sh
npm install
npm start
```

To create a production bundle (using the legacy build tooling):

```sh
npm run build
```

**Important:** This historical project uses an external Heroku-hosted API hardcoded in the components. That API and the original Netlify demonstration have **not been verified as available today**; running the UI may require replacing the API with a supported service or a local mock. The repository's dependencies are also outdated.

## Context

This is a time-boxed frontend challenge, not a production application. The original assignment asked for an activity feed, details screen and archive interactions; this README describes what the implementation contains rather than reproducing the assignment instructions.
