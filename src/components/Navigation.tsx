import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Experience', label: 'Experience' },
    { href: '/Portfolio', label: 'Portfolio' },
    { href: '/Contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const isLightMode = (location.pathname === '/' || location.pathname === '/About') && !isScrolled;
  const navBaseClasses =
    'fixed w-full top-0 z-50 transition-colors duration-300 border-b backdrop-blur-xl';
  const navThemeClasses = isLightMode
    ? 'bg-white/90 border-slate-200 text-slate-900'
    : 'bg-slate-950/70 border-white/10 text-white';
  const linkBase = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize';
  const linkActive = isLightMode
    ? 'bg-slate-100 text-slate-900 border border-slate-200 shadow-sm'
    : 'bg-white/10 text-cyan-400 border border-cyan-400/30';
  const linkIdle = isLightMode
    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    : 'text-white/70 hover:text-white hover:bg-white/5';

  return (
    <nav className={`${navBaseClasses} ${navThemeClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-4xl font-black tracking-tight">
            <span
              className={
                isLightMode
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
              }
            >
              Perez Okpako
            </span>
          </Link>

          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${linkBase} ${isActive(link.href) ? linkActive : linkIdle}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isLightMode ? 'text-slate-900 hover:text-cyan-600' : 'text-white hover:text-cyan-400'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2 animate-in fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${linkBase} ${isActive(link.href) ? linkActive : linkIdle}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
