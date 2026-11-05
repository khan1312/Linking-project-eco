import { useState } from 'react'
import { Link } from 'react-router'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      'Sign-in is not available yet. Please contact us for help accessing your account.',
    )
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-[#faf9f5] px-6 py-14 text-[#24352b] sm:px-10">
      <section className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm md:grid-cols-2">
        <div className="relative hidden min-h-[580px] overflow-hidden bg-emerald-950 p-10 text-white md:flex md:flex-col md:justify-between lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 size-96 rounded-full border border-white/10"
          />
          <Link
            to="/"
            className="relative flex w-fit items-center gap-2 text-xl font-bold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-full bg-white text-sm text-emerald-900">
              e
            </span>
            EcoLink
          </Link>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
              Good to have you back
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
              Thoughtful finds,
              <br />
              just for you.
            </h1>
            <p className="mt-5 max-w-sm leading-7 text-emerald-100/80">
              Sign in to pick up where you left off and discover goods made
              with care.
            </p>
          </div>

          <p className="relative text-sm text-emerald-100/70">
            Small choices. Lasting impact.
          </p>
        </div>

        <div className="flex items-center px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
          <div className="mx-auto w-full max-w-md">
            <Link
              to="/"
              className="mb-9 inline-flex items-center gap-2 text-lg font-bold tracking-tight text-[#24352b] md:hidden"
            >
              <span className="grid size-8 place-items-center rounded-full bg-emerald-800 text-sm text-white">
                e
              </span>
              EcoLink
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Welcome back
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sign in to your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Enter your email and password to continue.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="login-password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    to="/Contact-Us"
                    className="text-sm font-medium text-emerald-800 hover:text-emerald-950"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 pr-16 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((isVisible) => !isVisible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-3 my-auto h-fit rounded px-1 py-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-emerald-700"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                Sign in <span aria-hidden="true">→</span>
              </button>

              {message && (
                <p
                  role="status"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
                >
                  {message}{' '}
                  <Link
                    to="/Contact-Us"
                    className="font-semibold underline underline-offset-2"
                  >
                    Contact us
                  </Link>
                  .
                </p>
              )}
            </form>

            <p className="mt-8 border-t border-stone-200 pt-6 text-sm leading-6 text-stone-600">
              New to EcoLink?{' '}
              <Link
                to="/Contact-Us"
                className="font-semibold text-emerald-800 hover:text-emerald-950"
              >
                Get in touch
              </Link>{' '}
              to learn more about shopping with us.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
