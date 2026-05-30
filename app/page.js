const services = [
  {
    title: 'Whole Home Water Filtration',
    summary: 'Cleaner water throughout the entire home, customized to your exact water chemistry.',
    icon: '💧',
    content: [
      'Whole home water filtration in South Florida is not a one-size-fits-all service. Homes in Palm Beach County, Martin County, and Okeechobee County can experience very different water conditions depending on whether the property is on municipal water, private well water, or a blended system. A quality whole home filtration system should be designed around the actual water entering the property, not a generic filter package.',
      'Pura Vida Water Filtration starts with water testing so we can understand chlorine levels, sediment, odor, hardness, iron, sulfur, staining, and other water quality concerns before recommending equipment. The goal is to protect the entire plumbing system, improve taste and odor, reduce exposure to unwanted contaminants, and help fixtures and appliances last longer.',
      'For South Florida homes, whole home filtration can improve daily water quality at every tap. That means better showers, better laundry, cleaner fixtures, and more confidence in the water your family uses every day. We design systems for performance, serviceability, and long-term reliability.'
    ]
  },
  {
    title: 'Water Softening',
    summary: 'Reduce scale buildup, protect water heaters, and improve plumbing performance.',
    icon: '🛡️',
    content: [
      'Hard water is a major issue for many South Florida properties. Even when water looks clear, minerals can create scale buildup inside fixtures, valves, water heaters, tankless heaters, shower heads, appliances, and piping. Over time, hardness can reduce efficiency, increase maintenance calls, and shorten the lifespan of expensive plumbing equipment.',
      'A properly sized water softener helps reduce hardness minerals before they damage the plumbing system. For homeowners and rental developments, this can mean fewer repairs, better water heater performance, cleaner fixtures, improved soap lather, and less spotting on glass, tile, and dishes.',
      'Pura Vida does not guess on softener sizing. We test the water, evaluate household demand, review plumbing layout, and recommend a system sized for real-world usage. The result is a cleaner, more reliable water system designed specifically for the property.'
    ]
  },
  {
    title: 'Whole Home Reverse Osmosis',
    summary: 'Premium full-property RO systems for the highest level of water quality.',
    icon: '🔄',
    content: [
      'Whole home reverse osmosis is one of the most premium water treatment options available. It is especially valuable for properties with difficult well water, high dissolved solids, salt intrusion concerns, or homeowners who want exceptional water quality throughout the entire property.',
      'South Florida water conditions can vary dramatically from one neighborhood to the next. A whole home RO system must be engineered correctly, including pretreatment, storage, repressurization, flow rate, remineralization when needed, and long-term maintenance planning.',
      'Pura Vida Water Filtration approaches whole home RO as a custom-engineered system, not an off-the-shelf product. We evaluate the property, test the water, and design a solution built for performance, reliability, and serviceability.'
    ]
  },
  {
    title: 'Undersink Reverse Osmosis',
    summary: 'High-quality drinking water directly at the kitchen sink.',
    icon: '🚰',
    content: [
      'Undersink reverse osmosis systems are an excellent option for homeowners who want clean, great-tasting drinking water without relying on bottled water. These compact systems are typically installed under the kitchen sink and supply a dedicated drinking water faucet.',
      'For municipal water customers, undersink RO can improve taste and reduce many common water quality concerns. For well water customers, RO may be part of a larger treatment strategy depending on testing results. The key is making sure the system is appropriate for the water source and properly maintained.',
      'Pura Vida installs undersink RO systems with a focus on clean installation, proper pressure, filter access, and long-term usability. We also help homeowners understand maintenance needs so the system continues performing the way it should.'
    ]
  },
  {
    title: 'Well Water Treatment',
    summary: 'Custom solutions for sulfur, iron, bacteria, sediment, tannins, odor, and staining.',
    icon: '🌿',
    content: [
      'Well water in South Florida can be excellent, but it can also be challenging. Common problems include sulfur odor, iron staining, manganese, sediment, tannins, bacteria concerns, hardness, low pH, and inconsistent water quality. These issues cannot be solved correctly without testing.',
      'A proper well water system may include sediment filtration, oxidation, carbon filtration, softening, UV disinfection, chemical injection, reverse osmosis, or other treatment methods depending on the water analysis. Guessing can lead to poor results, wasted money, and equipment that does not solve the actual problem.',
      'Pura Vida Water Filtration builds well water systems around testing, science, and practical plumbing knowledge. We design solutions for homes, estates, farms, and commercial properties throughout Palm Beach County, Martin County, and Okeechobee County.'
    ]
  },
  {
    title: 'Municipal Water Treatment',
    summary: 'Improve city water taste, odor, chlorine, sediment, and overall quality.',
    icon: '🏙️',
    content: [
      'Municipal water is treated before it reaches your home, but that does not always mean it tastes good, smells clean, or is ideal for your plumbing system. Many South Florida homeowners notice chlorine odor, dry skin, scale buildup, sediment, and concerns about aging infrastructure or disinfectant byproducts.',
      'Municipal water treatment can include carbon filtration, sediment filtration, catalytic carbon, softening, and point-of-use reverse osmosis depending on the customer’s goals and water test results. The right system can improve taste, reduce odor, and protect fixtures and appliances.',
      'Pura Vida designs municipal water solutions for families who want premium water without generic equipment. We test first, explain the results, and design a system that fits the home and budget.'
    ]
  },
  {
    title: 'Commercial Water Treatment',
    summary: 'Scalable water solutions for businesses, restaurants, offices, and developments.',
    icon: '🏢',
    content: [
      'Commercial properties depend on reliable water. Restaurants, rental developments, offices, shops, and facilities can all benefit from properly designed filtration and softening systems. Better water can reduce equipment maintenance, improve customer experience, protect fixtures, and lower long-term operating costs.',
      'For multi-family and rental developments, softening and filtration can help reduce plumbing repair frequency, protect water heaters, improve tenant satisfaction, and preserve the property’s plumbing infrastructure. This is especially important in South Florida where hardness and water quality issues can create recurring maintenance problems.',
      'Pura Vida Water Filtration works with commercial and residential property owners to design water treatment solutions that are practical, serviceable, and built around long-term performance.'
    ]
  },
  {
    title: 'Free Water Testing',
    summary: 'The first step in every recommendation. No guessing, just data.',
    icon: '🧪',
    content: [
      'Free water testing is the foundation of our process. We believe water treatment should be based on data, not pressure sales or generic filter packages. Every property has different water conditions, and the only responsible way to recommend a system is to understand the water first.',
      'Testing helps identify hardness, chlorine, iron, sulfur odor, sediment, pH concerns, dissolved solids, and other issues that can affect system design. It also helps homeowners understand what they actually need and what they do not need.',
      'At Pura Vida Water Filtration, testing is how we eliminate guesswork. Our goal is simple: provide honest recommendations, custom-engineered systems, and long-term solutions for South Florida homes and businesses.'
    ]
  }
]

