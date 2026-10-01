"use client";

import { useState } from "react";

// This is a Client Component: it runs in the browser so it can hold state
// and respond to clicks. The "use client" line at the top is what opts it in.
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="rounded-md bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Click me
      </button>
      <span className="font-mono text-lg">
        {count === 0
          ? "Not clicked yet"
          : `Clicked ${count} time${count === 1 ? "" : "s"}`}
      </span>
      {count > 0 && (
        <button
          onClick={() => setCount(0)}
          className="text-sm text-zinc-500 hover:underline"
        >
          reset
        </button>
      )}
    </div>
  );
}
