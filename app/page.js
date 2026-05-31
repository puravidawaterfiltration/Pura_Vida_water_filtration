
const youtubeUrl = 'https://www.youtube.com/@PuraVidaWaterFiltration'

const services = [
  ['Whole Home Water Filtration', 'Remove chlorine, sediment, odor, and contaminants throughout the entire home.', '💧'],
  ['Water Softening', 'Reduce hardness, scale buildup, and wear on water heaters, fixtures, and plumbing.', '🛡️'],
  ['Whole Home Reverse Osmosis', 'Premium whole-property RO systems for exceptional water quality from every tap.', '🔄'],
  ['Well Water Treatment', 'Custom treatment for sulfur, iron, bacteria, sediment, tannins, odor, and staining.', '🌿'],
  ['Municipal Water Treatment', 'Improve city water taste, odor, chlorine, sediment, and overall comfort.', '🏙️'],
  ['Commercial Water Treatment', 'Custom water treatment for businesses, restaurants, rental properties, and developments.', '🏢']
]

function PalmIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-11 h-11 overflow-visible shrink-0">
      <path d="M31 61 C29 45 30 30 36 16" fill="none" stroke="#12B5E5" strokeWidth="4" strokeLinecap="round"/>
      <path d="M34 17 C22 16 12 20 5 29" fill="none" stroke="#FF3F8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M35 15 C23 8 13 7 4 11" fill="none" stroke="#FF3F8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 14 C41 5 48 1 59 3" fill="none" stroke="#FF3F8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 16 C49 15 58 21 63 31" fill="none" stroke="#FF3F8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M22 58 C30 61 40 61 49 56" fill="none" stroke="#12B5E5" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

function Brand() {
  return (
    <a href="#" className="flex items-center gap-3 shrink-0">
      <PalmIcon />
      <div className="leading-none">
        <div className="text-[1.3rem] md:text-[1.65rem] font-black tracking-[0.12em] text-white">
          PURA <span className="text-[#FF3F8E]">VIDA</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-[2px] w-8 bg-[#FF3F8E]" />
          <span className="text-[0.58rem] md:text-[0.66rem] uppercase tracking-[0.33em] text-[#12B5E5]">Water Filtration</span>
        </div>
      </div>
    </a>
  )
}

function Services() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {services.map(([title, short, icon]) => (
        <details key={title} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition">
          <summary className="cursor-pointer list-none p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#12B5E5]/10 text-[#12B5E5] flex items-center justify-center text-2xl shrink-0">{icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-[#071427]">{title}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{short}</p>
            </div>
            <div className="text-3xl text-[#071427] group-open:rotate-90 transition">›</div>
          </summary>
          <div className="px-6 pb-6 pl-6 md:pl-[6.5rem] space-y-4 text-slate-700 leading-relaxed">
            <p>{title} in South Florida should be designed around real water testing, not generic equipment. Water conditions vary throughout Palm Beach County, Martin County, and Okeechobee County.</p>
            <p>Pura Vida Water Filtration starts with testing so we can identify hardness, chlorine, sediment, odor, iron, sulfur, staining, and other concerns before recommending a system.</p>
            <p>Our goal is to protect plumbing, improve daily water quality, and create long-term solutions customized to each home or business.</p>
            <a href="mailto:info@puravidafiltration.com" className="inline-flex mt-2 text-[#FF3F8E] font-black">Contact us about {title} →</a>
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
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#061225]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
          <div className="px-5 md:px-7 py-3 flex items-center justify-between gap-8">
            <Brand />
            <nav className="hidden lg:flex items-center gap-2 text-white text-[0.78rem] font-bold uppercase tracking-[0.16em]">
              {[
                ['Home', '#'],
                ['Services', '#services'],
                ['About Us', '#about'],
                ['Service Areas', '#areas'],
                ['Contact', '#contact']
              ].map(([label, href]) => (
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
            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-6">The Right Solution Starts With Testing</h2>
            <div className="w-16 h-1 bg-[#FF3F8E] mb-6" />
            <p className="text-slate-700 leading-relaxed mb-8">Every home’s water is different. We start with complimentary water testing to identify exactly what is in your water before designing a custom solution.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm font-bold text-slate-700 mb-8">
              {['Free Water Testing','Identify Hardness','Contaminant Review','Custom Recommendations','Professional Install','Ongoing Support'].map((item) => (
                <div key={item} className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-[#12B5E5] text-white flex items-center justify-center text-xs">✓</span>{item}</div>
              ))}
            </div>
            <a href="mailto:info@puravidafiltration.com" className="inline-flex border border-[#12B5E5] text-[#071427] px-6 py-3 rounded-xl font-black hover:bg-[#12B5E5]/10 transition">Schedule Your Free Test</a>
          </aside>
          <div>
            <p className="uppercase tracking-[0.25em] text-[#12B5E5] font-black text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#071427] leading-tight mb-3">Custom Water Treatment Solutions</h2>
            <p className="text-slate-600 mb-8">Click any service below to learn more about how we help with South Florida water.</p>
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
          <div className="grid md:grid-cols-3 gap-8">
            {['Palm Beach County','Martin County','Okeechobee County'].map((area) => (
              <div key={area} className="rounded-[2rem] border border-slate-200 p-10 font-black text-2xl text-[#071427] shadow-sm">{area}</div>
            ))}
          </div>
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
