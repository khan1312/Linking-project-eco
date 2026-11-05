import { Link } from "react-router";

export default function Header() {
    return (

        <>
            <header className="border-b border-stone-200 bg-[#faf9f5]">
                <nav
                    aria-label="Main navigation"
                    className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-4 sm:px-10"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#24352b]"
                        aria-label="EcoLink home"
                    >
                        <span className="grid size-9 place-items-center rounded-full bg-emerald-800 text-sm text-white">
                            e
                        </span>
                        EcoLink
                    </Link>

                    <div className="order-3 flex w-full items-center justify-center gap-6 text-sm font-medium text-stone-600 sm:order-none sm:w-auto sm:gap-8">
                        <Link className="transition hover:text-emerald-800" to="/">
                            Home
                        </Link>
                        <Link className="transition hover:text-emerald-800" to="/About-Us">
                            About Us
                        </Link>
                        <Link className="transition hover:text-emerald-800" to="/Contact-Us">
                            Contact Us
                        </Link>
                    </div>

                    <div className="ml-auto flex items-center gap-2 sm:ml-0 sm:gap-3">
                        <Link
                            to="/login"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-[#f1f8f4] transition hover:bg-emerald-50  hover:bg-emerald-900 hover:text-white bg-emerald-800"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/cart"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                            aria-label="Shopping cart"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l2.2 11.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6"
                                />
                                <circle cx="10" cy="20" r="1" />
                                <circle cx="18" cy="20" r="1" />
                            </svg>
                            Cart
                        </Link>
                    </div>
                </nav>
            </header>

        </>

    )
}
