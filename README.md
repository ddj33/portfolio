# Dylan Johnson Restrepo — Portfolio

A clean one-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. No backend, no database, no auth.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Replace placeholder links

All placeholder URLs live at the top of [app/page.tsx](app/page.tsx). Look for the `TODO` comments and replace the values:

```ts
// TODO: replace with your real LinkedIn URL
const LINKEDIN_URL = "#";
// TODO: replace with your real GitHub URL
const GITHUB_URL = "#";
// TODO: replace with the public link or PDF path for your CV (e.g. "/dylan-johnson-restrepo-cv.pdf")
const CV_URL = "#";
```

To host a CV PDF directly from the site, drop the file in a `public/` folder at the project root (e.g. `public/dylan-johnson-restrepo-cv.pdf`) and set `CV_URL = "/dylan-johnson-restrepo-cv.pdf"`.

The email address is the `EMAIL` constant in the same file.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Accept the default Next.js settings and deploy. No environment variables are required.

Vercel will auto-detect Next.js, run `npm install` and `npm run build`, and serve the site.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server on port 3000 |
| `npm run build` | Build the production bundle |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run Next.js lint (optional) |

## Tech

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
