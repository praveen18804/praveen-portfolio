import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        />

        {/* Modal Main Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0c0c0c] border border-red-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,32,32,0.35)] flex flex-col md:flex-row"
        >
          {/* Close Button Mobile/Desktop */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#FF2020] transition-colors shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Large Image Viewport */}
          <div className="md:w-7/12 bg-black flex items-center justify-center p-4 md:p-6 relative group overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Info Sidebar */}
          <div className="md:w-5/12 p-6 sm:p-8 bg-[#080808] border-t md:border-t-0 md:border-l border-zinc-800 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF2020]/10 border border-red-500/30 text-xs font-mono font-bold text-[#FF2020] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {item.categoryLabel || 'POSTER DESIGN'}
                </span>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {item.client && (
                <div className="border-t border-b border-zinc-900 py-3">
                  <p className="text-xs font-mono text-zinc-500 uppercase">CLIENT / PROJECT</p>
                  <p className="text-sm font-bold text-zinc-200 mt-0.5">{item.client}</p>
                </div>
              )}

              {item.description && (
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase mb-1">DESIGN OVERVIEW</p>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>
                </div>
              )}

              {item.tags && item.tags.length > 0 && (
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase mb-2">TOOLS & TAGS</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>DESIGNED BY PRAVEEN</span>
              <span className="text-[#FF2020] font-bold">2025 PORTFOLIO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
