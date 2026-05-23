import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, duration?: number, className?: string }> = ({ children, delay = 0, duration = 1000, className = "" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

const AnimatedHeading: React.FC<{ text: string, className?: string }> = ({ text, className = "" }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200); // initial delay
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30; // ms

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay = (lineIndex * line.length * charDelay) + (charIndex * charDelay);
            return (
              <span
                key={charIndex}
                className="inline-block transition-all"
                style={{
                  opacity: startAnimation ? 1 : 0,
                  transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDuration: '500ms',
                  transitionDelay: `${delay}ms`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

const LandingPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-100 relative">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-semibold tracking-tight text-white">
              aDesain
            </span>
          </div>

          {/* Right side nav */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <select
              className="bg-transparent border border-white/20 text-white text-sm rounded-lg focus:ring-white focus:border-white block p-2 outline-none cursor-pointer appearance-none [&>option]:text-slate-800"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language.split('-')[0]} // Simple parsing for en-US -> en
            >
              <option value="id">🇮🇩 ID</option>
              <option value="en">🇬🇧 EN</option>
              <option value="ar">🇸🇦 AR</option>
            </select>

            <Link
              to="/login"
              className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {t('nav.login')}
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-end overflow-hidden px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 bg-black">
        {/* Full-screen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        />

        <div className="relative z-10 w-full lg:grid lg:grid-cols-2 lg:items-end">
          {/* Left Column - Main Content */}
          <div>
            <AnimatedHeading
              text={t('hero.title')}
              className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                {t('hero.subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('hero.cta2')}
              </a>
              <Link
                to="/demo"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                {t('hero.cta1')}
              </Link>
            </FadeIn>
          </div>

          {/* Right Column - Tag */}
          <FadeIn delay={1400} duration={1000} className="mt-8 lg:mt-0 flex lg:justify-end">
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl text-white">
              <span className="text-lg md:text-xl lg:text-2xl font-light">
                {t('hero.tag')}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">{t('about.title')}</h2>
            <p className="text-3xl font-bold text-slate-900 mb-6">{t('about.description')}</p>
          </div>
        </div>
      </motion.section>

      {/* Services Section (Clean Cards Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">{t('services.title')}</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { id: 'appDev', icon: '📱', color: 'bg-[#F2F6FA]' },
              { id: 'ai', icon: '🧠', color: 'bg-[#FDF2FC]' },
              { id: 'media', icon: '🎨', color: 'bg-[#FEF5F5]' },
              { id: 'digital', icon: '⚡', color: 'bg-[#F2FCF8]' }
            ].map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_2px_12px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] transition-all group min-h-[220px] flex flex-col justify-between"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  {t(`services.${service.id}`)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-2xl font-semibold text-slate-400 mb-12">{t('clients.title')}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              <span className="text-xl font-bold">{t('clients.gov')}</span>
              <span className="text-xl font-bold">{t('clients.corp')}</span>
              <span className="text-xl font-bold">{t('clients.sme')}</span>
              <span className="text-xl font-bold">{t('clients.agencies')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('contact.title')}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/628212121018"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-2xl bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
              >
                <span className="mr-2">💬</span> {t('contact.wa1')}
              </a>
              <a
                href="https://wa.me/6285717625122"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-2xl bg-emerald-50 text-emerald-700 font-semibold hover:bg-emerald-100 transition-colors"
              >
                <span className="mr-2">💬</span> {t('contact.wa2')}
              </a>
              <a
                href="mailto:aryasetyanugaraha@gmail.com"
                className="flex items-center justify-center px-6 py-4 rounded-2xl bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 transition-colors"
              >
                <span className="mr-2">✉️</span> {t('contact.email')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} aDesain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
