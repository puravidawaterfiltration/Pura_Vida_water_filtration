const services = [
  {
    title: 'Whole Home Water Filtration',
    eyebrow: 'Cleaner Water At Every Tap',
    summary: 'A custom whole-home system designed around your actual water test results.',
    icon: '💧',
    content: [
      'Whole home water filtration in South Florida should never be a one-size-fits-all product. Homes in Palm Beach County, Martin County, and Okeechobee County can have very different water conditions depending on the water source, local infrastructure, well depth, plumbing layout, and household demand.',
      'Pura Vida Water Filtration starts with real water testing so we can identify chlorine, hardness, sediment, odor, iron, sulfur, staining, and other concerns before recommending equipment. This gives homeowners a system designed around their water instead of a generic filter package.',
      'A properly designed whole-home filtration system can improve taste and odor, protect fixtures, reduce buildup, support appliance longevity, and give your family better water throughout the entire home.'
    ]
  },
  {
    title: 'Water Softening',
    eyebrow: 'Protect Plumbing & Water Heaters',
    summary: 'Reduce scale buildup and extend the life of plumbing fixtures, appliances, and heaters.',
    icon: '🛡️',
    content: [
      'Hard water is one of the most common causes of scale buildup in South Florida plumbing systems. Even when water appears clear, hardness minerals can collect inside water heaters, tankless heaters, valves, fixtures, shower heads, appliances, and piping.',
      'For homeowners, this can mean more repairs, reduced efficiency, spotting, poor soap performance, and shorter equipment lifespan. For rental developments and commercial properties, hard water can increase service calls and accelerate plumbing maintenance costs.',
      'Pura Vida sizes softening systems based on testing, plumbing layout, and real household demand. We do not guess. The result is a system built to protect your home and perform reliably long term.'
    ]
  },
  {
    title: 'Whole Home Reverse Osmosis',
    eyebrow: 'Premium Water Quality',
    summary: 'Advanced full-property RO systems for difficult water and high-end homes.',
    icon: '🔄',
    content: [
      'Whole home reverse osmosis is one of the highest levels of water treatment available. It can be an excellent solution for difficult well water, high dissolved solids, salt intrusion concerns, or homeowners who want premium water quality throughout the property.',
      'A whole-home RO system must be engineered correctly. Pretreatment, storage, repressurization, flow rate, remineralization, and maintenance access all matter. A poorly designed RO system can cause frustration. A properly designed one can transform the water experience.',
      'Pura Vida approaches whole-home RO as a custom-engineered solution. We test the water, evaluate the home, and design a system for performance, reliability, and serviceability.'
    ]
  },
  {
    title: 'Undersink Reverse Osmosis',
    eyebrow: 'Better Drinking Water',
    summary: 'Compact high-performance RO drinking systems installed cleanly under the sink.',
    icon: '🚰',
    content: [
      'Undersink reverse osmosis systems are a practical option for homeowners who want clean, great-tasting drinking water directly at the kitchen sink. These systems reduce reliance on bottled water and provide a dedicated faucet for drinking and cooking.',
      'For municipal water customers, undersink RO can improve taste and reduce many common water quality concerns. For well water customers, it may be part of a broader treatment strategy depending on test results.',
      'Pura Vida installs undersink systems with attention to pressure, filter access, clean routing, and maintenance planning so the system remains easy to use and service.'
    ]
  },
  {
    title: 'Well Water Treatment',
    eyebrow: 'Built From Test Results',
    summary: 'Custom treatment for sulfur, iron, bacteria, sediment, tannins, odor, and staining.',
    icon: '🌿',
    content: [
      'Well water in South Florida can vary dramatically from one property to another. Common issues include sulfur odor, iron staining, manganese, tannins, bacteria concerns, sediment, hardness, low pH, and inconsistent quality.',
      'The correct well water system may include sediment filtration, oxidation, carbon filtration, softening, UV disinfection, chemical injection, or reverse osmosis. The only way to know is to test first.',
      'Pura Vida Water Filtration designs well water systems around water chemistry and practical plumbing expertise, serving homes, estates, farms, and commercial properties throughout our service area.'
    ]
  },
  {
    title: 'Municipal Water Treatment',
    eyebrow: 'City Water, Improved',
    summary: 'Target chlorine, taste, odor, sediment, hardness, and overall comfort.',
    icon: '🏙️',
    content: [
      'Municipal water is treated before it reaches your home, but that does not always mean it tastes good, smells clean, or is ideal for your plumbing system. Many South Florida homeowners notice chlorine odor, dry skin, scale buildup, sediment, and taste concerns.',
      'A municipal water treatment system may include carbon filtration, sediment filtration, catalytic carbon, softening, and point-of-use reverse osmosis depending on the customer’s goals and water test results.',
      'Pura Vida designs municipal water systems for homeowners who want premium water quality without guessing or installing equipment they do not need.'
    ]
  },
  {
    title: 'Commercial Water Treatment',
    eyebrow: 'Performance For Properties',
    summary: 'Scalable systems for restaurants, developments, offices, and commercial buildings.',
    icon: '🏢',
    content: [
      'Commercial properties depend on reliable water. Restaurants, rental developments, offices, shops, and facilities can all benefit from properly designed filtration and softening systems.',
      'For rental developments, softening and filtration can help reduce plumbing repairs, protect water heaters, improve tenant satisfaction, and preserve plumbing infrastructure. Better water can directly support lower long-term operating costs.',
      'Pura Vida works with commercial and residential property owners to design systems that are practical, serviceable, and built for long-term performance.'
    ]
  },
  {
    title: 'Free Water Testing',
    eyebrow: 'Zero Guessing',
    summary: 'The first step in every recommendation. Real testing. Real answers.',
    icon: '🧪',
    content: [
      'Free water testing is the foundation of our process. We believe water treatment should be based on data, not pressure sales, assumptions, or generic filter packages.',
      'Testing helps identify hardness, chlorine, iron, sulfur odor, sediment, pH concerns, dissolved solids, and other issues that affect system design. It also helps homeowners understand what they actually need and what they do not need.',
      'At Pura Vida Water Filtration, testing is how we eliminate guesswork and build honest, custom-engineered water solutions for South Florida homes and businesses.'
    ]
  }
]