function ServiceAccordion() {
  return (
    <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm">
      {services.map((service) => (
        <details key={service.title} className="group">
          <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start gap-5 hover:bg-slate-50 transition">
            <div className="text-3xl">{service.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mt-2">{service.summary}</p>
            </div>
            <div className="text-2xl text-[#12B5E5] group-open:rotate-45 transition">+</div>
          </summary>
          <div className="px-6 md:px-8 pb-8 md:ml-14 space-y-5 text-slate-700 leading-relaxed">
            {service.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a href="mailto:info@puravidafiltration.com" className="inline-flex mt-3 bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-6 py-3 rounded-xl font-bold transition">
              Ask About {service.title}
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
      <header className="sticky top-0 z-50 bg-[#030b1d]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <img src="/pura-vida-logo.svg" alt="Pura Vida Water Filtration" className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-white">
            <a href="#services" className="hover:text-[#12B5E5]">Services</a>
            <a href="#about" className="hover:text-[#12B5E5]">About</a>
            <a href="#areas" className="hover:text-[#12B5E5]">Service Areas</a>
            <a href="#contact" className="hover:text-[#12B5E5]">Contact</a>
          </nav>
          <div className="hidden lg:block text-right text-[#12B5E5] font-bold">
            <p>(772) 206-0820</p>
            <p className="text-sm">info@puravidafiltration.com</p>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 z-10" />
        <img src="/matthew-family.jpg" alt="Matthew Henderson with family on the beach" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="relative z-20 max-w-7xl mx-auto px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-[#FF3F8E] text-4xl md:text-5xl italic mb-4">Local People.</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#071b2d] leading-tight mb-8">
              Better Water<span className="text-[#FF3F8E]">.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-10">
              Pura Vida Water Filtration is the water treatment division of Home Choice Plumbing,
              providing custom-engineered water solutions throughout Palm Beach County,
              Martin County, and Okeechobee County.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@puravidafiltration.com" className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-8 py-4 rounded-xl font-black transition">Schedule A Free Water Test</a>
              <a href="#services" className="border-2 border-[#12B5E5] text-[#071b2d] px-8 py-4 rounded-xl font-black hover:bg-[#12B5E5]/10 transition">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#eefbff] to-white border border-slate-200 p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-5">We Test First. Always.</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] leading-tight mb-6">The Right Solution Starts With Testing</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Every home’s water is different. We start with complimentary water testing to identify what is actually in your water before designing a custom solution for your home or business.
            </p>
            <ul className="space-y-4 text-slate-800">
              {['Free Water Testing & Consultation', 'Identify Contaminants & Hardness', 'Custom System Recommendations', 'Professional Installation', 'Ongoing Support & Service'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#12B5E5] text-white flex items-center justify-center text-sm">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div id="services">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071b2d] leading-tight mb-4">Custom Water Treatment Solutions</h2>
            <p className="text-slate-600 mb-8">Click any service below to learn more. These expanded sections are written for both customers and search engines.</p>
            <ServiceAccordion />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-1">
              <p className="uppercase tracking-[0.25em] text-[#FF3F8E] font-black text-sm mb-4">Our Story</p>
              <h2 className="text-4xl font-black text-[#071b2d] leading-tight mb-6">A Division of Home Choice Plumbing</h2>
              <p className="text-slate-700 leading-relaxed mb-5">Pura Vida Water Filtration was created to bring advanced water science and professional plumbing expertise together under one mission: to provide the highest quality water treatment solutions for South Florida homes and businesses.</p>
              <p className="text-slate-700 leading-relaxed mb-8">As a division of Home Choice Plumbing, we are backed by years of experience, craftsmanship, and the values of doing things the right way.</p>
              <div className="rounded-2xl bg-white p-6 border border-slate-200 text-center shadow-sm">
                <p className="text-2xl font-black text-[#071b2d]">HOME CHOICE</p>
                <p className="tracking-[0.35em] text-[#071b2d] text-sm">PLUMBING</p>
                <p className="text-[#12B5E5] font-bold mt-4">Proudly Serving South Florida</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <img src="/ryan-guthrie.jpg" alt="Ryan Guthrie" className="w-full h-72 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#071b2d]">Ryan Guthrie</h3>
                <p className="text-[#FF3F8E] font-black uppercase text-sm mt-2 mb-5">Owner | Home Choice Plumbing</p>
                <p className="text-slate-700 leading-relaxed mb-4">Ryan is a third-generation plumber, Florida native, husband, and family man. He built Home Choice Plumbing around craftsmanship, integrity, and exceptionally high standards.</p>
                <p className="text-slate-700 leading-relaxed">His belief is simple: do the job correctly, stand behind the work, and treat every customer like a neighbor.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
              <img src="/matthew-family.jpg" alt="Matthew Henderson and family" className="w-full h-72 object-cover object-center" />
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
              <div key={area} className="rounded-2xl border border-slate-200 p-8 font-black text-xl text-[#071b2d] shadow-sm">{area}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030b1d] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black mb-12">Why Families Choose Pura Vida</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              ['Better Water', 'Cleaner, safer, better tasting water for your family every day.'],
              ['Expert Testing', 'We test first so we can recommend the right solution.'],
              ['Professional Installation', 'Licensed plumbing experts with attention to detail.'],
              ['Family Owned', 'Local, family-owned values and honest service.'],
              ['Faith Driven', 'Our faith in Jesus Christ guides how we serve our community.'],
              ['Local & Reliable', 'Proudly serving Palm Beach, Martin, and Okeechobee Counties.']
            ].map(([title, text]) => (
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