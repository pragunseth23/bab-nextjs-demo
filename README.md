# B@B Dev Edu — Next.js demo

A bare-bones Next.js (App Router, TypeScript, Tailwind) app for the weekly dev edu demo.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's in it

| Route         | File                          | What it shows                                  |
| ------------- | ----------------------------- | ---------------------------------------------- |
| `/`           | `src/app/page.tsx`            | Server Component + two interactive buttons     |
| `/about`      | `src/app/about/page.tsx`      | Folder-based routing, explains the file layout |
| `/api/quote`  | `src/app/api/quote/route.ts`  | A Route Handler (API endpoint) returning JSON  |

Components live in `src/components/`:

- `Counter.tsx` — a `"use client"` component using `useState`
- `QuoteButton.tsx` — a client component that `fetch`es `/api/quote`

## Demo talking points

1. Server vs Client Components: the home page renders a timestamp on the server; the buttons need `"use client"` to hold state.
2. File-system routing: adding a folder with `page.tsx` under `src/app` creates a new URL.
3. Full-stack in one repo: `route.ts` is a backend endpoint living next to the frontend.
