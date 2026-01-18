'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, ExternalLink } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      title: 'Next-Gen Consulting: A Student Perspective',
      excerpt: 'How University of Waterloo students are bringing fresh perspectives and innovative methodologies to traditional consulting challenges, combining academic rigor with real-world experience.',
      author: 'Wyatt Leroux',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Consulting',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://medium.com/@wleroux_24242/next-gen-consulting-a-student-perspective-0939b0733305',
      isExternal: true
    }
  ];

  return (
    <div className="bg-[#0B0F1A] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Tag */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium tracking-wide">
                ARTICLES
              </span>
            </div>

            {/* Headline */}
            <h1 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6"
            >
              Student <span className="text-blue-400">Articles</span>
            </h1>
            
            <p 
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              In-depth analysis, fresh perspectives, and strategic insights from University of Waterloo 
              students bringing next-generation thinking to consulting challenges across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                <article className="h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-2xl font-light text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2"
                    >
                      {article.title}
                    </h3>
                    
                    <p 
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      className="text-slate-400 mb-4 leading-relaxed text-sm line-clamp-3"
                    >
                      {article.excerpt}
                    </p>
                    
                    {/* Meta info */}
                    <div 
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      className="flex items-center space-x-4 text-slate-500 text-sm mb-4"
                    >
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div 
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        className="flex items-center text-slate-500 text-sm"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link transition-colors"
                      >
                        Read Article
                        <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center">
                <h3 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl font-light text-white mb-4"
                >
                  More Articles <span className="text-blue-400">Coming Soon</span>
                </h3>
                <p 
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto"
                >
                  We're actively working on new insights covering manufacturing efficiency, 
                  non-profit management, financial analysis, and innovative consulting methodologies.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold group/btn"
                >
                  Get Notified of New Articles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-[#111827]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl rounded-3xl p-12 text-center border border-blue-500/20">
                <h2 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl sm:text-4xl font-light text-white mb-4"
                >
                  Have Insights to Share?
                </h2>
                <p 
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  className="text-xl text-white/90 mb-8"
                >
                  We're always looking for fresh perspectives from students and young professionals
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold group/btn"
                >
                  Submit Your Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
