import Counter from "@/components/Counter";
import QuoteButton from "@/components/QuoteButton";

// This is a Server Component (the default in the app/ folder). It renders on
// the server, so the timestamp below is computed when the page is requested.
export default function Home() {
  const renderedAt = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-bold">Hello, B@B 👋</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A bare-bones Next.js app. Two pages, a couple of buttons, and one API
          route.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          This page was rendered on the server at {renderedAt}.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">1. A button with state</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Client Component using React&apos;s <code>useState</code>.
        </p>
        <Counter />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">2. A button that hits an API</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Calls <code>/api/quote</code>, a Route Handler defined in this same
          project.
        </p>
        <QuoteButton />
      </section>
    </div>
  );
}
