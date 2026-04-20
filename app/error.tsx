"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="bg-navy text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-4 md:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-gray-1">Something went wrong</p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-4 rounded-full bg-cyan px-4 py-2 text-navy"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
