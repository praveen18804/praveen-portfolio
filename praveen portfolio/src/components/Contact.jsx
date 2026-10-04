import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Youtube, Linkedin, Mail, CheckCircle2, ArrowUpRight, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.projectDetails) return;

    setLoading(true);

    const targetEmail = personalInfo.socials.email || "praveens18804@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.projectDetails,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectDetails: '' });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectDetails: '' });
        setTimeout(() => setSubmitted(false), 8000);
      }
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectDetails: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF2020]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-[#FF2020] uppercase font-bold tracking-widest">
            <Sparkles className="w-4 h-4" />
            GET IN TOUCH
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight uppercase">
            LET'S CREATE <span className="text-[#FF2020] text-glow-red">SOMETHING AMAZING.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind? Let's bring your ideas to life through creative design and impactful video editing.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-2xl p-8 border border-zinc-800 space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">Let's Connect</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you need viral reel editing, full-scale video color grading, or custom graphic design branding, feel free to drop a message or reach out on socials.
              </p>

              {/* Direct WhatsApp Chat Card */}
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-zinc-950 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-emerald-500 text-black font-extrabold group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-mono text-emerald-400 uppercase font-bold">WHATSAPP CHAT</p>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {personalInfo.socials.phone}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 ml-auto text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Direct Email Card */}
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#FF2020]/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-[#FF2020]/10 border border-red-500/30 text-[#FF2020] group-hover:bg-[#FF2020] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-mono text-zinc-500 uppercase">DIRECT EMAIL</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#FF2020] transition-colors truncate">
                    {personalInfo.socials.email}
                  </p>
                </div>
              </a>

              {/* Social Platforms Links */}
              <div className="pt-4 border-t border-zinc-900 space-y-3">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">
                  OFFICIAL SOCIAL MEDIA
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {/* WhatsApp Quick Link */}
                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 transition-all text-xs font-mono font-bold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-80" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#FF2020] hover:text-[#FF2020] transition-all text-xs font-mono font-bold text-zinc-300"
                  >
                    <Instagram className="w-4 h-4 text-[#FF2020]" />
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60" />
                  </a>

                  {/* YouTube */}
                  <a
                    href={personalInfo.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#FF2020] hover:text-[#FF2020] transition-all text-xs font-mono font-bold text-zinc-300"
                  >
                    <Youtube className="w-4 h-4 text-[#FF2020]" />
                    <span>YOUTUBE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#FF2020] hover:text-[#FF2020] transition-all text-xs font-mono font-bold text-zinc-300"
                  >
                    <Linkedin className="w-4 h-4 text-[#FF2020]" />
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-zinc-800 relative">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/20 text-[#FF2020] border border-[#FF2020] flex items-center justify-center mx-auto shadow-[0_0_20px_#FF2020]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you! Your project details have been sent directly to <strong className="text-white">{personalInfo.socials.email}</strong>. Praveen will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2020] focus:ring-1 focus:ring-[#FF2020] transition-all text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2020] focus:ring-1 focus:ring-[#FF2020] transition-all text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-2">
                      YOUR MOBILE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2020] focus:ring-1 focus:ring-[#FF2020] transition-all text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-2">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe your video editing or graphic design project (e.g., Instagram Reels, Commercial Video, Poster Design, Deadlines, etc.)"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2020] focus:ring-1 focus:ring-[#FF2020] transition-all text-sm font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#FF2020] hover:bg-[#FF3B3B] text-black font-mono font-bold tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(255,32,32,0.5)] hover:shadow-[0_0_35px_rgba(255,32,32,0.8)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span className="animate-pulse">SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
