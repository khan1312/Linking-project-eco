export default function About() {
    return (
        <>
            <main id="top" className="min-h-screen bg-[#faf9f5] text-[#24352b]">
                <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            About EcoLink
                        </p>
                        <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                            Better choices, <span className="text-emerald-700">together.</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
                            We connect people with thoughtful products and independent makers,
                            making it easier to shop with care for our planet and communities.
                        </p>
                        <a
                            href="#our-story"
                            className="mt-8 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
                        >
                            Get to know us
                        </a>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"
                            alt="Sunlight shining through a green forest"
                            className="h-[360px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[480px]"
                        />
                        <div className="absolute -bottom-6 left-5 max-w-xs rounded-2xl bg-white p-5 shadow-lg sm:left-8">
                            <p className="text-sm font-medium leading-6 text-stone-700">
                                “A little more good, in everything we do.”
                            </p>
                        </div>
                    </div>
                </section>

                <section id="our-story" className="bg-white">
                    <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2">
                        <article className="rounded-3xl bg-[#f2f4ed] p-8 sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                Our story
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                                Good things grow when we link up.
                            </h2>
                            <p className="mt-4 leading-7 text-stone-600">
                                EcoLink began with a simple idea: finding more responsible
                                everyday products shouldn’t be complicated. We bring thoughtful
                                finds and the people who make them closer to you.
                            </p>
                        </article>
                        <article className="rounded-3xl bg-[#e6eee4] p-8 sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                Our mission
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                                Make mindful living feel simple.
                            </h2>
                            <p className="mt-4 leading-7 text-stone-600">
                                We champion independent makers and carefully chosen goods, helping
                                people make small, positive choices that add up to a brighter
                                future.
                            </p>
                        </article>
                    </div>
                </section>

                <section id="why-choose-us" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Why choose EcoLink
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Thoughtful from the very start.
                        </h2>
                        <p className="mt-4 leading-7 text-stone-600">
                            Shopping with us means discovering products with purpose and
                            supporting the people behind them.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-3">
                        {[
                            {
                                title: 'Curated with care',
                                description:
                                    'Find considered products selected to make everyday choices feel better.',
                            },
                            {
                                title: 'Makers worth meeting',
                                description:
                                    'Support independent creators and the communities they grow.',
                            },
                            {
                                title: 'Better, together',
                                description:
                                    'Every mindful purchase is a small step toward a more sustainable future.',
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7"
                            >
                                <span className="grid size-10 place-items-center rounded-full bg-emerald-100 text-lg text-emerald-800">
                                    ✓
                                </span>
                                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-stone-600">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>


        </>
    )
}
