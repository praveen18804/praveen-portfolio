import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX, Maximize2, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const isVertical = video.aspect === '9:16';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative z-10 w-full max-h-[90vh] bg-[#0c0c0c] border border-red-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,32,32,0.4)] flex flex-col ${
            isVertical ? 'max-w-md' : 'max-w-4xl'
          }`}
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#080808]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FF2020] text-black">
                {video.categoryLabel || 'VIDEO'}
              </span>
              <h3 className="text-lg font-bold font-display text-white truncate max-w-xs sm:max-w-sm">
                {video.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-[#FF2020] transition-colors"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className={`relative bg-black flex items-center justify-center overflow-hidden ${
            isVertical ? 'aspect-[9/16] max-h-[65vh]' : 'aspect-video'
          }`}>
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
              poster={video.thumbnail}
            >
              Your browser does not support HTML5 video.
            </video>
          </div>

          {/* Footer Details */}
          <div className="p-6 bg-[#080808] border-t border-zinc-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-zinc-400">
                CLIENT: <strong className="text-white font-bold">{video.client || 'Portfolio Showcase'}</strong>
              </span>
              <span className="text-xs font-mono text-[#FF2020]">
                DURATION: {video.duration || '01:00'}
              </span>
            </div>

            {video.description && (
              <p className="text-xs text-zinc-300 leading-relaxed">
                {video.description}
              </p>
            )}

            {video.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {video.instagramUrl && (
                  <a
                    href={video.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-mono font-bold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on Instagram
                  </a>
                )}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
