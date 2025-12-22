import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Twitter,
  Menu,
  X,
  ChevronDown,
  Activity,
  Terminal,
  Cpu,
  ArrowUpRight,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Section refs for smooth scrolling
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
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

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = sectionRefs[id as keyof typeof sectionRefs].current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: 'perezokp@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Data
  const experiences = [
    {
      year: '2022 — NOW',
      position: 'Head of Operations',
      company: 'FareNow Limited',
      focus: '(Superapps)',
      context: 'STRATEGIC_SCALE',
      description: 'Orchestrated end-to-end operations for a multi-service superapp scaling across multiple regions. Built operational frameworks that balanced rapid growth with quality assurance.',
    },
    {
      year: '2020 — 2022',
      position: 'Operations Specialist',
      company: 'Farerun Limited',
      focus: '(Logistics)',
      context: 'PROCESS_FLOW',
      description: 'Transformed logistics operations by identifying efficiency gaps and implementing data-driven optimization strategies. Redesigned delivery workflows.',
    },
    {
      year: '2019 — 2020',
      position: 'General Manager',
      company: 'Softkodes Technologies',
      focus: '(Software Development)',
      context: 'TECHNICAL_BRIDGE',
      description: 'Managed overall business operations and strategy. Bridged product vision with technical execution, led cross-functional teams.',
    },
    {
      year: '2019 — 2020',
      position: 'Product Manager',
      company: 'Softkodes Technologies',
      focus: '(Software Development)',
      context: 'PRODUCT_ORCHESTRATION',
      description: 'Bridged product vision and technical execution. Managed roadmaps, led cross-functional teams, and delivered software solutions aligned with business strategy.',
    },
    {
      year: '2018 — 2019',
      position: 'Quality Specialist',
      company: 'Blendko',
      focus: '(Fashion Tech)',
      context: 'EXCELLENCE_FRAMEWORK',
      description: 'Ensured product excellence without compromising speed to market. Implemented quality frameworks that balanced rapid iteration with high standards.',
    },
    {
      year: '2018 — 2019',
      position: 'Technical Consultant',
      company: 'Delta Ride',
      focus: '(GovTech)',
      context: 'REGULATORY_NAV',
      description: 'Navigated complex regulatory and technical requirements. Advised on system architecture, delivery strategy, and multi-stakeholder alignment.',
    },
  ];

  const companies = [
    {
      id: '1',
      name: 'FareNow',
      type: 'Logistics & Superapps',
      role: 'Head of Operations',
      description: 'Orchestrated end-to-end operations for a multi-service superapp scaling across multiple regions. Built operational frameworks that balanced rapid growth with quality assurance.',
      impact: 'Achieved 40% operational efficiency improvement, reduced service delivery time by 30%, and established scalable operational processes supporting 10+ regional markets.',
      keyAchievements: [
        'Designed and implemented operations strategy for multi-service superapp',
        'Built cross-regional operational teams and coordination systems',
        'Reduced operational bottlenecks by 35% through process optimization',
        'Established KPIs and dashboards for real-time operational visibility',
      ],
      focus: 'Operations, Strategy, Process Optimization',
      image_url: '/Farenow.jpg',
    },
    {
      id: '2',
      name: 'Farerun',
      type: 'Logistics & Delivery',
      role: 'Operations Specialist',
      description: 'Transformed logistics operations by identifying efficiency gaps and implementing data-driven optimization strategies.',
      impact: 'Reduced delivery times by 25%, improved fleet utilization by 20%, and saved operational costs through intelligent routing.',
      keyAchievements: [
        'Analyzed and optimized logistics workflows using data analytics',
        'Implemented new delivery routing algorithms reducing travel time',
        'Built performance dashboards for real-time tracking',
        'Increased driver utilization efficiency by 18%',
      ],
      focus: 'Logistics, Data Analysis, Operations',
      image_url: '/Farerun.jpg',
    },
    {
      id: '3',
      name: 'Softkodes Technologies',
      type: 'Software Development',
      role: 'General Manager & Product Manager',
      description: 'Managed overall business operations and product strategy. Bridged product vision with technical execution.',
      impact: 'Grew product portfolio by 60%, improved time-to-market by 35%, and built a high-performing team of 15+ members.',
      keyAchievements: [
        'Defined product strategy aligned with business objectives',
        'Led product delivery across 5+ enterprise software solutions',
        'Reduced time-to-market by implementing Agile methodologies',
        'Built and mentored cross-functional teams',
      ],
      focus: 'Product Management, Team Leadership, Software Strategy',
      image_url: '/Softkodes.jpg',
    },
    {
      id: '4',
      name: 'Blendko',
      type: 'Fashion Tech & Design',
      role: 'Quality Specialist',
      description: 'Ensured product excellence without compromising speed to market.',
      impact: 'Reduced post-launch defects by 45%, improved customer satisfaction from 7.2 to 8.8.',
      keyAchievements: [
        'Designed comprehensive quality assurance framework',
        'Established automated testing and CI/CD pipelines',
        'Reduced critical bugs in production by 50%',
        'Built quality culture balancing speed with excellence',
      ],
      focus: 'Quality Assurance, Testing Strategy, Process Excellence',
      image_url: '/Blendko.jpg',
    },
    {
      id: '5',
      name: 'Delta Ride',
      type: 'GovTech & Transportation',
      role: 'Technical Consultant',
      description: 'Navigated complex regulatory and technical requirements in government tech space.',
      impact: 'Successfully delivered compliance-heavy platform serving 50+ government agencies.',
      keyAchievements: [
        'Architected solutions meeting complex regulatory requirements',
        'Coordinated with 15+ stakeholders across government bodies',
        'Established compliance documentation frameworks',
        'Reduced implementation time for regulatory changes by 40%',
      ],
      focus: 'GovTech, Compliance, Stakeholder Management',
      image_url: '/DeltaRide.jpg',
    },
    {
      id: '6',
      name: 'CleanEarth',
      type: 'Waste Disposal & Environmental',
      role: 'Strategic Consultant',
      description: 'Consulted on operational excellence and technology strategy for environmental waste management.',
      impact: 'Improved collection efficiency by 28%, reduced environmental footprint by 15%.',
      keyAchievements: [
        'Optimized waste collection routes using data analytics',
        'Implemented environmental impact tracking systems',
        'Reduced operational costs by 22%',
        'Built sustainability reporting dashboard',
      ],
      focus: 'Operations, Sustainability, Data Strategy',
      image_url: '/CleanEarth.jpg',
    },
  ];

  return (
    <div className="antialiased selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-colors duration-500 bg-[#f5f5dc]/95 py-6 text-slate-700 ${
        scrolled ? 'backdrop-blur-xl border-b border-slate-300/60' : 'border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="flex flex-col items-start text-left">
            <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-slate-700">Perez Okpako.</span>
            <span className="text-[8px] uppercase tracking-[0.6em] font-bold text-slate-500">
              Strategic SDLC Orchestration
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-12">
            {['home', 'about', 'experience', 'portfolio', 'contact'].map(id => (
              <button 
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-colors relative group ${
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D0F] flex flex-col justify-center items-center space-y-10 text-white">
          {['home', 'about', 'experience', 'portfolio', 'contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} className="text-4xl font-serif italic hover:text-rose-500 transition-colors">
              {id}
            </button>
          ))}
        </div>
      )}

      <main>
        
        {/* SECTION 1: HOME - THE RED ROOM */}
        <section 
          ref={sectionRefs.home}
          className="relative min-h-screen bg-rose-800 text-white flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-black italic leading-[0.85] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-rose-50 via-rose-100 to-amber-100">
                  Strategic Leadership
                  <br />
                  <span className="font-light text-amber-100/90">Meets</span>
                  <br />
                  Execution<span className="text-rose-200">.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/80 mb-8 max-w-lg">
                  Transform ambitious visions into scalable realities. I bridge strategy, analytics, and execution across the entire SDLC, delivering measurable impact at startups and enterprises.
                </p>
                <button 
                  onClick={() => scrollTo('about')}
                  className="group inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 bg-white text-rose-800 rounded-full font-bold uppercase tracking-widest text-[8px] sm:text-[10px] hover:bg-black hover:text-white transition-all duration-700 shadow-2xl"
                >
                  Explore My Work <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Flip Card */}
              <div 
                className="relative h-96 lg:h-[500px] cursor-pointer group"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div
                  className="relative w-full h-full rounded-2xl transition-all duration-500 shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img 
                      src="/ProfilePic.jpg"
                      alt="Perez Okpako" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl border border-rose-100 flex flex-col items-center justify-center p-8"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="text-center space-y-4">
                      <div className="text-8xl font-black bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                        6+
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-rose-700">Years of Excellence</p>
                        <p className="text-sm text-rose-500 mt-2">Strategic SDLC Leadership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 animate-bounce opacity-20 hidden md:block">
            <ChevronDown size={64} />
          </div>
        </section>

        {/* SECTION 2: ABOUT - THE CLEARANCE */}
        <section 
          ref={sectionRefs.about}
          className="min-h-screen bg-white text-slate-900 flex flex-col justify-center px-6 md:px-24 py-40"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-6 mb-24 text-rose-600 font-mono text-[10px] uppercase tracking-[0.6em] font-bold">
              <span className="w-16 h-px bg-current"></span>
              Identity Perspective
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <h2 className="text-5xl md:text-8xl font-sans font-light leading-[0.9] tracking-tighter">
                I'm Perez Okpako, a <span className="font-bold underline decoration-rose-500/30 decoration-8 underline-offset-8">strategic orchestrator</span> of complex initiatives.
              </h2>
              <div className="space-y-12">
                <p className="text-2xl font-light text-slate-500 leading-relaxed">
                  With 6+ years across startups and enterprises, I've earned a reputation for translating ambitious business visions into scalable, operational realities. My superpower? Seeing the complete picture and connecting the dots that others miss.
                </p>
                <div className="p-10 border-l-4 border-rose-500 bg-slate-50 rounded-r-3xl">
                  <p className="text-xl font-light text-slate-600 leading-relaxed italic">
                    "When teams work in separate bubbles, good outcomes rarely follow. I weave together strategy, needs, and data into one coherent story."
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {['Strategic Clarity', 'Data Conviction', 'Impact Obsession', 'Methodological Agility'].map(tag => (
                    <span key={tag} className="px-6 py-2 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE - THE OBSIDIAN VAULT */}
        <section 
          ref={sectionRefs.experience}
          className="min-h-screen bg-[#0D0D0F] text-white flex flex-col justify-center px-6 md:px-24 py-40 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-32">
              <span className="text-rose-500 font-mono text-[10px] uppercase tracking-[0.8em] mb-6 block font-bold">Professional Archives</span>
              <h2 className="text-7xl md:text-[12rem] font-mono font-bold tracking-tighter text-white/5 uppercase leading-none">Experience.log</h2>
            </div>

            <div className="space-y-px bg-[#0f0f11] border border-rose-800/50 rounded-[3rem] overflow-hidden shadow-2xl">
              {experiences.map((exp, i) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 md:p-16 border-b border-rose-800/50 bg-[#0f0f11] transition-colors duration-400 text-rose-50 hover:bg-[#f6e9d5] hover:text-slate-900">
                  <div className="lg:col-span-2 font-mono text-xs text-rose-200 group-hover:text-rose-600 pt-3 flex items-center gap-3">
                    <Terminal size={14} /> {exp.year}
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-3xl md:text-5xl font-mono uppercase tracking-tighter transition-colors flex items-center gap-4 group-hover:text-rose-700">
                      {exp.position} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </h3>
                    <p className="text-[11px] font-bold text-rose-200/80 tracking-[0.4em] uppercase mt-4 flex items-center gap-2 group-hover:text-slate-600">
                      <Cpu size={12} /> {exp.company} <span className="text-rose-200/60 group-hover:text-slate-500">{exp.focus}</span>
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-xl font-light text-rose-100 leading-relaxed font-mono italic group-hover:text-slate-700">
                      <span className="text-rose-300 font-bold mr-6 text-sm group-hover:text-rose-600">[{exp.context}]</span>
                      "{exp.description}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group mt-24 p-12 bg-[#0f0f11] border border-rose-800/50 rounded-[3rem] transition-colors duration-400 hover:bg-[#f6e9d5]">
              <h3 className="text-2xl font-bold mb-8 font-mono uppercase tracking-wider text-rose-200 group-hover:text-rose-700">What I Bring</h3>
              <ul className="space-y-6 text-rose-100 group-hover:text-slate-700">
                <li className="flex items-start gap-4 font-light text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-rose-400 group-hover:bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  See the complete picture. Strategy flows into requirements, requirements map to execution, and execution feeds back into strategy. That integration is where impact lives.
                </li>
                <li className="flex items-start gap-4 font-light text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-rose-400 group-hover:bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  Context over dogma. Agile for speed, Waterfall for complexity, Kanban for flow. I don't force methodology—I match it to your reality.
                </li>
                <li className="flex items-start gap-4 font-light text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-rose-400 group-hover:bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  Numbers tell the truth. Every decision is backed by data, every trade-off is measured, every outcome is connected to business reality.
                </li>
                <li className="flex items-start gap-4 font-light text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-rose-400 group-hover:bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  Built startup MVPs and scaled enterprise platforms. I know how to translate vision into sustainable systems that actually work under pressure.
                </li>
                <li className="flex items-start gap-4 font-light text-lg leading-relaxed">
                  <span className="w-2 h-2 bg-rose-400 group-hover:bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  Lead by clarity, not control. Simplify complex problems. Align teams around outcomes. Drive accountability through transparency, not micromanagement.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: PORTFOLIO - THE VAULT CONTINUED */}
        <section 
          ref={sectionRefs.portfolio}
          className="min-h-screen bg-[#F5F5F5] text-slate-900 px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-32 md:py-40 relative overflow-hidden"
        >
          <div className="absolute top-1/2 right-0 w-[50%] h-[80%] bg-rose-200/40 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-20">
              <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.8em] mb-6 block font-bold">Companies & Impact</span>
              <h2 className="text-6xl md:text-9xl font-serif italic mb-12 tracking-tighter text-slate-900">The Portfolio.</h2>
              <p className="text-xl font-light text-slate-600 max-w-3xl">
                Explore the companies I've worked with and the transformative impact I've delivered across operations, technology, and strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="group cursor-pointer bg-slate-700 text-white rounded-3xl overflow-hidden border border-slate-600 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                  onClick={() => setSelectedCompany(company)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={company.image_url} 
                      alt={company.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-3xl font-serif font-bold text-white mb-1">{company.name}</h3>
                      <p className="text-sm text-white/80 font-mono uppercase tracking-wider">{company.type}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-2 bg-gradient-to-br from-black/60 via-black/40 to-transparent">
                    <p className="text-sm text-rose-300 font-semibold font-mono uppercase tracking-wider">{company.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{company.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Modal */}
          {selectedCompany && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-[#0D0D0F] border border-white/10 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-12">
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="float-right text-white/70 hover:text-white transition-colors mb-4"
                >
                  <X size={32} />
                </button>

                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={selectedCompany.image_url} 
                    alt={selectedCompany.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
                    <h2 className="text-5xl font-serif font-bold text-white">{selectedCompany.name}</h2>
                    <p className="text-white/90 font-mono uppercase tracking-wider">{selectedCompany.type}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono uppercase tracking-wider flex items-center gap-2">
                      <Users size={20} /> Role
                    </h3>
                    <p className="text-white/70 text-lg">{selectedCompany.role}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono uppercase tracking-wider">Overview</h3>
                    <p className="text-white/70 leading-relaxed text-lg">{selectedCompany.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp size={20} /> Impact & Results
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6 text-lg">{selectedCompany.impact}</p>
                    <div className="space-y-3">
                      {selectedCompany.keyAchievements.map((achievement: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                          <Zap size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                          <p className="text-white/70 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono uppercase tracking-wider">Focus Areas</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedCompany.focus.split(', ').map((area: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 font-mono">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCompany(null)}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mt-8"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 5: CONTACT - THE INQUIRY */}
        <section 
          ref={sectionRefs.contact}
          className="min-h-screen bg-rose-800 text-white flex flex-col justify-center px-6 md:px-24 py-40 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-20">
              <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.8em] mb-6 block font-bold">The Inquiry</span>
              <h2 className="text-6xl md:text-9xl font-serif italic mb-8 tracking-tighter">Get In Touch.</h2>
              <p className="text-2xl font-light opacity-80 mb-12 leading-relaxed max-w-2xl">
                Currently available for high-stakes leadership roles, strategic consulting, and operational transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <a href="mailto:perezokp@gmail.com" className="group/link flex items-center gap-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-rose-800 transition-all duration-700">
                    <Mail size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-2 font-mono">Direct Channel</span>
                    <span className="text-lg md:text-xl font-bold tracking-widest uppercase group-hover/link:text-rose-300 transition-colors">perezokp@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/perez-okpako" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-rose-800 transition-all duration-700">
                    <Linkedin size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-2 font-mono">Network</span>
                    <span className="text-lg md:text-xl font-bold tracking-widest uppercase group-hover/link:text-rose-300 transition-colors">LinkedIn Connect</span>
                  </div>
                </a>

                <a href="https://x.com/_FirstKing" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-rose-800 transition-all duration-700">
                    <Twitter size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-2 font-mono">Social</span>
                    <span className="text-lg md:text-xl font-bold tracking-widest uppercase group-hover/link:text-rose-300 transition-colors">Twitter/X</span>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-mono uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 font-mono uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 font-mono uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 font-mono uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-200 text-sm">
                      {error}
                    </div>
                  )}

                  {submitted && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-200 flex items-center gap-2 text-sm">
                      <CheckCircle2 size={18} />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-white text-rose-800 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono tracking-widest opacity-40 uppercase">
              <span>© 2025 PEREZ OKPAKO</span>
              <span className="flex items-center gap-2"><Activity size={12} /> AMBITION_FULFILLED</span>
            </div>
          </div>
        </section>

      </main>

      {/* Font Imports */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@200;300;400;700;800&family=JetBrains+Mono:ital,wght@0,300;0,700;1,300&family=UnifrakturCook:wght@700&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'DM Serif Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-gothic { font-family: 'UnifrakturCook', cursive; }
        
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0D0D0F; }
        ::-webkit-scrollbar-thumb { background: #9f1239; }
      `}} />

    </div>
  );
}

export default App;
