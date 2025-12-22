import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Zap, Target } from 'lucide-react';
import { GlassCard } from '../components';
import profilePic from '/ProfilePic.jpg';

export function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workExperience = [
    { company: 'FareNow', role: 'Head of Operations' },
    { company: 'Farerun', role: 'Operations Specialist' },
    { company: 'Softkodes', role: 'GM & Product Manager' },
    { company: 'Blendko', role: 'Quality Specialist' },
    { company: 'Delta Ride', role: 'Technical Consultant' },
    { company: 'CleanEarth', role: 'Strategic Consultant' },
  ];

  const stats = [
    { label: 'Years Experience', value: '6+', color: 'from-cyan-400 to-blue-400', icon: Sparkles },
    { label: 'Companies', value: '6', color: 'from-blue-400 to-purple-400', icon: Target },
    { label: 'Methodologies', value: 'Dual', color: 'from-purple-400 to-pink-400', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              {/* Badge */}
              <div className="flex items-center gap-3 w-fit">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-sm text-cyan-300 font-medium">SDLC Orchestrator</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                Strategic Leadership
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Meets Execution
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white/70 leading-relaxed max-w-lg font-light">
                Transform ambitious visions into scalable realities. I bridge strategy, analytics, and execution across the entire SDLC, delivering measurable impact at startups and enterprises.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  Explore My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="pt-6 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-cyan-400">5+</p>
                  <p className="text-sm text-white/60">Industries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-400">100%</p>
                  <p className="text-sm text-white/60">Impact Driven</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">40+</p>
                  <p className="text-sm text-white/60">Team Members Led</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Flip Card */}
            <div 
              className="relative h-96 lg:h-[500px] animate-in fade-in slide-in-from-right duration-700 cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className="relative w-full h-full rounded-2xl transition-all duration-500 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-0 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={profilePic}
                    alt="Perez Okpako"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-8"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      6+
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-900">Years of Excellence</p>
                      <p className="text-sm text-slate-600 mt-2">Strategic SDLC Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                  onMouseEnter={() => setHoveredStat(idx)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
                  <GlassCard className={`relative transition-all duration-300 ${hoveredStat === idx ? 'translate-y-[-8px] shadow-xl' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </div>
                        <p className="text-white/70 font-medium">{stat.label}</p>
                      </div>
                      <Icon className={`w-10 h-10 text-white/20 group-hover:text-white/40 transition-colors`} />
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">What I Bring</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Strategic vision combined with hands-on execution. This approach delivers tangible outcomes backed by consistent professional quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Strategy & Vision', desc: 'Align teams around clear, measurable business outcomes', icon: Target },
              { title: 'Data-Driven Execution', desc: 'Make decisions backed by analytics and insights', icon: Zap },
              { title: 'Operational Excellence', desc: 'Build systems that scale without breaking', icon: CheckCircle2 },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to transform
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                your initiatives?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let's discus how to help your organization scale, optimize and deliver exceptional results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
