import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORKS', href: '#works' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'about', 'works', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-2 font-display text-2xl sm:text-3xl font-black tracking-tight text-white select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#FF2020] flex items-center justify-center text-black font-extrabold shadow-[0_0_12px_rgba(255,32,32,0.8)] transition-transform duration-300 group-hover:scale-110">
            P
          </div>
          <span>
            PRA<span className="text-[#FF2020] group-hover:text-glow-red transition-all">VEE</span>N
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative font-mono text-sm tracking-wider font-semibold transition-colors duration-200 py-1 ${
                  isActive ? 'text-[#FF2020]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2020] shadow-[0_0_8px_#FF2020]" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-transparent text-white border border-[#FF2020]/60 hover:border-[#FF2020] hover:bg-[#FF2020] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,32,32,0.25)] hover:shadow-[0_0_25px_rgba(255,32,32,0.6)]"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#FF2020]/50 transition-all focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2020]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#080808]/95 backdrop-blur-xl border-b border-zinc-800 py-6 px-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center justify-between text-lg font-mono font-bold tracking-wider py-2 border-b border-zinc-900 ${
                    isActive ? 'text-[#FF2020]' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#FF2020] shadow-[0_0_8px_#FF2020]" />}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="mt-2 text-center py-3 rounded-xl bg-[#FF2020] text-black font-bold font-mono tracking-wider shadow-[0_0_20px_rgba(255,32,32,0.5)] active:scale-95 transition-transform"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
