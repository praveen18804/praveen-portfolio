import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Sparkles, Film, Image as ImageIcon, Flame } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenVideo }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Cinematic Red Glow Atmospheric Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2020]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF2020]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/30 text-xs sm:text-sm font-mono tracking-widest text-zinc-300 shadow-[0_0_15px_rgba(255,32,32,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2020] animate-ping" />
              <span className="text-[#FF2020] font-bold">{personalInfo.role}</span>
            </motion.div>

            {/* PRAVEEN Big Name Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight uppercase leading-none select-none">
                PRA<span className="text-[#FF2020] text-glow-red relative">
                  VEE
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF2020] rounded-full shadow-[0_0_12px_#FF2020]" />
                </span>N
              </h1>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-zinc-100 tracking-tight leading-tight"
            >
              "{personalInfo.tagline}"
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('works')}
                className="group relative px-8 py-4 rounded-xl bg-[#FF2020] text-black font-mono font-bold tracking-wider uppercase text-sm shadow-[0_0_30px_rgba(255,32,32,0.5)] hover:shadow-[0_0_45px_rgba(255,32,32,0.8)] hover:bg-[#FF3B3B] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE MY WORK
                  <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#FF2020] text-white font-mono font-bold tracking-wider uppercase text-sm hover:text-[#FF2020] hover:shadow-[0_0_20px_rgba(255,32,32,0.3)] transition-all duration-300"
              >
                CONTACT ME
              </button>
            </motion.div>

            {/* Experience Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80 max-w-lg"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">1+ <span className="text-[#FF2020]">Year</span></p>
                <p className="text-xs font-mono text-zinc-400 uppercase mt-1">Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">30+ <span className="text-[#FF2020]">Reels</span></p>
                <p className="text-xs font-mono text-zinc-400 uppercase mt-1">Video Projects</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">50+ <span className="text-[#FF2020]">Posters</span></p>
                <p className="text-xs font-mono text-zinc-400 uppercase mt-1">Design Assets</p>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Cinematic Media Preview Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Card Container with Red Border Glow */}
              <div className="relative rounded-2xl overflow-hidden glass-card border border-red-500/40 p-3 shadow-[0_0_40px_rgba(255,32,32,0.25)] group">
                
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                  <img
                    src={personalInfo.heroMedia?.previewImage || "/hero_reel_preview.jpg"}
                    alt="Praveen Visual Reel Preview"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Play Video Trigger Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      onClick={() => onOpenVideo && onOpenVideo({
                        title: personalInfo.heroMedia?.title || "Visual Storytelling Reel",
                        videoUrl: personalInfo.heroMedia?.videoUrl || "/videos/reel_Dd1TkoJsRxC.mp4",
                        categoryLabel: personalInfo.heroMedia?.categoryLabel || "Reel Showcase",
                        aspect: "9:16"
                      })}
                      className="w-20 h-20 rounded-full bg-[#FF2020]/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,32,32,0.8)] hover:scale-110 hover:bg-[#FF2020] transition-all duration-300 cursor-pointer"
                      aria-label="Play Reel Showcase"
                    >
                      <Play className="w-8 h-8 fill-black translate-x-0.5" />
                    </button>
                    <span className="mt-3 text-xs font-mono tracking-widest text-zinc-300 font-semibold uppercase bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      WATCH SHOWREEL ({personalInfo.heroMedia?.duration || "00:27"})
                    </span>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-red-500/40 text-xs font-mono text-white flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-[#FF2020]" />
                      4K Video Edit
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xs font-mono text-[#FF2020] uppercase tracking-wider font-bold">Featured Production</p>
                    <h3 className="text-xl font-bold font-display text-white">{personalInfo.heroMedia?.title || "Visual Storytelling Reel"}</h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Custom color grading, motion graphics & dynamic pacing.</p>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#FF2020] rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#FF2020] rounded-bl-xl pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-[#FF2020] transition-colors group"
          >
            <span className="text-xs font-mono tracking-widest uppercase">SCROLL DOWN</span>
            <div className="w-6 h-10 rounded-full border border-zinc-700 flex justify-center p-1 group-hover:border-[#FF2020] transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-2 rounded-full bg-[#FF2020]"
              />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
