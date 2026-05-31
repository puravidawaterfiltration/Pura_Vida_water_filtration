const services = [
  {
    title: 'Whole Home Water Filtration',
    short: 'Remove chlorine, sediment, odor, and harmful contaminants throughout the entire home.',
    icon: '💧',
    content: [
      'Whole home water filtration in South Florida should never be treated as a one-size-fits-all product. Homes throughout Palm Beach County, Martin County, and Okeechobee County can have very different water conditions depending on the water source, municipal treatment, well depth, plumbing material, and household demand.',
      'Pura Vida Water Filtration starts with real water testing so we can identify chlorine, sediment, odor, hardness, iron, sulfur, staining, and other concerns before recommending equipment. The goal is to protect your plumbing system, improve taste and odor, and provide better water at every tap.',
      'A properly designed whole home filtration system can improve showers, laundry, fixture appearance, appliance longevity, and the overall comfort of your home.'
    ]
  },
  {
    title: 'Water Softening',
    short: 'Reduce hardness, scale buildup, and wear on water heaters, fixtures, and plumbing.',
    icon: '🛡️',
    content: [
      'Hard water is one of the most common causes of scale buildup in South Florida plumbing systems. Even when water looks clear, hardness minerals can collect inside water heaters, tankless heaters, valves, shower heads, appliances, and piping.',
      'For homeowners and rental developments, water softening can help reduce repairs, improve water heater performance, reduce spotting, improve soap lather, and extend the life of expensive plumbing equipment.',
      'Pura Vida sizes softening systems based on testing, plumbing layout, and real household demand. We do not guess.'
    ]
  },
  {
    title: 'Whole Home Reverse Osmosis',
    short: 'Premium whole-property RO systems for exceptional water quality from every tap.',
    icon: '🔄',
    content: [
      'Whole home reverse osmosis is one of the highest levels of water treatment available. It can be an excellent solution for difficult well water, high dissolved solids, salt intrusion concerns, or homeowners who want premium water quality throughout the property.',
      'A whole home RO system must be engineered correctly. Pretreatment, storage, repressurization, flow rate, remineralization, and maintenance access all matter.',
      'Pura Vida approaches whole home RO as a custom-engineered solution built around testing, property layout, and long-term serviceability.'
    ]
  },
  {
    title: 'Well Water Treatment',
    short: 'Custom treatment for sulfur, iron, bacteria, sediment, tannins, odor, and staining.',
    icon: '🌿',
    content: [
      'Well water in South Florida can vary dramatically from one property to another. Common issues include sulfur odor, iron staining, manganese, tannins, bacteria concerns, sediment, hardness, low pH, and inconsistent water quality.',
      'The correct well water system may include sediment filtration, oxidation, carbon filtration, softening, UV disinfection, chemical injection, or reverse osmosis. The only way to know is to test first.',
      'Pura Vida Water Filtration designs well water systems around water chemistry and practical plumbing expertise.'
    ]
  },
  {
    title: 'Municipal Water Treatment',
    short: 'Improve city water taste, odor, chlorine, sediment, and overall comfort.',
    icon: '🏙️',
    content: [
      'Municipal water is treated before it reaches your home, but that does not always mean it tastes good, smells clean, or is ideal for your plumbing system. Many South Florida homeowners notice chlorine odor, dry skin, scale buildup, sediment, and taste concerns.',
      'A municipal water treatment system may include carbon filtration, sediment filtration, catalytic carbon, softening, and point-of-use reverse osmosis depending on the customer’s goals and water test results.',
      'Pura Vida designs municipal water systems for homeowners who want premium water quality without guessing or installing equipment they do not need.'
    ]
  },
  {
    title: 'Commercial Water Treatment',
    short: 'Custom water treatment for businesses, restaurants, rental properties, and developments.',
    icon: '🏢',
    content: [
      'Commercial properties depend on reliable water. Restaurants, rental developments, offices, shops, and facilities can all benefit from properly designed filtration and softening systems.',
      'For rental developments, softening and filtration can help reduce plumbing repairs, protect water heaters, improve tenant satisfaction, and preserve plumbing infrastructure.',
      'Pura Vida works with commercial and residential property owners to design systems that are practical, serviceable, and built for long-term performance.'
    ]
  }
]

