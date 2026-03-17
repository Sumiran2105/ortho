export default function SamhithaLandingPage() {
  const pillars = [
    {
      title: 'Ayurveda Support',
      text: 'Traditional wellness support designed around long-term joint comfort and recovery.',
      icon: '🌿',
    },
    {
      title: 'Nutrition',
      text: 'Daily nutrition habits and functional supplementation focused on joint health.',
      icon: '🥗',
    },
    {
      title: 'Physiotherapy',
      text: 'Movement-first knee care with structured strengthening, mobility, and rehab guidance.',
      icon: '🦵',
    },
    {
      title: 'Expert Orthopaedic Care',
      text: 'A modern clinical approach to help patients delay, avoid, or optimize surgery when needed.',
      icon: '🩺',
    },
  ]

  const steps = [
    'Assess your knee pain and daily limitations',
    'Build a customized joint-preservation plan',
    'Combine therapy, lifestyle, and guided support',
    'Track progress and improve function over time',
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-amber-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
                Premium Joint Health Program
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                SAMHITHA
              </h1>
              <p className="mt-3 text-lg font-medium uppercase tracking-[0.25em] text-emerald-700">
                Save the Joint
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                A premium orthopaedic wellness brand focused on knee arthritis care through an
                integrated model of physiotherapy, nutrition, Ayurveda-inspired support, and
                expert guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                  Book Consultation
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:scale-[1.02]">
                  Explore Programs
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold">360°</p>
                  <p className="mt-1 text-sm text-slate-500">Integrated joint care</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold">12 Weeks</p>
                  <p className="mt-1 text-sm text-slate-500">Structured recovery path</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold">Knee-First</p>
                  <p className="mt-1 text-sm text-slate-500">Focused arthritis support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-700 to-slate-900 p-8 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">
                        SAMHITHA
                      </p>
                      <h2 className="mt-2 text-3xl font-semibold">Joint Preservation</h2>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-4xl backdrop-blur">
                      🦵
                    </div>
                  </div>
                  <p className="mt-6 max-w-md text-sm leading-6 text-emerald-50 md:text-base">
                    Designed for people with knee pain, early osteoarthritis, stiffness,
                    weakness, and reduced confidence in movement.
                  </p>
                  <div className="mt-8 grid gap-3">
                    {steps.map((step, idx) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm backdrop-blur"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900">
                          {idx + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Core Pillars
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            One brand. Four layers of knee care.
          </h2>
          <p className="mt-4 text-slate-600">
            SAMHITHA combines evidence-led orthopaedic thinking with holistic daily-care systems
            to help patients move better and preserve function.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Who this is for
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for patients who want to save the joint before it worsens.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Early knee osteoarthritis',
              'Pain while climbing stairs',
              'Joint stiffness and weakness',
              'Post-injury knee degeneration',
              'Weight-related knee overload',
              'People trying to delay surgery',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-emerald-700 to-teal-600 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
                Launch-ready section
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Start building the SAMHITHA digital brand.
              </h2>
              <p className="mt-4 max-w-xl text-emerald-50">
                This landing page can be expanded into a real website with consultation booking,
                product pages, patient testimonials, rehab plans, and lead capture forms.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-lg">
                Add Products
              </button>
              <button className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">
                Add Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
