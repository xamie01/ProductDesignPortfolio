import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  Layers, 
  Target,
  Menu,
  X,
  Send,
  Zap,
  ChevronDown,
  Activity,
  Terminal,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

/**
 * PEREZ OKPAKO - THE CINEMATIC NARRATIVE (FINAL VERSION)
 * * DESIGN LOGIC:
 * 1. THE RED ROOM (HERO): White on Rose-800. Bold Serif. Atmosphere: Intensity.
 * 2. THE CLEARANCE (IDENTITY): Black on White. Modern Sans. Atmosphere: Strategy.
 * 3. THE OBSIDIAN VAULT (ARCHIVE): Crimson on #0D0D0F. Monospace. Atmosphere: Precision.
 * 4. THE INQUIRY (CONTACT): High Contrast Red/White. Atmosphere: Result.
 */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs for Scroll Tracking
  const sectionRefs = {
    home: useRef(null),
    identity: useRef(null),
    archive: useRef(null),
    expertise: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current && 
            scrollPos >= ref.current.offsetTop && 
            scrollPos < ref.current.offsetTop + ref.current.offsetHeight) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = sectionRefs[id].current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Professional History Data
  const experiences = [
    {
      year: '2022 — NOW',
      role: 'Head of Operations',
      company: 'FareNow Limited',
      context: 'STRATEGIC_SCALE',
      desc: 'Orchestrating multi-service ecosystems across regions. Bridging the gap between messy operational realities and regional growth targets.'
    },
    {
      year: '2020 — 2022',
      role: 'Operations Specialist',
      company: 'Farerun Limited',
      context: 'PROCESS_FLOW',
      desc: 'Identifying "stuck points" in delivery networks using data-driven conviction. Redesigning logistics from the ground up.'
    },
    {
      year: '2018 — 2020',
      role: 'General Manager',
      company: 'Softkodes Technologies',
      context: 'TECHNICAL_BRIDGE',
      desc: 'Translating abstract business visions into technical roadmaps that engineering teams actually believed in.'
    }
  ];

  return (
    <div className="antialiased selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* Dynamic Nav: Changes color based on section theme */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-700 ${
        scrolled ? 'py-4 backdrop-blur-xl border-b' : 'py-10'
      } ${
        activeSection === 'home' ? 'bg-rose-800 border-white/10 text-white' : 
        activeSection === 'identity' ? 'bg-white/80 border-slate-200 text-slate-900' :
        activeSection === 'archive' ? 'bg-[#0D0D0F]/90 border-white/5 text-rose-500' :
        'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="flex flex-col items-start text-left">
             <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter">Perez Okpako.</span>
             <span className={`text-[8px] uppercase tracking-[0.6em] font-bold ${activeSection === 'identity' ? 'text-slate-400' : 'opacity-40'}`}>
               Strategic SDLC Orchestration
             </span>
          </button>

          <div className="hidden lg:flex items-center space-x-12">
            {['home', 'identity', 'archive', 'expertise', 'contact'].map(id => (
              <button 
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative group ${
                  activeSection === id ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {id}
                <span className={`absolute -bottom-1 left-0 h-px bg-current transition-all ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D0F] flex flex-col justify-center items-center space-y-10 text-white">
          {['home', 'identity', 'archive', 'expertise', 'contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} className="text-4xl font-serif italic hover:text-rose-500 transition-colors">
              {id}
            </button>
          ))}
        </div>
      )}

      <main>
        
        {/* SECTION 1: THE RED ROOM (HERO) */}
        <section 
          ref={sectionRefs.home}
          className="relative min-h-screen bg-rose-800 text-white flex flex-col justify-center px-6 md:px-24 overflow-hidden"
        >
          {/* Grain & Scanline Soul */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
          
          <div className="relative z-10 max-w-7xl">
            <h1 className="text-7xl md:text-[14rem] font-serif font-black leading-[0.8] mb-14 tracking-tighter">
              AMBITION <br />
              <span className="italic font-light text-white/70">BECOMES</span> <br />
              REALITY<span className="text-rose-400">.</span>
            </h1>
            <div className="flex flex-col md:flex-row items-start gap-16 max-w-5xl">
              <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80">
                Perez Okpako. Turning complex technical friction into seamless operational flow. 
                6 years of orchestrating the complete picture.
              </p>
              <button 
                onClick={() => scrollTo('identity')}
                className="group flex items-center gap-6 px-14 py-7 bg-white text-rose-800 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all duration-700 shadow-2xl shadow-black/20"
              >
                ENTER THE FLOW <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 animate-bounce opacity-20 hidden md:block">
            <ChevronDown size={64} />
          </div>
        </section>

        {/* SECTION 2: THE CLEARANCE (IDENTITY) */}
        <section 
          ref={sectionRefs.identity}
          className="min-h-screen bg-white text-slate-900 flex flex-col justify-center px-6 md:px-24 py-40"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-6 mb-24 text-rose-600 font-mono text-[10px] uppercase tracking-[0.6em] font-bold">
              <span className="w-16 h-px bg-current"></span>
              Identity Perspective
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <h2 className="text-5xl md:text-8xl font-sans font-light leading-[0.9] tracking-tighter">
                I hunt for the <span className="font-bold underline decoration-rose-500/30 decoration-8 underline-offset-8">stuck points</span> where strategy meets friction.
              </h2>
              <div className="space-y-12">
                <p className="text-2xl font-light text-slate-500 leading-relaxed">
                  Organizations often have brilliant strategies that clash with technical realities. 
                  My work is to weave together PM, BA, QA, and DA perspectives into one coherent story. 
                </p>
                <div className="p-10 border-l-4 border-rose-500 bg-slate-50 rounded-r-3xl">
                   <p className="text-xl font-light text-slate-600 leading-relaxed italic">
                     "Agile for speed, Waterfall for complexity, Kanban for flow. I matched the tool to the challenge, not the dogma."
                   </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {['Strategic Clarity', 'Data Conviction', 'Impact Obsession', 'Scale Leadership'].map(tag => (
                    <span key={tag} className="px-6 py-2 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE OBSIDIAN VAULT (ARCHIVE) */}
        <section 
          ref={sectionRefs.archive}
          className="min-h-screen bg-[#0D0D0F] text-white flex flex-col justify-center px-6 md:px-24 py-40 relative overflow-hidden"
        >
          {/* Subtle Ruby Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-32">
              <span className="text-rose-500 font-mono text-[10px] uppercase tracking-[0.8em] mb-6 block font-bold">02 / Professional Archives</span>
              <h2 className="text-7xl md:text-[12rem] font-mono font-bold tracking-tighter text-white/5 uppercase leading-none">History.log</h2>
            </div>

            <div className="space-y-px bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-2xl">
              {experiences.map((exp, i) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 md:p-16 border-b border-white/5 hover:bg-rose-500/[0.04] transition-all duration-700">
                  <div className="lg:col-span-2 font-mono text-xs text-rose-500/60 pt-3 flex items-center gap-3">
                    <Terminal size={14} /> {exp.year}
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-3xl md:text-5xl font-mono uppercase tracking-tighter group-hover:text-rose-500 transition-colors flex items-center gap-4">
                      {exp.role} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-[11px] font-bold text-slate-500 tracking-[0.4em] uppercase mt-4 flex items-center gap-2">
                       <Cpu size={12} /> {exp.company}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-xl font-light text-slate-400 leading-relaxed font-mono italic">
                      <span className="text-rose-500 font-bold mr-6 text-sm">[{exp.context}]</span>
                      "{exp.desc}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 px-12 opacity-30">
               <div className="flex gap-6 items-center"><Activity size={20} className="text-rose-500" /> <span className="font-mono text-[11px] tracking-widest">SYSTEM STATUS: OPTIMIZED_FLOW</span></div>
               <div className="font-mono text-[11px] tracking-[0.4em]">REF_ID: //P_OKPAKO_ARCHIVE_0923</div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE INQUIRY (EXPERTISE & CONTACT) */}
        <section 
          ref={sectionRefs.expertise}
          className="min-h-screen bg-white text-slate-900 flex flex-col justify-center px-6 md:px-24 py-40"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-40">
            <div>
              <span className="text-rose-600 font-mono text-[11px] uppercase tracking-[0.5em] mb-6 block font-bold">03 Capability Matrix</span>
              <h2 className="text-6xl md:text-9xl font-serif italic mb-20 tracking-tighter">The Edge.</h2>
              <div className="space-y-20">
                 {[
                   { label: 'Operations Leadership', skills: 'Strategic Planning, Regional Scaling, Resource Optimization, Stakeholder Matrix' },
                   { label: 'Product Orchestration', skills: 'SDLC Management, Agile Transformation, Roadmap Architecture, UX/Strategy Bridge' },
                   { label: 'Technical Analytics', skills: 'Data Conviction, Business Intelligence, QA Frameworks, Risk Assessment' }
                 ].map(item => (
                   <div key={item.label} className="group cursor-default">
                      <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-6 group-hover:text-rose-600 transition-colors">{item.label}</h4>
                      <p className="text-3xl md:text-5xl font-light text-slate-300 group-hover:text-slate-900 transition-all duration-700 leading-tight tracking-tight">
                        {item.skills}
                      </p>
                   </div>
                 ))}
              </div>
            </div>

            <div ref={sectionRefs.contact} className="relative group">
              {/* Pulsing Backlight */}
              <div className="absolute inset-0 bg-rose-800 rounded-[5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative bg-rose-800 p-12 md:p-24 rounded-[4.5rem] text-white flex flex-col justify-between h-full shadow-[0_40px_100px_-20px_rgba(159,18,57,0.3)]">
                <div>
                  <h3 className="text-6xl md:text-8xl font-serif italic mb-14 tracking-tighter">Inquire.</h3>
                  <p className="text-2xl font-light opacity-80 mb-20 leading-relaxed max-w-lg">
                    Currently available for high-stakes leadership roles, strategic consulting, and operational transformations.
                  </p>
                  
                  <div className="space-y-12">
                     <a href="mailto:perezokp@gmail.com" className="group/link flex items-center gap-10">
                        <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-rose-800 transition-all duration-700">
                          <Mail size={32} />
                        </div>
                        <div>
                           <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-2">Direct Channel</span>
                           <span className="text-lg md:text-xl font-bold tracking-widest uppercase group-hover/link:text-rose-300 transition-colors">perezokp@gmail.com</span>
                        </div>
                     </a>
                     <a href="https://linkedin.com/in/perez-okpako" target="_blank" rel="noreferrer" className="group/link flex items-center gap-10">
                        <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-rose-800 transition-all duration-700">
                          <Linkedin size={32} />
                        </div>
                        <div>
                           <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-2">Network</span>
                           <span className="text-lg md:text-xl font-bold tracking-widest uppercase group-hover/link:text-rose-300 transition-colors">LinkedIn Connect</span>
                        </div>
                     </a>
                  </div>
                </div>
                
                <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono tracking-widest opacity-40 uppercase">
                  <span>© 2025 PERZ OKPAKO ORCHESTRATION</span>
                  <span className="flex items-center gap-2"><Activity size={12} /> AMBITION_FULFILLED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Cinematic Font Imports & Core CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@200;300;400;700;800&family=JetBrains+Mono:ital,wght@0,300;0,700;1,300&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; cursor: crosshair; background: #fff; }
        .font-serif { font-family: 'DM+Serif+Display', serif; }
        .font-mono { font-family: 'JetBrains+Mono', monospace; }
        
        /* Streaming Scroll Optimization */
        html { scroll-behavior: smooth; }
        
        /* Stealth Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0D0D0F; }
        ::-webkit-scrollbar-thumb { background: #9f1239; }

        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 1s ease-out forwards; }
      `}} />

    </div>
  );
};

export default App;