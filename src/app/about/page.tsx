import Link from "next/link";

export default function About() {
  const files = [
    ["src/app/layout.tsx", "Shared shell: nav bar, fonts, global CSS."],
    ["src/app/page.tsx", "The home page (route: /). A Server Component."],
    ["src/app/about/page.tsx", "This page (route: /about). Folders = routes."],
    ["src/app/api/quote/route.ts", "API endpoint (route: /api/quote)."],
    ["src/components/Counter.tsx", "Client Component with useState."],
    ["src/components/QuoteButton.tsx", "Client Component that calls the API."],
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">How this app is put together</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        In the App Router, every folder under <code>src/app</code> is a URL
        segment, and a <code>page.tsx</code> inside it is what renders there.
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {files.map(([path, desc]) => (
          <li key={path} className="flex flex-col sm:flex-row sm:gap-3">
            <code className="shrink-0 font-mono text-zinc-800 dark:text-zinc-200">
              {path}
            </code>
            <span className="text-zinc-600 dark:text-zinc-400">{desc}</span>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-sm hover:underline">
        ← Back home
      </Link>
    </div>
  );
}
