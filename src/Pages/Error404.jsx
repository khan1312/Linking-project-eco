export default function Error404() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f5] px-6 py-16 text-[#24352b]">
      <section className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Page not found
        </p>
        <p className="mt-5 text-8xl font-bold tracking-tight text-emerald-900 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Looks like you took a wrong turn.
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to discovering thoughtful finds.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
        >
          Back to home
        </Link>
      </section>
    </main>
  )
}
