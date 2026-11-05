import Footer from "../Common/Footer"
import Header from "../Common/Header"

const categories = [
  {
    name: 'Home & living',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Everyday essentials',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Natural skincare',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85',
  },
]

const products = [
  {
    name: 'Reusable glass bottle',
    maker: 'Made by Kindred',
    price: '$24',
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Everyday market tote',
    maker: 'Made by Common Thread',
    price: '$32',
    tag: 'Handmade',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Botanical care set',
    maker: 'Made by Field Notes',
    price: '$28',
    tag: 'Plastic-free',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Ceramic coffee cup',
    maker: 'Made by Sunday Studio',
    price: '$36',
    tag: 'Small batch',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=85',
  },
]

export default function Home() {
  return (
    <>

    <main id="top" className="bg-[#faf9f5] text-[#24352b]">
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-emerald-950 sm:min-h-[680px]">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2200&q=90"
          alt="Fresh produce and thoughtfully sourced goods at a market"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102b20]/85 via-[#183b2c]/60 to-[#183b2c]/10" />
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              <span className="size-2 rounded-full bg-lime-300" />
              Good finds, thoughtfully made
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Little choices.
              <br />
              <span className="text-lime-200">Lasting impact.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/85">
              Shop useful, beautiful things from independent makers who care
              about how they’re made—and the world we share.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-lime-100"
              >
                Shop the collection <span aria-hidden="true">→</span>
              </a>
              <a
                href="#our-story"
                className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our story
              </a>
            </div>
            <p className="mt-10 text-sm text-white/80">
              Loved by <strong className="text-white">1,200+</strong>{' '}
              thoughtful shoppers
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 text-center sm:grid-cols-3 sm:px-10">
          {[
            ['Made with care', 'Thoughtful materials and mindful makers'],
            ['Small businesses', 'Every order supports independent creators'],
            ['Less, but better', 'Everyday favorites chosen to last'],
          ].map(([title, description]) => (
            <div key={title} className="px-3 py-2">
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-sm text-stone-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Find your kind of good
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Shop by category
            </h2>
          </div>
          <a
            href="#shop"
            className="hidden text-sm font-semibold text-emerald-800 hover:text-emerald-950 sm:block"
          >
            View all <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#shop"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-xl font-semibold text-white">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-[#f0f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                The good stuff
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Made for everyday living.
              </h2>
            </div>
            <a
              href="#shop"
              className="hidden text-sm font-semibold text-emerald-800 hover:text-emerald-950 sm:block"
            >
              Shop all products <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="min-w-0">
                <a
                  href="#shop"
                  className="group relative block overflow-hidden rounded-2xl bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/4.5] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-emerald-900 sm:text-xs">
                    {product.tag}
                  </span>
                </a>
                <div className="flex items-start justify-between gap-2 pt-3">
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 sm:text-sm">
                      {product.maker}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85"
            alt="Hands carefully tending a young green plant"
            className="h-[340px] w-full rounded-[2rem] object-cover sm:h-[440px]"
          />
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:right-8">
            <p className="text-2xl font-semibold text-emerald-800">One good choice</p>
            <p className="mt-1 text-sm text-stone-600">can grow into many</p>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Why choose EcoLink
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Shopping that feels good in more ways than one.
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            We make it easier to find everyday goods with a little more thought
            behind them—and to support the people making them.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                title: 'Thoughtfully selected',
                description:
                  'A considered collection of useful, lasting finds for everyday life.',
              },
              {
                title: 'Made by independent makers',
                description:
                  'Meet small businesses and creators who put care into their work.',
              },
              {
                title: 'A more mindful way to shop',
                description:
                  'Discover alternatives that help make better choices feel simple.',
              },
            ].map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e8eee4] font-semibold text-emerald-800"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#shop"
            className="mt-8 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
          >
            Explore the collection <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>
      </section>

      <section id="our-story" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid items-center gap-8 rounded-[2rem] bg-emerald-900 p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
              A little about us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Better things happen when we link up.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-emerald-50/80">
              EcoLink brings people and independent makers together around
              thoughtfully made goods. We believe small, considered choices can
              make a meaningful difference.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              Get in touch
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85"
            alt="Hands holding a small green plant"
            className="h-64 w-full rounded-2xl object-cover sm:h-80"
          />
        </div>
      </section>

      <div id="contact" className="sr-only">
        Contact EcoLink
      </div>
    </main>
    </>
  )
}