function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {services.map((service) => (
        <details
          key={service.title}
          className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition"
        >
          <summary className="cursor-pointer list-none p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/10 text-[#12B5E5] flex items-center justify-center text-2xl shrink-0">
              {service.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-black text-[#071427]">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {service.short}
              </p>
            </div>

            <div className="text-3xl text-[#071427] group-open:rotate-90 transition">
              ›
            </div>
          </summary>

          <div className="px-6 pb-6 pl-6 md:pl-[6.5rem] space-y-4 text-slate-700 leading-relaxed">
            {service.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <a
              href="mailto:info@puravidafiltration.com"
              className="inline-flex mt-2 text-[#FF3F8E] font-black"
            >
              Contact us about {service.title} →
            </a>
          </div>
        </details>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#071427]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/pura-vida-logo.svg"
              alt="Pura Vida Water Filtration"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-white text-sm font-black uppercase tracking-[0.16em]">
            <a href="#" className="hover:text-[#12B5E5] transition">Home</a>
            <a href="#services" className="hover:text-[#12B5E5] transition">Services</a>
            <a href="#about" className="hover:text-[#12B5E5] transition">About Us</a>
            <a href="#areas" className="hover:text-[#12B5E5] transition">Service Areas</a>
            <a href="#contact" className="hover:text-[#12B5E5] transition">Contact</a>
          </nav>

          <a
            href="mailto:info@puravidafiltration.com"
            className="hidden md:inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-6 py-3 rounded-xl font-black transition shadow-lg"
          >
            Free Water Test
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden flex items-center">
        <img
          src="/matthew-family.jpg"
          alt="Matthew Henderson with his family on the beach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071427]/90 via-[#071427]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071427]/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.18em] text-[#FF3F8E] text-2xl md:text-3xl font-black mb-4">
              Local People.
            </p>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-6">
              Better Water<span className="text-[#FF3F8E]">.</span>
            </h1>

            <div className="w-24 h-1 bg-[#FF3F8E] mb-8" />

            <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-10">
              Pura Vida Water Filtration is the water treatment division of Home Choice Plumbing,
              providing custom-engineered water solutions throughout Palm Beach County,
              Martin County, and Okeechobee County.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@puravidafiltration.com"
                className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-8 py-4 rounded-xl font-black transition shadow-xl"
              >
                Schedule A Free Water Test
              </a>

              <a
                href="#services"
                className="bg-white/10 border border-[#12B5E5] text-white px-8 py-4 rounded-xl font-black hover:bg-[#12B5E5]/10 transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
          <aside className="rounded-[2rem] bg-gradient-to-br from-[#eefbff] to-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-5">
              We Test First. Always.
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-6">
              The Right Solution Starts With Testing
            </h2>

            <div className="w-16 h-1 bg-[#FF3F8E] mb-6" />

            <p className="text-slate-700 leading-relaxed mb-8">
              Every home’s water is different. We start with complimentary water testing
              to identify exactly what is in your water before designing a custom solution.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm font-bold text-slate-700 mb-8">
              {[
                'Free Water Testing',
                'Identify Hardness',
                'Contaminant Review',
                'Custom Recommendations',
                'Professional Install',
                'Ongoing Support'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#12B5E5] text-white flex items-center justify-center text-xs">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="mailto:info@puravidafiltration.com"
              className="inline-flex border border-[#12B5E5] text-[#071427] px-6 py-3 rounded-xl font-black hover:bg-[#12B5E5]/10 transition"
            >
              Schedule Your Free Test
            </a>
          </aside>

          <div>
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-3">
              Custom Water Treatment Solutions
            </h2>

            <p className="text-slate-600 mb-8">
              Click any service below to learn more about how we help with South Florida water.
            </p>

            <ServiceGrid />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-[#071427] text-white">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#FF3F8E] font-black text-sm mb-4">
            Our Story
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-12">
            A Division of Home Choice Plumbing
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 rounded-[2rem] bg-white/5 border border-white/10 p-8">
              <p className="text-slate-300 leading-relaxed mb-5">
                Pura Vida Water Filtration was created to bring advanced water science and professional
                plumbing expertise together under one mission: better water, custom designed,
                and installed the right way.
              </p>

              <p className="text-slate-300 leading-relaxed">
                As a division of Home Choice Plumbing, we are backed by years of experience,
                a commitment to craftsmanship, and the values of doing things with integrity.
              </p>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-white text-slate-900">
              <img
                src="/ryan-guthrie.jpg"
                alt="Ryan Guthrie"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#071427]">Ryan Guthrie</h3>
                <p className="text-[#FF3F8E] uppercase font-black text-sm mb-5">
                  Owner | Home Choice Plumbing
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Third-generation plumber, Florida native, husband, and family man focused on craftsmanship,
                  integrity, and exceptionally high standards.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-white text-slate-900">
              <img
                src="/matthew-family.jpg"
                alt="Matthew Henderson and family"
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#071427]">Matthew Henderson</h3>
                <p className="text-[#FF3F8E] uppercase font-black text-sm mb-5">
                  Branch Manager | Pura Vida Water Filtration
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Family man, Navy veteran, and primary plumber at Home Choice Plumbing.
                  Most importantly, Matthew’s faith in Jesus Christ is the foundation of his life and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">
            Service Areas
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#071427] mb-8">
            Proudly Serving South Florida
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Palm Beach County', 'Martin County', 'Okeechobee County'].map((area) => (
              <div
                key={area}
                className="rounded-[2rem] border border-slate-200 p-10 font-black text-2xl text-[#071427] shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-[#071427] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Schedule Your Free Water Testing
          </h2>

          <p className="text-slate-300 text-xl mb-10">
            Honest water testing. Custom solutions. Zero guessing.
          </p>

          <p className="text-3xl font-black mb-2">(772) 206-0820</p>
          <p className="text-xl text-slate-300 mb-10">info@puravidafiltration.com</p>

          <a
            href="mailto:info@puravidafiltration.com"
            className="inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-10 py-5 rounded-xl font-black transition shadow-xl"
          >
            Contact Pura Vida
          </a>
        </div>
      </section>
    </main>
  )
}