import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#080808] border-t border-zinc-900 overflow-hidden">
      {/* Background Subtle Red Accent Beam */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF2020]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-[#FF2020] uppercase font-bold tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT ME
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight">
            Creativity Meets <span className="text-[#FF2020] text-glow-red">Visual Storytelling.</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF2020] rounded-full mt-4 shadow-[0_0_10px_#FF2020]" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Professional Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-zinc-800 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-[#FF2020]" />
                Passionate Visual Craftsman
              </h3>

              <p className="text-zinc-300 leading-relaxed text-base">
                Hello! I am <span className="text-white font-bold">Praveen</span>, a dedicated Graphic Designer and Video Editor with over <span className="text-[#FF2020] font-bold">1+ year of freelance experience</span> crafting high-impact visual media. My passion lies in transforming concepts into striking motion graphics, color-graded video reels, and aesthetic brand visuals.
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm">
                Whether creating high-retention Instagram Reels, commercial promo edits, or eye-catching poster designs, I bridge creative artistic vision with strategic brand positioning to make content stand out across digital platforms.
              </p>

              {/* Highlights Bullet List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2020] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">HIGH-RETENTION REELS</h4>
                    <p className="text-xs text-zinc-400">Paced cuts & dynamic captions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2020] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">CINEMATIC COLOR</h4>
                    <p className="text-xs text-zinc-400">Color grading & sound design</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2020] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">POSTER & BRANDING</h4>
                    <p className="text-xs text-zinc-400">Social creatives & thumbnails</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2020] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">DEADLINE FOCUS</h4>
                    <p className="text-xs text-zinc-400">Reliable freelance delivery</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Clean Experience & Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Experience Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FF2020]/10 border border-red-500/30 text-[#FF2020]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white tracking-wide">WORK EXPERIENCE</h3>
              </div>

              <div className="relative pl-6 space-y-6 border-l-2 border-zinc-800">
                {personalInfo.experience.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-[#FF2020] group-hover:scale-125 group-hover:bg-[#FF2020] transition-all shadow-[0_0_10px_rgba(255,32,32,0.6)]" />

                    <div className="glass-card rounded-xl p-5 border border-zinc-800/80 hover:border-[#FF2020]/40 transition-all">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FF2020]/15 text-[#FF2020] border border-red-500/30 mb-2">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FF2020]/10 border border-red-500/30 text-[#FF2020]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white tracking-wide">EDUCATION & CERTIFICATION</h3>
              </div>

              <div className="relative pl-6 space-y-6 border-l-2 border-zinc-800">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-[#FF2020] group-hover:scale-125 group-hover:bg-[#FF2020] transition-all shadow-[0_0_10px_rgba(255,32,32,0.6)]" />

                    <div className="glass-card rounded-xl p-5 border border-zinc-800/80 hover:border-[#FF2020]/40 transition-all">
                      <div className="flex justify-between items-start">
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-zinc-800 text-zinc-200 border border-zinc-700 mb-2">
                          Completed {edu.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-xs text-[#FF2020] font-mono mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
