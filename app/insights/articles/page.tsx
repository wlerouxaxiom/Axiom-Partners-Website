'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      title: 'The Future of Manufacturing: Embracing Digital Transformation',
      excerpt: 'How modern manufacturers can leverage technology and lean principles to build competitive advantage in an evolving marketplace. This comprehensive analysis explores the intersection of digital tools and traditional manufacturing excellence.',
      author: 'Wyatt Leroux',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Non-Profit Excellence: Maximizing Impact with Limited Resources',
      excerpt: 'Strategic approaches for non-profit organizations to enhance program effectiveness while maintaining financial sustainability. Learn how to optimize operations and measure impact effectively.',
      author: 'Roisin Djukic',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Non-Profit',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Supply Chain Resilience: Lessons from Recent Global Disruptions',
      excerpt: 'Building robust and flexible supply chains that can adapt to unexpected challenges while maintaining operational efficiency. Key strategies for risk mitigation and agility.',
      author: 'Wyatt Leroux',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Logistics',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Educational Innovation: Transforming Student Success Through Data',
      excerpt: 'How educational institutions can use data analytics and strategic planning to improve student outcomes and institutional effectiveness. Practical frameworks for educational excellence.',
      author: 'Roisin Djukic',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Lean Six Sigma in Modern Organizations: Beyond Manufacturing',
      excerpt: 'Applying lean principles and Six Sigma methodologies across diverse industries to drive operational excellence and continuous improvement.',
      author: 'Wyatt Leroux',
      date: 'December 20, 2024',
      readTime: '5 min read',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Strategic Planning for Uncertain Times: Building Adaptive Organizations',
      excerpt: 'Developing strategic frameworks that enable organizations to thrive in uncertainty while maintaining focus on long-term objectives and sustainable growth.',
      author: 'Roisin Djukic',
      date: 'December 15, 2024',
      readTime: '6 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categoryColors = {
    'Manufacturing': 'bg-blue-100 text-blue-800',
    'Non-Profit': 'bg-green-100 text-green-800',
    'Logistics': 'bg-purple-100 text-purple-800',
    'Education': 'bg-orange-100 text-orange-800',
    'Operations': 'bg-indigo-100 text-indigo-800',
    'Strategy': 'bg-pink-100 text-pink-800'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Student <span className="text-blue-400">Articles</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              In-depth analysis, fresh perspectives, and strategic insights from University of Waterloo 
              students bringing next-generation thinking to consulting challenges across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-slate-100">
                  <div className="relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-slate-500 text-sm mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest student perspectives and next-generation consulting insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}