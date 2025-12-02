import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Perez Opako
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Strategic SDLC Orchestrator. Transforming ambitious visions into scalable realities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
              <div className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Experience', href: '/experience' },
                  { label: 'Portfolio', href: '/portfolio' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-white/60 hover:text-cyan-400 text-sm transition-colors block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <a
                href="mailto:perezokp@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors mb-4"
              >
                <Mail size={16} />
                <span className="text-sm">perezokp@gmail.com</span>
              </a>
              <div>
                <p className="text-white/60 text-sm mb-3">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/perez-okpako"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-white/70 hover:text-cyan-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://x.com/_FirstKing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center text-white/70 hover:text-cyan-400 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Let's Work Together</h4>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                © {currentYear} Perez Opako. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/50 hover:text-white/70 transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-white/50 hover:text-white/70 transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