function ServiceAccordion() {
  return (
    <div className="space-y-5">
      {services.map((service) => (
        <details key={service.title} className="group rounded-[1.75rem] border border-slate-200 bg-white shadow-sm overflow-hidden open:shadow-xl transition">
          <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start gap-5 hover:bg-slate-50 transition">
            <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/10 flex items-center justify-center text-2xl shrink-0">{service.icon}</div>
            <div className="flex-1">
              <p className="uppercase tracking-[0.25em] text-[#FF3F8E] text-xs font-black mb-2">{service.eyebrow}</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#071b2d] leading-tight">{service.title}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{service.summary}</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-2xl text-[#12B5E5] group-open:rotate-45 transition shrink-0">+</div>
          </summary>
          <div className="px-6 md:px-8 pb-8 md:ml-[4.5rem] space-y-5 text-slate-700 leading-relaxed">
            {service.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a href="mailto:info@puravidafiltration.com" className="inline-flex mt-3 bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-6 py-3 rounded-xl font-black transition">Ask About {service.title}</a>
          </div>
        </details>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-[#030b1d]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <img src="/pura-vida-logo.svg" alt="Pura Vida Water Filtration" className="h-14 md:h-16 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-wider text-white">
            <a href="#services" className="hover:text-[#12B5E5] transition">Services</a>
            <a href="#about" className="hover:text-[#12B5E5] transition">About</a>
            <a href="#areas" className="hover:text-[#12B5E5] transition">Areas</a>
            <a href="#contact" className="hover:text-[#12B5E5] transition">Contact</a>
          </nav>
          <a href="mailto:info@puravidafiltration.com" className="hidden lg:inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-5 py-3 rounded-xl font-black transition">Free Water Test</a>
        </div>
      </header>

      <section className="relative overflow-hidden min-h-[720px] flex items-center bg-[#071b2d]">
        <img src="/matthew-family.jpg" alt="Matthew Henderson with family on the beach" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/75 to-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(18,181,229,0.18),transparent_35%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-[#FF3F8E] text-4xl md:text-6xl italic mb-4">Local People.</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#071b2d] leading-tight mb-8">Better Water<span className="text-[#FF3F8E]">.</span></h1>
            <p className="uppercase tracking-[0.28em] text-[#12B5E5] text-sm font-black mb-5">Premium South Florida Water Treatment</p>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-10">
              Pura Vida Water Filtration is the water treatment division of Home Choice Plumbing, providing custom-engineered water solutions throughout Palm Beach County, Martin County, and Okeechobee County.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@puravidafiltration.com" className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-8 py-4 rounded-xl font-black transition shadow-xl">Schedule A Free Water Test</a>
              <a href="#services" className="bg-white/80 border-2 border-[#12B5E5] text-[#071b2d] px-8 py-4 rounded-xl font-black hover:bg-[#12B5E5]/10 transition">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#030b1d] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[['Zero Guessing', 'Every recommendation starts with real water testing and analysis.'], ['Custom Systems', 'Designed for your home, water source, plumbing, and long-term goals.'], ['Plumbing Expertise', 'Backed by Home Choice Plumbing and real field experience.']].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
              <div className="w-12 h-12 rounded-2xl bg-[#12B5E5]/15 flex items-center justify-center text-[#12B5E5] mb-6">✓</div>
              <h2 className="text-2xl font-black mb-3">{title}</h2>
              <p className="text-slate-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <aside className="lg:sticky lg:top-32 rounded-[2rem] bg-gradient-to-br from-[#eefbff] to-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-5">We Test First. Always.</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] leading-tight mb-6">The Right Solution Starts With Testing</h2>
            <p className="text-slate-700 leading-relaxed mb-8">Every home’s water is different. We start with complimentary water testing to identify what is actually in your water before designing a custom solution for your home or business.</p>
            <ul className="space-y-4 text-slate-800">
              {['Free Water Testing & Consultation', 'Identify Contaminants & Hardness', 'Custom System Recommendations', 'Professional Installation', 'Ongoing Support & Service'].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-[#12B5E5] text-white flex items-center justify-center text-sm">✓</span>{item}</li>
              ))}
            </ul>
          </aside>
          <div id="services">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] leading-tight mb-4">Custom Water Treatment Solutions</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">Click any service below to learn more. These expanded sections help customers understand exactly why custom water treatment matters in South Florida.</p>
            <ServiceAccordion />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.25em] text-[#FF3F8E] font-black text-sm mb-4">About Pura Vida</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#071b2d] leading-tight mb-6">A Division of Home Choice Plumbing</h2>
            <p className="text-lg text-slate-700 leading-relaxed">Pura Vida Water Filtration was created to bring advanced water science and professional plumbing expertise together under one mission: better water, custom designed, and installed the right way.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="rounded-[2rem] bg-[#030b1d] text-white p-8 md:p-10 shadow-xl">
              <p className="text-[#12B5E5] font-black uppercase tracking-[0.25em] text-sm mb-6">Our Foundation</p>
              <h3 className="text-3xl font-black mb-6">Built On Craftsmanship, Integrity & Service</h3>
              <p className="text-slate-300 leading-relaxed mb-5">As a division of Home Choice Plumbing, Pura Vida is backed by real plumbing experience, high standards, and the values of doing things the right way.</p>
              <p className="text-slate-300 leading-relaxed">We are not here to sell generic filters. We are here to test, educate, design, install, and stand behind systems that make sense for each property.</p>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <img src="/ryan-guthrie.jpg" alt="Ryan Guthrie" className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#071b2d]">Ryan Guthrie</h3>
                <p className="text-[#FF3F8E] font-black uppercase text-sm mt-2 mb-5">Owner | Home Choice Plumbing</p>
                <p className="text-slate-700 leading-relaxed mb-4">Ryan is a third-generation plumber, Florida native, husband, and family man. He built Home Choice Plumbing around craftsmanship, integrity, and exceptionally high standards.</p>
                <p className="text-slate-700 leading-relaxed">His belief is simple: do the job correctly, stand behind the work, and treat every customer like a neighbor.</p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <img src="/matthew-family.jpg" alt="Matthew Henderson and family" className="w-full h-80 object-cover object-center" />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#071b2d]">Matthew Henderson</h3>
                <p className="text-[#FF3F8E] font-black uppercase text-sm mt-2 mb-5">Branch Manager | Pura Vida Water Filtration</p>
                <p className="text-slate-700 leading-relaxed mb-4">Matthew is a family man, Navy veteran, and primary plumber at Home Choice Plumbing. He leads Pura Vida’s water treatment division with a heart for service, education, and excellence.</p>
                <p className="text-slate-700 leading-relaxed">Most importantly, Matthew’s faith in Jesus Christ is the foundation of his life. He is passionate about discipling young men, strengthening families, and serving his community with humility and purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Service Areas</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] mb-8">Local Water Solutions For South Florida</h2>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-10">We serve residential and commercial customers throughout Palm Beach County, Martin County, and Okeechobee County with custom water treatment solutions for both municipal and well water.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {['Palm Beach County', 'Martin County', 'Okeechobee County'].map((area) => (
              <div key={area} className="rounded-2xl border border-slate-200 p-8 font-black text-xl text-[#071b2d] shadow-sm hover:shadow-xl transition">{area}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030b1d] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-12">Why Families Choose Pura Vida</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[['Better Water', 'Cleaner, better tasting water for your family every day.'], ['Expert Testing', 'We test first so we can recommend the right solution.'], ['Professional Install', 'Plumbing experts with attention to detail.'], ['Family Owned', 'Local, family-owned values and honest service.'], ['Faith Driven', 'Our faith in Jesus Christ guides how we serve.'], ['Local & Reliable', 'Serving Palm Beach, Martin, and Okeechobee Counties.']].map(([title, text]) => (
              <div key={title} className="border-white/10 lg:border-l first:border-l-0 px-4">
                <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/15 mx-auto mb-4 flex items-center justify-center text-[#12B5E5] text-2xl">✓</div>
                <h3 className="font-black text-[#12B5E5] mb-3">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#FF3F8E] font-black text-sm mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] mb-6">Schedule Your Free Water Testing</h2>
          <p className="text-slate-700 text-lg mb-8">Ready for a custom water solution built around real testing and science?</p>
          <p className="text-2xl font-black text-[#071b2d] mb-2">(772) 206-0820</p>
          <p className="text-xl text-slate-700 mb-10">info@puravidafiltration.com</p>
          <a href="mailto:info@puravidafiltration.com" className="inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-10 py-5 rounded-2xl font-black transition shadow-xl">Contact Pura Vida</a>
        </div>
      </section>

      <footer className="bg-[#030b1d] text-slate-400 px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/pura-vida-logo.svg" alt="Pura Vida Water Filtration" className="h-16 w-auto" />
          <p className="text-center md:text-right">Premium Residential & Commercial Water Treatment<br />Palm Beach County • Martin County • Okeechobee County</p>
        </div>
      </footer>
    </main>
  )
}