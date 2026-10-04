import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040404] border-t border-zinc-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF2020] flex items-center justify-center text-black font-extrabold shadow-[0_0_12px_rgba(255,32,32,0.8)]">
            P
          </div>
          <div>
            <span className="font-display font-black text-xl text-white">
              PRA<span className="text-[#FF2020]">VEE</span>N
            </span>
            <p className="text-[11px] font-mono text-zinc-400">
              GRAPHIC DESIGNER & VIDEO EDITOR
            </p>
          </div>
        </div>

        {/* Center Copyright */}
        <div className="text-center text-xs font-mono text-zinc-400">
          <p>&copy; {new Date().getFullYear()} PRAVEEN. All Rights Reserved.</p>
          <p className="text-[10px] text-zinc-400 mt-1">
            Crafted with passion for high-impact visual storytelling.
          </p>
        </div>

        {/* Right Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#FF2020] hover:shadow-[0_0_15px_rgba(255,32,32,0.4)] transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 text-[#FF2020] group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
