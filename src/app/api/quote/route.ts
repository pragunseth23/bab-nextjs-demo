import { NextResponse } from "next/server";

// A Route Handler. Any file named route.ts under app/ becomes an API endpoint.
// This one answers GET /api/quote. It runs on the server (Node), never in the browser.
const quotes = [
  "Not your keys, not your coins.",
  "Don't trust, verify.",
  "Code is law. Until it gets exploited.",
  "gm.",
  "The best time to learn Next.js was yesterday. The second best time is now.",
  "Ship it.",
];

export async function GET() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return NextResponse.json({ quote, servedAt: new Date().toISOString() });
}
