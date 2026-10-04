import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import LightboxModal from './components/LightboxModal';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#FF2020] selection:text-white relative">
      {/* Interactive Glowing Custom Cursor */}
      <CustomCursor />

      {/* Intro Loader Animation */}
      <IntroLoader />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero onOpenVideo={(video) => setActiveVideo(video)} />
        <About />
        <Portfolio
          onOpenVideo={(video) => setActiveVideo(video)}
          onOpenLightbox={(item) => setActiveLightbox(item)}
        />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Widget */}
      <a
        href={personalInfo.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
        <span className="hidden sm:inline">CHAT ON WHATSAPP</span>
        <span className="sm:hidden">WHATSAPP</span>
      </a>

      {/* Modals */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <LightboxModal item={activeLightbox} onClose={() => setActiveLightbox(null)} />
    </div>
  );
}
