import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Film, Image as ImageIcon, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

export default function Portfolio({ onOpenVideo, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = [
    { label: 'ALL', value: 'ALL' },
    { label: 'VIDEOS', value: 'video' },
    { label: 'POSTERS', value: 'poster' },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.type === activeFilter;
  });

  return (
    <section id="works" className="py-24 relative bg-grid-pattern border-t border-zinc-900">
      {/* Background Red Ambient Light Spheres */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF2020]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-[#FF2020] uppercase font-bold tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              MY WORKS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight">
              A Glimpse Of <span className="text-[#FF2020] text-glow-red">My Work.</span>
            </h2>
          </div>

          {/* Filter Category Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 self-start md:self-auto shadow-inner">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-black bg-[#FF2020] shadow-[0_0_15px_rgba(255,32,32,0.6)] scale-105'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isVideo = project.type === 'video';
              const isVerticalReel = project.aspect === '9:16';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden glass-card border border-zinc-800 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(255,32,32,0.25)] transition-all duration-500 flex flex-col ${
                    isVerticalReel ? 'lg:col-span-1' : ''
                  }`}
                >
                  {/* Thumbnail / Media Container */}
                  <div className={`relative overflow-hidden bg-zinc-950 ${
                    isVerticalReel ? 'aspect-[9/16]' : 'aspect-video'
                  }`}>
                    <img
                      src={isVideo ? project.thumbnail : project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Glowing Red Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-500/40 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                        {isVideo ? (
                          <>
                            <Film className="w-3 h-3 text-[#FF2020]" />
                            {isVerticalReel ? 'REEL (9:16)' : 'VIDEO (16:9)'}
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-3 h-3 text-[#FF2020]" />
                            POSTER
                          </>
                        )}
                      </span>
                    </div>

                    {/* Interactive Action Button overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      {isVideo ? (
                        <button
                          onClick={() => onOpenVideo(project)}
                          className="w-16 h-16 rounded-full bg-[#FF2020] text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,32,32,0.8)] transform group-hover:scale-105 hover:bg-white hover:text-[#FF2020] transition-all duration-300 cursor-pointer"
                          aria-label={`Play video ${project.title}`}
                        >
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onOpenLightbox(project)}
                          className="w-16 h-16 rounded-full bg-[#FF2020] text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,32,32,0.8)] transform group-hover:scale-105 hover:bg-white hover:text-[#FF2020] transition-all duration-300 cursor-pointer"
                          aria-label={`View poster ${project.title}`}
                        >
                          <Eye className="w-7 h-7" />
                        </button>
                      )}
                      <span className="mt-3 text-xs font-mono tracking-widest text-white uppercase font-bold bg-black/80 px-3 py-1 rounded-md border border-white/10">
                        {isVideo ? 'PLAY PREVIEW' : 'FULL PREVIEW'}
                      </span>
                    </div>

                    {/* Bottom Card Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
                      <p className="text-[11px] font-mono text-[#FF2020] uppercase font-bold tracking-wider mb-1">
                        {project.categoryLabel}
                      </p>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF2020] transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note for Easy Editing */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-zinc-500">
            * All poster images & videos can be updated directly inside <code className="text-[#FF2020] bg-zinc-900 px-2 py-1 rounded border border-zinc-800">src/data/portfolioData.js</code>
          </p>
        </div>

      </div>
    </section>
  );
}
