"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="bg-navy text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-4 md:px-8">
          <div className="w-full border border-gray-2/40 bg-navy-2 p-8">
            <p className="text-sm uppercase tracking-[0.12em] text-gray-1">System interruption</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">We could not complete this operation.</h1>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-4 rounded-full bg-cyan px-4 py-2 text-navy"
            >
              Retry
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
