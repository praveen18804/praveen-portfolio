import React from 'react';
import { motion } from 'framer-motion';
import { Film, Zap, Image as ImageIcon, PenTool, Sliders, Sparkles, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Helper mapping for skill software icons
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Film':
      return <Film className="w-6 h-6 text-[#FF2020]" />;
    case 'Zap':
      return <Zap className="w-6 h-6 text-[#FF3B3B]" />;
    case 'Image':
      return <ImageIcon className="w-6 h-6 text-[#FF2020]" />;
    case 'PenTool':
      return <PenTool className="w-6 h-6 text-[#FF5555]" />;
    case 'Sliders':
      return <Sliders className="w-6 h-6 text-[#CC0000]" />;
    default:
      return <Cpu className="w-6 h-6 text-[#FF2020]" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#080808] border-t border-zinc-900 overflow-hidden">
      {/* Background Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2020]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Creative Multi-line Headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-[#FF2020] uppercase font-bold tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              MY SKILLS
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-[1.05]">
              Tools That<br />
              <span className="text-[#FF2020] text-glow-red">Bring My Ideas</span><br />
              To Life.
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed font-normal">
              Mastery over industry-standard creative software enables seamless workflow execution, from raw timeline cuts and high-retention reel edits to vector graphics and poster artwork.
            </p>

            {/* Creative Software Tech Badges */}
            <div className="pt-4 flex flex-wrap gap-2">
              {['PREMIERE PRO', 'AFTER EFFECTS', 'PHOTOSHOP', 'ILLUSTRATOR', 'DAVINCI RESOLVE'].map((tool, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Skill Cards with Red Animated Progress Indicators */}
          <div className="lg:col-span-7 space-y-5">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-[#FF2020]/50 hover:shadow-[0_0_25px_rgba(255,32,32,0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-[#FF2020]/40 transition-colors">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF2020] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">{skill.category}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-black font-mono text-[#FF2020] text-glow-red">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative h-2.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-red-600 via-[#FF2020] to-[#FF3B3B] rounded-full shadow-[0_0_12px_#FF2020]"
                  />
                </div>

                <p className="text-xs text-zinc-400 mt-3 font-sans">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
