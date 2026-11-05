import { Link } from 'react-router'

export default function Cart() {
  return (
    <main className="min-h-[65vh] bg-[#faf9f5] px-6 py-16 text-[#24352b] sm:px-10 sm:py-24">
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Your good finds
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Shopping cart
            </h1>
          </div>
          <Link
            to="/#shop"
            className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-950"
          >
            Continue shopping <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-8 py-12 md:grid-cols-[1.4fr_0.8fr] md:py-16">
          <div className="flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-12 text-center">
            <span
              aria-hidden="true"
              className="grid size-16 place-items-center rounded-full bg-[#e8eee4] text-emerald-800"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.2 11.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </span>
            <h2 className="mt-5 text-xl font-semibold">Your cart is taking a breather</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
              It’s empty for now. Browse thoughtful everyday finds from
              independent makers and add something you love.
            </p>
            <Link
              to="/#shop"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              Explore the collection <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <aside className="h-fit rounded-3xl bg-emerald-950 p-7 text-white sm:p-8">
            <h2 className="text-xl font-semibold">A little more good</h2>
            <p className="mt-3 text-sm leading-6 text-emerald-100/80">
              Every EcoLink find is chosen with care and helps support
              independent makers.
            </p>
            <div className="mt-6 space-y-4 border-t border-white/15 pt-5">
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-lime-200">✓</span>
                <p className="text-sm text-emerald-50/90">Thoughtfully selected goods</p>
              </div>
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-lime-200">✓</span>
                <p className="text-sm text-emerald-50/90">Independent makers, supported</p>
              </div>
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-lime-200">✓</span>
                <p className="text-sm text-emerald-50/90">Everyday choices made with care</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
