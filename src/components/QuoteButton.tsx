"use client";

import { useState } from "react";

// Another Client Component. This one calls our own API route at /api/quote,
// which runs on the server. Good example of client <-> server in one project.
export default function QuoteButton() {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    setLoading(true);
    try {
      const res = await fetch("/api/quote");
      const data: { quote: string } = await res.json();
      setQuote(data.quote);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={fetchQuote}
        disabled={loading}
        className="w-fit rounded-md border border-zinc-300 px-4 py-2 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        {loading ? "Loading..." : "Get a quote from the server"}
      </button>
      {quote && (
        <blockquote className="border-l-2 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          {quote}
        </blockquote>
      )}
    </div>
  );
}
