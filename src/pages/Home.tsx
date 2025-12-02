import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlassCard } from '../components';

export function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Sparkles size={20} />
                Welcome to My Portfolio
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Product Design
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed max-w-lg">
                I'm a Product Design Lead with 8+ years of experience creating beautiful,
                user-centered digital experiences that drive business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-full animate-in fade-in slide-in-from-right duration-700">
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl backdrop-blur-xl border border-white/20 transform transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotateY(${scrollY * 0.1}deg)` }}
              >
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl flex items-center justify-center">
                  <div className="space-y-4 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      8+
                    </div>
                    <p className="text-white/70">Years of Design Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
            <GlassCard className="group hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-white/70">Projects Completed</p>
              <p className="text-white/50 text-sm mt-2">Across web and mobile platforms</p>
            </GlassCard>

            <GlassCard className="group hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-white/70">Team Members Led</p>
              <p className="text-white/50 text-sm mt-2">Building design culture and excellence</p>
            </GlassCard>

            <GlassCard className="group hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <p className="text-white/70">Avg Conversion Lift</p>
              <p className="text-white/50 text-sm mt-2">Through design optimization</p>
            </GlassCard>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
