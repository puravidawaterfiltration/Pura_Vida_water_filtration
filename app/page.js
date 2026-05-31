
const youtubeUrl = 'https://www.youtube.com/@PuraVidaWaterFiltration'

const services = [
  {
    title: 'Whole Home Water Filtration',
    short: 'Carbon media and custom filtration for cleaner water at every tap.',
    icon: '💧',
    content: [
      'Whole home water filtration is designed to improve the quality of water throughout the entire property. Unlike water softening, filtration focuses on reducing contaminants, sediment, chemicals, unpleasant taste, odor, chlorine, chloramines, discoloration, and other compounds that affect how water smells, tastes, and feels.',
      'One of the most common filtration tools for South Florida municipal water is activated carbon media. Carbon filtration works through adsorption, meaning unwanted chemicals and compounds are attracted to and held within the carbon surface. This can be highly effective for reducing chlorine taste and odor, certain organic compounds, and many common municipal water concerns.',
      'For well water, filtration may require a different strategy. Depending on testing, a system may include sediment filtration, carbon media, catalytic carbon, oxidation, iron filtration, sulfur treatment, or other specialty media. This is why Pura Vida Water Filtration tests first instead of recommending off-the-shelf equipment.',
      'A properly designed whole-home filtration system can improve showers, laundry, drinking water quality, appliance protection, fixture appearance, and overall daily comfort. For homes in Palm Beach County, Martin County, and Okeechobee County, the right filtration setup depends on the water source, plumbing system, and actual water chemistry.'
    ]
  },
  {
    title: 'Water Softening',
    short: 'Ion exchange softening to reduce calcium, magnesium, and scale buildup.',
    icon: '🛡️',
    content: [
      'Water softening is different from filtration. A softener is not primarily designed to remove chlorine, odor, sediment, or contaminants. Its main job is to reduce hardness minerals, especially calcium and magnesium, that cause scale buildup inside plumbing systems.',
      'Traditional water softeners use a process called ion exchange. Inside the softener tank is a resin bed. As hard water passes through the resin, calcium and magnesium ions are exchanged for sodium or potassium ions. This reduces hardness and helps protect pipes, fixtures, water heaters, tankless heaters, valves, and appliances from mineral scale.',
      'Hard water is a major issue throughout South Florida because scale can reduce efficiency, restrict flow, damage fixtures, shorten water heater lifespan, and increase plumbing maintenance costs. For rental developments and commercial buildings, softening can also help lower long-term service calls by protecting plumbing infrastructure.',
      'Many homes benefit from both filtration and softening. Filtration targets contaminants and taste or odor concerns, while softening targets hardness and scale. Pura Vida designs systems based on testing so each property gets the right combination instead of generic equipment.'
    ]
  },
  {
    title: 'Whole Home Reverse Osmosis',
    short: 'Premium full-property RO for difficult water and high-end water quality.',
    icon: '🔄',
    content: [
      'Whole home reverse osmosis is one of the highest levels of water treatment available. It is often used when a property has difficult well water, high total dissolved solids, salt intrusion concerns, poor taste, or when the homeowner wants premium water quality throughout the entire house.',
      'Reverse osmosis works by forcing water through a semi-permeable membrane that separates water molecules from many dissolved minerals and contaminants. However, whole-home RO is not a simple plug-and-play product. It must be engineered correctly to protect the system and provide usable water flow for the entire home.',
      'A proper whole-home RO system may require pretreatment, sediment filtration, carbon filtration, anti-scale protection, storage tanks, repressurization, pumps, controls, and sometimes remineralization. If it is designed incorrectly, the system can create pressure issues, maintenance problems, or poor long-term performance.',
      'Pura Vida Water Filtration approaches whole-home reverse osmosis as a custom-engineered solution. We test the water, evaluate plumbing demand, review the property, and design around performance, reliability, and serviceability.'
    ]
  },
  {
    title: 'Undersink Reverse Osmosis',
    short: 'High-quality drinking water directly at the kitchen sink.',
    icon: '🚰',
    content: [
      'Undersink reverse osmosis is a great option for homeowners who want cleaner, better-tasting drinking water without relying on bottled water. These systems are typically installed below the kitchen sink and supply a dedicated faucet for drinking and cooking.',
      'For South Florida municipal water, undersink RO can help improve taste and reduce many common drinking water concerns. For well water, it may be part of a larger treatment strategy depending on the test results. Either way, the system should be selected based on actual water conditions.',
      'Undersink RO systems normally include pre-filters, a membrane, post-filter, storage tank, and dedicated faucet. Proper installation matters because pressure, drain connection, filter access, and maintenance planning all affect long-term performance.',
      'Pura Vida installs undersink RO systems cleanly and professionally so homeowners get convenient, high-quality drinking water with a system that is easy to service over time.'
    ]
  },
  {
    title: 'Well Water Treatment',
    short: 'Custom well systems for sulfur, iron, bacteria, sediment, tannins, and odor.',
    icon: '🌿',
    content: [
      'Well water in South Florida can vary dramatically from property to property. Some wells have sulfur odor, iron staining, manganese, sediment, hardness, tannins, low pH, bacteria concerns, or high dissolved solids. These problems cannot be solved correctly with guesswork.',
      'A proper well water system starts with testing. Depending on the results, treatment may include sediment filtration, carbon media, catalytic carbon, oxidation, air injection, chemical injection, softening, UV disinfection, reverse osmosis, or specialty media for iron, sulfur, tannins, or odor.',
      'The biggest mistake with well water is installing equipment before understanding the water chemistry. One property may need oxidation and filtration, while another may need softening, UV, or reverse osmosis. Similar symptoms can have different causes.',
      'Pura Vida Water Filtration designs well water treatment systems for South Florida homes, farms, estates, and commercial properties based on actual testing and professional plumbing knowledge.'
    ]
  },
  {
    title: 'Municipal Water Treatment',
    short: 'Improve city water affected by chlorine, chloramines, sediment, taste, and hardness.',
    icon: '🏙️',
    content: [
      'Municipal water is treated before it reaches your home, but that does not mean it is ideal for taste, odor, skin, plumbing, or appliances. Many South Florida homeowners notice chlorine smell, dry skin, hard water buildup, sediment, spotting, and poor taste.',
      'Municipal water treatment often uses carbon filtration to reduce chlorine, taste, and odor. Some areas may require catalytic carbon depending on disinfectants used. If hardness is present, a water softener may be added to protect plumbing and appliances from scale buildup.',
      'Filtration and softening are different tools. Carbon filtration improves water quality by reducing certain chemicals and contaminants, while ion exchange softening reduces hardness minerals. Many municipal water homes benefit from both technologies working together.',
      'Pura Vida Water Filtration tests municipal water first so we can design a clean, practical system that targets the actual problems in the home instead of overselling unnecessary equipment.'
    ]
  },
  {
    title: 'Commercial Water Treatment',
    short: 'Scalable filtration and softening for rental developments, restaurants, and businesses.',
    icon: '🏢',
    content: [
      'Commercial water treatment is about performance, reliability, and long-term operating cost. Restaurants, offices, rental developments, shops, and commercial facilities all depend on water that supports equipment, customers, tenants, and plumbing infrastructure.',
      'For rental developments, proper softening and filtration can help reduce plumbing repairs, protect water heaters, reduce fixture wear, improve tenant satisfaction, and help preserve the value of the property. Hard water scale and poor water quality can create repeated maintenance calls over time.',
      'Commercial systems may include carbon filtration, sediment filtration, water softening, reverse osmosis, UV, chemical feed, storage, repressurization, or specialty treatment depending on demand and testing. Sizing is critical because undersized equipment can cause pressure problems and poor performance.',
      'Pura Vida Water Filtration designs commercial systems around real usage, serviceability, and long-term reliability for South Florida properties.'
    ]
  }
]

function PalmIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-12 h-12 overflow-visible shrink-0">
      <path d="M35 66 C31 48 33 30 40 12" fill="none" stroke="#12B5E5" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M40 13 C27 13 14 18 6 29" fill="none" stroke="#FF3F8E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M40 12 C27 5 14 5 4 10" fill="none" stroke="#FF3F8E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M41 11 C48 2 58 0 68 5" fill="none" stroke="#FF3F8E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M41 13 C54 13 65 20 70 32" fill="none" stroke="#FF3F8E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M39 12 C36 3 31 -2 23 -6" fill="none" stroke="#FF3F8E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M21 64 C31 68 44 68 55 61" fill="none" stroke="#12B5E5" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  )
}

function Brand() {
  return (
    <a href="#" className="flex items-center gap-3 shrink-0">
      <div className="relative">
        <div className="absolute inset-0 blur-xl bg-[#12B5E5]/20 rounded-full" />
        <PalmIcon />
      </div>
      <div className="leading-none">
        <div className="text-[1.28rem] md:text-[1.7rem] font-black tracking-[0.12em]">
          <span className="text-[#12B5E5]">PURA</span>{" "}
          <span className="text-[#FF3F8E]">VIDA</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-[2px] w-8 bg-[#FF3F8E]" />
          <span className="text-[0.58rem] md:text-[0.66rem] uppercase tracking-[0.33em] text-[#12B5E5]">
            Water Filtration
          </span>
        </div>
      </div>
    </a>
  )
}

function Services() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {services.map((service) => (
        <details key={service.title} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition">
          <summary className="cursor-pointer list-none p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/10 text-[#12B5E5] flex items-center justify-center text-2xl shrink-0">
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-[#071427]">{service.title}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{service.short}</p>
            </div>
            <div className="text-3xl text-[#071427] group-open:rotate-90 transition">›</div>
          </summary>
          <div className="px-6 pb-6 pl-6 md:pl-[6.5rem] space-y-4 text-slate-700 leading-relaxed">
            {service.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a href="mailto:info@puravidafiltration.com" className="inline-flex mt-2 text-[#FF3F8E] font-black">
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
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#061225]/82 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
          <div className="px-5 md:px-7 py-3 flex items-center justify-between gap-8">
            <Brand />
            <nav className="hidden lg:flex items-center gap-2 text-white text-[0.78rem] font-bold uppercase tracking-[0.16em]">
              {[['Home', '#'], ['Services', '#services'], ['About Us', '#about'], ['Service Areas', '#areas'], ['Contact', '#contact']].map(([label, href]) => (
                <a key={label} href={href} className="relative px-4 py-3 rounded-xl text-slate-200 hover:text-white transition group">
                  {label}<span className="absolute left-4 right-4 bottom-2 h-[2px] scale-x-0 bg-gradient-to-r from-[#12B5E5] to-[#FF3F8E] group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/15 text-white hover:text-[#FF3F8E] hover:border-[#FF3F8E] flex items-center justify-center transition" aria-label="Pura Vida Water Filtration YouTube">▶</a>
              <a href="mailto:info@puravidafiltration.com" className="inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-5 py-3 rounded-xl font-black transition shadow-[0_0_25px_rgba(255,63,142,0.35)]">Free Water Test</a>
            </div>
            <a href="mailto:info@puravidafiltration.com" className="md:hidden text-white text-sm font-black bg-[#FF3F8E] px-4 py-3 rounded-xl">Contact</a>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden flex items-center">
        <img src="/matthew-family.jpg" alt="Matthew Henderson with his family on the beach" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071427]/90 via-[#071427]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071427]/45 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-36 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.18em] text-[#FF3F8E] text-2xl md:text-3xl font-black mb-4">Local People.</p>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-6">Better Water<span className="text-[#FF3F8E]">.</span></h1>
            <div className="w-24 h-1 bg-[#FF3F8E] mb-8" />
            <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-10">Pura Vida Water Filtration is the water treatment division of Home Choice Plumbing, providing custom-engineered water solutions throughout Palm Beach County, Martin County, and Okeechobee County.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@puravidafiltration.com" className="bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-8 py-4 rounded-xl font-black transition shadow-xl">Schedule A Free Water Test</a>
              <a href="#services" className="bg-white/10 border border-[#12B5E5] text-white px-8 py-4 rounded-xl font-black hover:bg-[#12B5E5]/10 transition">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
          <aside className="rounded-[2rem] bg-gradient-to-br from-[#eefbff] to-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-5">We Test First. Always.</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-6">Filtration and Softening Are Not The Same Thing</h2>
            <div className="w-16 h-1 bg-[#FF3F8E] mb-6" />
            <p className="text-slate-700 leading-relaxed mb-5">Filtration removes or reduces contaminants, sediment, chlorine, odor, and unwanted compounds. Carbon media is commonly used to improve taste and smell by adsorbing chemicals like chlorine.</p>
            <p className="text-slate-700 leading-relaxed mb-8">Softening uses ion exchange resin to reduce hardness minerals like calcium and magnesium. That protects water heaters, fixtures, and plumbing from scale buildup.</p>
            <a href="mailto:info@puravidafiltration.com" className="inline-flex border border-[#12B5E5] text-[#071427] px-6 py-3 rounded-xl font-black hover:bg-[#12B5E5]/10 transition">Schedule Your Free Test</a>
          </aside>
          <div>
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-3">Custom Water Treatment Solutions</h2>
            <p className="text-slate-600 mb-8">Click any service below to learn more about the different technologies used to solve South Florida water problems.</p>
            <Services />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-[#071427] text-white">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#FF3F8E] font-black text-sm mb-4">Our Story</p>
          <h2 className="text-4xl md:text-6xl font-black mb-12">A Division of Home Choice Plumbing</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 rounded-[2rem] bg-white/5 border border-white/10 p-8">
              <p className="text-slate-300 leading-relaxed mb-5">Pura Vida Water Filtration was created to bring advanced water science and professional plumbing expertise together under one mission: better water, custom designed, and installed the right way.</p>
              <p className="text-slate-300 leading-relaxed">As a division of Home Choice Plumbing, we are backed by years of experience, a commitment to craftsmanship, and the values of doing things with integrity.</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-white text-slate-900">
              <img src="/ryan-guthrie.jpg" alt="Ryan Guthrie" className="w-full h-72 object-cover" />
              <div className="p-8"><h3 className="text-3xl font-black text-[#071427]">Ryan Guthrie</h3><p className="text-[#FF3F8E] uppercase font-black text-sm mb-5">Owner | Home Choice Plumbing</p><p className="text-slate-700 leading-relaxed">Third-generation plumber, Florida native, husband, and family man focused on craftsmanship, integrity, and exceptionally high standards.</p></div>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-white text-slate-900">
              <img src="/matthew-family.jpg" alt="Matthew Henderson and family" className="w-full h-72 object-cover object-center" />
              <div className="p-8"><h3 className="text-3xl font-black text-[#071427]">Matthew Henderson</h3><p className="text-[#FF3F8E] uppercase font-black text-sm mb-5">Branch Manager | Pura Vida Water Filtration</p><p className="text-slate-700 leading-relaxed">Family man, Navy veteran, and primary plumber at Home Choice Plumbing. Most importantly, Matthew’s faith in Jesus Christ is the foundation of his life and service.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Service Areas</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#071427] mb-8">Proudly Serving South Florida</h2>
          <div className="grid md:grid-cols-3 gap-8">{['Palm Beach County','Martin County','Okeechobee County'].map((area) => <div key={area} className="rounded-[2rem] border border-slate-200 p-10 font-black text-2xl text-[#071427] shadow-sm">{area}</div>)}</div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-[#071427] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Schedule Your Free Water Testing</h2>
          <p className="text-slate-300 text-xl mb-10">Honest water testing. Custom solutions. Zero guessing.</p>
          <p className="text-3xl font-black mb-2">(772) 206-0820</p>
          <p className="text-xl text-slate-300 mb-10">info@puravidafiltration.com</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@puravidafiltration.com" className="inline-flex bg-[#FF3F8E] hover:bg-[#ff5ca3] text-white px-10 py-5 rounded-xl font-black transition shadow-xl">Contact Pura Vida</a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#12B5E5] text-white hover:bg-[#12B5E5]/10 px-10 py-5 rounded-xl font-black transition">Visit Our YouTube</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#030b1d] text-slate-400 px-8 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Brand />
          <div className="text-center md:text-right">
            <p>Premium Residential & Commercial Water Treatment</p>
            <p>Palm Beach County • Martin County • Okeechobee County</p>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex mt-3 text-[#FF3F8E] hover:text-[#12B5E5] font-bold transition">YouTube: @PuraVidaWaterFiltration</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
