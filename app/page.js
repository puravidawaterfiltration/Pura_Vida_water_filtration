export default function Home() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <section className="bg-gradient-to-br from-[#050816] via-[#071b2d] to-[#04070f] text-white px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-black italic tracking-[0.18em] text-[#12B5E5] drop-shadow-[4px_4px_0px_#FF3F8E]">
            PURA VIDA
          </h1>

          <p className="text-sm tracking-[0.45em] text-slate-300 mt-3">
            WATER FILTRATION
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mt-12 mb-8">
            Custom Water Solutions.
            <span className="block text-[#12B5E5]">
              Built Around Your Water.
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Premium residential and commercial water filtration systems engineered
            specifically for your water source, plumbing system, and long-term goals.
          </p>

          <a
            href="mailto:info@puravidafiltration.com"
            className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-slate-900 px-8 py-5 rounded-2xl font-bold transition inline-flex items-center justify-center"
          >
            Schedule Free Water Testing
          </a>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            'Whole Home Filtration',
            'Premium Water Softening',
            'Whole Home Reverse Osmosis',
            'Well Water Treatment',
            'Municipal Water Solutions',
            'Commercial Water Systems',
            'Undersink RO Systems',
            'Free Water Testing'
          ].map((service) => (
            <div
              key={service}
              className="rounded-[2rem] border border-slate-200 p-8 bg-white hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-[#12B5E5]" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-28 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#12B5E5] text-sm mb-4">
            Contact Pura Vida
          </p>

          <h3 className="text-5xl font-black text-slate-900 leading-tight mb-8">
            Schedule Your Free Water Testing.
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Palm Beach County • Martin County • Okeechobee County
          </p>

          <div className="space-y-5 mb-12">
            <p className="text-2xl font-bold text-slate-900">
              (772) 206-0820
            </p>

            <p className="text-xl text-slate-700">
              info@puravidafiltration.com
            </p>
          </div>

          <a
            href="mailto:info@puravidafiltration.com"
            className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-10 py-5 rounded-2xl text-lg font-bold transition shadow-xl inline-flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}