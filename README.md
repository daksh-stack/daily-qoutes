# daily-quotes

## Deploying to Vercel

This repository contains a Vite React frontend in `frontend/` and a small backend API converted to a Vercel Serverless Function under `frontend/api/quote.js`.

Quick steps to deploy on Vercel:

1. Sign in to Vercel and create a new project.
2. Import this repository.
3. In the Project Settings set the Root Directory to `/` (the repo root). The provided `vercel.json` will instruct Vercel to build the frontend and the API.
4. Deploy — Vercel will run `npm install` and build the frontend using the `vercel-build` script defined in `frontend/package.json`.

Notes:
- The API endpoint is available at `/api/quote` (serverless function lives at `frontend/api/quote.js`).
- The original Express server in `backend/server.js` is left untouched for local runs, but Vercel will use the serverless function.
- If you prefer to have the project root set to `frontend` in Vercel UI, set the Root Directory to `frontend` and adjust routes accordingly; but the included `vercel.json` works with the repo root.
