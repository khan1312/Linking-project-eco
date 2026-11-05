import Footer from "../Common/Footer"
import Header from "../Common/Header"

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@ecolink.com',
    href: 'mailto:hello@ecolink.com',
  },
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    label: 'Office',
    value: '24 Greenway Street, Portland, OR',
    href: 'https://maps.google.com/?q=24+Greenway+Street+Portland+OR',
  },
]

export default function Contact() {
  return (
   <>
 
    <main id="contact" className="min-h-screen bg-[#faf9f5] text-[#24352b]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Contact us
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            We’d love to hear from you.
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Have a question, an idea, or want to work with us? Get in touch and
            our friendly team will be happy to help.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl bg-emerald-900 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-semibold">Contact information</h2>
            <p className="mt-3 leading-7 text-emerald-100/80">
              Choose the best way to reach us. We’re here to help.
            </p>

            <div className="mt-9 space-y-7">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-emerald-100"
                  >
                    {detail.label === 'Email'
                      ? '@'
                      : detail.label === 'Phone'
                        ? '↗'
                        : '⌖'}
                  </span>
                  <div>
                    <p className="text-sm text-emerald-100/70">{detail.label}</p>
                    <a
                      className="mt-1 inline-block text-sm font-medium hover:text-emerald-200"
                      href={detail.href}
                      target={detail.label === 'Office' ? '_blank' : undefined}
                      rel={detail.label === 'Office' ? 'noreferrer' : undefined}
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm font-semibold">Opening hours</p>
              <p className="mt-2 text-sm text-emerald-100/75">
                Monday–Friday, 9:00 AM–5:00 PM
              </p>
            </div>
          </aside>

          <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Fill in the details below and we’ll be in touch soon.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Tell us a little more..."
                  className="w-full resize-y rounded-xl border border-stone-200 bg-[#faf9f5] px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 sm:col-span-2 sm:justify-self-start"
              >
                Send message <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
   

   </>
  )
}
