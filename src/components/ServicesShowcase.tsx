"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUtensils, FaBreadSlice, FaWineGlassAlt, FaUserTie, FaGift } from 'react-icons/fa';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  bgColor: string;
}

const ServicesShowcase: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 'cooking-books',
      title: 'ספרי בישול',
      description: 'אוסף עשיר של ספרי בישול מהמטבחים המובילים בעולם',
      icon: <FaUtensils className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
      bgColor: '#D4A5A5'
    },
    {
      id: 'nutrition-books',
      title: 'ספרי תזונה',
      description: 'מדריכים מקצועיים לתזונה נכונה ואורח חיים בריא',
      icon: <FaBook className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      bgColor: '#9B786F'
    },
    {
      id: 'baking-books',
      title: 'ספרי אפייה',
      description: 'מתכונים ומדריכים לאפייה ביתית ומקצועית',
      icon: <FaBreadSlice className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
      bgColor: '#D4A5A5'
    },
    {
      id: 'wine-books',
      title: 'ספרי יין ומשקאות',
      description: 'מדריכי יינות, קוקטיילים ומשקאות מיוחדים',
      icon: <FaWineGlassAlt className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
      bgColor: '#9B786F'
    },
    {
      id: 'professional-consulting',
      title: 'ייעוץ מקצועי',
      description: 'ייעוץ אישי בבחירת ספרים המתאימים לצרכיכם',
      icon: <FaUserTie className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bgColor: '#D4A5A5'
    },
    {
      id: 'special-orders',
      title: 'הזמנות מיוחדות',
      description: 'שירות הזמנות מיוחדות של ספרים נדירים ומהדורות מוגבלות',
      icon: <FaGift className="w-8 h-8" />,
      bgImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48',
      bgColor: '#9B786F'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="services-showcase" className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-right" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            השירותים שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right leading-relaxed">
            עם ניסיון של שנים רבות בתחום ספרות המזון, אנו מציעים מגוון רחב של שירותים מקצועיים. 
            מספרי בישול קלאסיים ועד מדריכי תזונה מתקדמים - הכל תחת קורת גג אחת.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, ${service.bgColor}20 0%, ${service.bgColor}40 100%)`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-80"
                  style={{
                    background: `linear-gradient(135deg, ${service.bgColor}dd 0%, ${service.bgColor}99 100%)`
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Glassmorphism Icon Container */}
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 text-right" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-right leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Arrow */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute bottom-4 left-4 text-white/70"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.div>
              </div>

              {/* Neumorphic Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.1)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-right">
            מחפשים משהו ספציפי? צוות המומחים שלנו כאן כדי לעזור לכם למצוא את הספר המושלם.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;