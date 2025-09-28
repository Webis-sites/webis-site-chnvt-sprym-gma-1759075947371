"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Book } from 'react-icons/fi';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  imageUrl: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "מטבח ישראלי אותנטי",
    author: "יונית צוקרמן",
    description: "מסע קולינרי דרך המטבח הישראלי המסורתי והמודרני",
    category: "חדשים",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "לחם ביתי",
    author: "דוד לוי",
    description: "מדריך מקיף לאפיית לחמים ומאפים בבית",
    category: "רבי מכר",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "טעמי הים התיכון",
    author: "מירי כהן",
    description: "מתכונים מסורתיים מחופי הים התיכון",
    category: "מומלצים",
    imageUrl: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "מטבח כשר למהדרין",
    author: "רבקה שפירא",
    description: "מתכונים כשרים לחגים ולכל ימות השנה",
    category: "כשר",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "עוגות ועוגיות",
    author: "שרה אברהם",
    description: "אוסף מתכונים למאפים מתוקים לכל המשפחה",
    category: "רבי מכר",
    imageUrl: "https://images.unsplash.com/photo-1486427944299-aa1a5e0def7d?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "ירקות העונה",
    author: "גיל רוזנברג",
    description: "מדריך לבישול עם ירקות טריים בכל עונה",
    category: "חדשים",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "מטבח טבעוני",
    author: "נועה גרין",
    description: "מתכונים טבעוניים בריאים וטעימים",
    category: "מומלצים",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "חגיגה כשרה",
    author: "אסתר מלכה",
    description: "מתכונים חגיגיים למועדי ישראל",
    category: "כשר",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=600&fit=crop"
  }
];

const categories = ['הכל', 'חדשים', 'רבי מכר', 'מומלצים', 'כשר'];

const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('הכל');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'הכל') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.category === selectedCategory));
    }
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="portfolio-gallery" className="min-h-screen py-16 px-4" dir="rtl" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-right" style={{ color: '#9B786F' }}>
            אוסף הספרים שלנו
          </h1>
          <p className="text-lg text-gray-600 text-right">גלו את מיטב ספרי הבישול והמזון</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white shadow-inner'
                  : 'text-gray-700 shadow-lg'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? '#D4A5A5' : '#ffffff',
                boxShadow: selectedCategory === category
                  ? 'inset 4px 4px 8px rgba(0,0,0,0.1), inset -4px -4px 8px rgba(255,255,255,0.7)'
                  : '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6"
          >
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                className="break-inside-avoid mb-6"
                style={{
                  transform: `translateY(${scrollY * 0.02 * (index % 3)}px)`
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-2 text-right">{book.title}</h3>
                    <p className="text-sm mb-2 text-right opacity-90">{book.author}</p>
                    <p className="text-sm text-right opacity-80 line-clamp-2">{book.description}</p>
                  </motion.div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#D4A5A5', color: 'white' }}>
                        {book.category}
                      </span>
                      <Book className="w-5 h-5" style={{ color: '#9B786F' }} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 left-4 z-10 p-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(255,255,255,0.7)'
                  }}
                >
                  <X className="w-6 h-6" style={{ color: '#9B786F' }} />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={selectedBook.imageUrl}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12" dir="rtl">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
                          style={{ backgroundColor: '#D4A5A5', color: 'white' }}>
                      {selectedBook.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right" style={{ color: '#9B786F' }}>
                      {selectedBook.title}
                    </h2>
                    <p className="text-lg mb-6 text-right text-gray-600">{selectedBook.author}</p>
                    <p className="text-gray-700 leading-relaxed mb-8 text-right">{selectedBook.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 rounded-full font-medium text-white transition-all duration-300"
                      style={{
                        backgroundColor: '#9B786F',
                        boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
                      }}
                    >
                      הוסף לסל
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioGallery;