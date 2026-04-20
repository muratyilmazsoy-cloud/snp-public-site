export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] items-center px-4 md:px-8">
      <div className="w-full border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">404 / Not found</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">This route does not exist in the current doctrine map.</h1>
        <p className="mt-4 text-gray-1">Use navigation to return to an active business infrastructure route.</p>
      </div>
    </main>
  );
}
