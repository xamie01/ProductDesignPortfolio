import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h3>
            <a
              href="mailto:hello@designportfolio.com"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
              hello@designportfolio.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Follow
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Location
            </h3>
            <p className="text-white/70">San Francisco, CA</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 Product Design Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
