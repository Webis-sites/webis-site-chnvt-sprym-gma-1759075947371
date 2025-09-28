'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowUp, FaBook, FaCoffee, FaBreadSlice } from 'react-icons/fa';

const ContactFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'פייסבוק', color: 'hover:bg-blue-500' },
    { icon: FaInstagram, href: '#', label: 'אינסטגרם', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
    { icon: FaTwitter, href: '#', label: 'טוויטר', color: 'hover:bg-sky-500' },
    { icon: FaWhatsapp, href: '#', label: 'וואטסאפ', color: 'hover:bg-green-500' }
  ];

  const quickLinks = [
    { title: 'ספרי בישול', href: '#' },
    { title: 'ספרי אפייה', href: '#' },
    { title: 'מתכונים בינלאומיים', href: '#' },
    { title: 'ספרי דיאטה', href: '#' }
  ];

  const legalLinks = [
    { title: 'תנאי שימוש', href: '#' },
    { title: 'מדיניות פרטיות', href: '#' },
    { title: 'נגישות', href: '#' },
    { title: 'החזרות והחלפות', href: '#' }
  ];

  return (
    <footer id="contact-footer" dir="rtl" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-6xl text-[#D4A5A5] transform rotate-12">
          <FaBook />
        </div>
        <div className="absolute bottom-20 left-20 text-8xl text-[#9B786F] transform -rotate-12">
          <FaCoffee />
        </div>
        <div className="absolute top-1/2 right-1/3 text-7xl text-[#D4A5A5] transform rotate-45">
          <FaBreadSlice />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#D4A5A5] font-playful">חנות ספרים גמא</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-700/50 backdrop-blur-sm border border-gray-600 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#D4A5A5]">קישורים מהירים</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: -5 }}
                    className="text-gray-300 hover:text-[#D4A5A5] transition-colors duration-300 inline-block"
                  >
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#D4A5A5]">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-300">03-1234567</span>
                <div className="w-8 h-8 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center">
                  <FaPhone className="text-[#9B786F] text-sm" />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-300">info@bookstore-gamma.co.il</span>
                <div className="w-8 h-8 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center">
                  <FaEnvelope className="text-[#9B786F] text-sm" />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-300">רחוב הספרים 42, תל אביב</span>
                <div className="w-8 h-8 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#9B786F] text-sm" />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <div className="text-gray-300 text-right">
                  <div>ראשון-חמישי: 9:00-20:00</div>
                  <div>שישי: 9:00-14:00</div>
                  <div>שבת: סגור</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center">
                  <FaClock className="text-[#9B786F] text-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#D4A5A5]">הרשמו לניוזלטר</h3>
            <p className="text-gray-300 mb-4">קבלו עדכונים על ספרים חדשים ומבצעים בלעדיים</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="כתובת אימייל"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4A5A5] transition-colors duration-300 text-right"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A5A5] to-[#9B786F] text-white font-bold hover:shadow-lg transition-all duration-300"
              >
                הרשמה
              </motion.button>
            </form>
            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 text-green-400 text-sm"
                >
                  תודה על ההרשמה! 🎉
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-64 bg-gray-700/50 backdrop-blur-sm border border-gray-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.9123456789!2d34.7817!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuMSJF!5e0!3m2!1sen!2sil!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80"
            ></iframe>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2024 חנות ספרים גמא. כל הזכויות שמורות.
            </div>
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#D4A5A5] to-[#9B786F] text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default ContactFooter;