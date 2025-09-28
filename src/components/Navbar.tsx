'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'שירותים' },
    { href: '#portfolio', label: 'תיק עבודות' },
    { href: '#booking', label: 'הזמנה' },
    { href: '#contact', label: 'צור קשר' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="navigation"
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`absolute inset-0 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-l from-white/80 to-white/70'
            : 'bg-gradient-to-l from-white/60 to-white/50'
        }`}
        style={{
          boxShadow: scrolled
            ? 'inset 0 -1px 0 0 rgba(212, 165, 165, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)'
            : 'inset 0 -1px 0 0 rgba(212, 165, 165, 0.05)'
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo/Business Name */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-reverse space-x-3"
          >
            <div
              className="relative p-3 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
              }}
            >
              <span
                className="text-2xl font-bold bg-gradient-to-l from-[#D4A5A5] to-[#9B786F] bg-clip-text text-transparent"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                גמא
              </span>
            </div>
            <h1
              className="text-xl md:text-2xl font-bold text-gray-800 text-right"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              חנות ספרים
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-reverse space-x-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-gray-700 hover:text-[#D4A5A5] transition-colors duration-300 font-medium text-right"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                aria-label={`נווט אל ${link.label}`}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0"
                  style={{
                    background: 'linear-gradient(145deg, #f5f5f5, #e0e0e0)',
                    boxShadow: 'inset 2px 2px 4px #d1d1d1, inset -2px -2px 4px #ffffff'
                  }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl"
            style={{
              background: isOpen
                ? 'linear-gradient(145deg, #e0e0e0, #f5f5f5)'
                : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
              boxShadow: isOpen
                ? 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff'
                : '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff'
            }}
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-[#D4A5A5]" />
              ) : (
                <HiMenu className="w-6 h-6 text-[#9B786F]" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div
                className="rounded-2xl p-6 backdrop-blur-lg"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.9))',
                  boxShadow: '8px 8px 16px rgba(209,209,209,0.5), -8px -8px 16px rgba(255,255,255,0.5)',
                  border: '1px solid rgba(212, 165, 165, 0.2)'
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 px-4 text-gray-700 hover:text-[#D4A5A5] transition-colors duration-300 font-medium text-right rounded-xl hover:bg-white/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`נווט אל ${link.label}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;