"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBook, FaUtensils, FaCoffee, FaLeaf } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const y3 = useTransform(scrollY, [0, 300], [0, 70]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const floatingIcons = [
    { Icon: FaBook, delay: 0, x: '10%', y: '20%' },
    { Icon: FaUtensils, delay: 0.2, x: '80%', y: '15%' },
    { Icon: FaCoffee, delay: 0.4, x: '15%', y: '70%' },
    { Icon: FaLeaf, delay: 0.6, x: '85%', y: '65%' },
  ];

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-[#D4A5A5] opacity-20"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.2, 
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              delay,
              duration: 3,
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-right space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              style={{
                fontFamily: 'Rubik, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <span className="inline-block bg-gradient-to-r from-[#D4A5A5] to-[#9B786F] bg-clip-text text-transparent">
                חנות ספרים
              </span>
              <br />
              <span className="text-gray-700">מוביל בישראל</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                className="relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #D4A5A5 0%, #9B786F 100%)',
                  boxShadow: '0 10px 20px -10px rgba(212, 165, 165, 0.5), inset 0 -3px 0 rgba(0,0,0,0.1)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 30px -10px rgba(212, 165, 165, 0.6), inset 0 -3px 0 rgba(0,0,0,0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>
            </motion.div>

            {/* Glassmorphic Info Card */}
            <motion.div
              className="mt-8 p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p className="text-gray-700 text-right">
                אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. 
                אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
            </motion.div>
          </motion.div>

          {/* Book Images Collage */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Book 1 - Main */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-80 rounded-2xl overflow-hidden"
              style={{ 
                y: y1,
                boxShadow: '20px 20px 60px #b8b8b8, -20px -20px 60px #ffffff'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=500&fit=crop" 
                alt="ספר בישול"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Book 2 */}
            <motion.div
              className="absolute top-20 left-0 w-56 h-72 rounded-2xl overflow-hidden"
              style={{ 
                y: y2,
                boxShadow: '20px 20px 60px #b8b8b8, -20px -20px 60px #ffffff'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=500&fit=crop" 
                alt="ספרי מתכונים"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Book 3 */}
            <motion.div
              className="absolute bottom-10 right-10 w-48 h-64 rounded-2xl overflow-hidden"
              style={{ 
                y: y3,
                boxShadow: '20px 20px 60px #b8b8b8, -20px -20px 60px #ffffff'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=500&fit=crop" 
                alt="ספר אפייה"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Glassmorphic Accent Card */}
            <motion.div
              className="absolute bottom-20 left-10 p-4 rounded-xl backdrop-blur-md bg-white/40 border border-white/60"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
              }}
            >
              <div className="flex items-center gap-3 text-right">
                <FaBook className="text-[#D4A5A5] text-2xl" />
                <div>
                  <p className="font-semibold text-gray-800">מעל 1000 כותרים</p>
                  <p className="text-sm text-gray-600">בתחום המזון והבישול</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64 C240,96 480,32 720,48 C960,64 1200,96 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;