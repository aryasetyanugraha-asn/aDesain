import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">
                aDesain
              </span>
            </div>

            {/* Right side nav */}
            <div className="flex items-center space-x-6 gap-4">
              {/* Language Switcher */}
              <select
                className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2 outline-none cursor-pointer"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language.split('-')[0]} // Simple parsing for en-US -> en
              >
                <option value="id">🇮🇩 ID</option>
                <option value="en">🇬🇧 EN</option>
                <option value="ar">🇸🇦 AR</option>
              </select>

              <Link
                to="/login"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-xl text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
              >
                {t('nav.login')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
            >
              {t('hero.title').split('aDesain').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                      aDesain
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-1"
              >
                {t('hero.cta1')}
              </Link>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-base font-semibold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                {t('hero.cta2')}
              </a>
            </motion.div>
          </motion.div>
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

      {/* Services Section (Bento Box / Grid Style) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('services.title')}</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { id: 'appDev', icon: '📱', color: 'bg-blue-50 text-blue-600' },
              { id: 'ai', icon: '🧠', color: 'bg-purple-50 text-purple-600' },
              { id: 'media', icon: '🎨', color: 'bg-pink-50 text-pink-600' },
              { id: 'digital', icon: '⚡', color: 'bg-emerald-50 text-emerald-600' }
            ].map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
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
