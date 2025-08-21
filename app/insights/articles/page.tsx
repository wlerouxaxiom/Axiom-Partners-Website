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
      // Add actual links here - replace with real URLs when you publish articles
      url: 'https://medium.com/@wyattleroux/next-gen-consulting-student-perspective',
      isExternal: true
    },
    {
      title: 'Financial Analysis for Small Business Growth',
      excerpt: 'Practical frameworks for SMEs to leverage financial data for strategic decision-making and sustainable growth in competitive markets.',
      author: 'Wyatt Leroux',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Finance',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://linkedin.com/pulse/financial-analysis-small-business-wyatt-leroux',
      isExternal: true
    },
    {
      title: 'Process Automation in Professional Services',
      excerpt: 'Lessons learned from implementing automation solutions at Big 4 consulting firms and how smaller firms can adopt similar efficiencies.',
      author: 'Roisin Djukic',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://medium.com/@roisindjukic/process-automation-professional-services',
      isExternal: true
    }
  ];

  const categoryColors = {
    'Consulting': 'bg-blue-100 text-blue-800',
    'Finance': 'bg-green-100 text-green-800',
    'Operations': 'bg-purple-100 text-purple-800',
    'Strategy': 'bg-orange-100 text-orange-800'
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
                      {article.isExternal ? (
                        <a 
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                        >
                          Read Article
                          <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link 
                          href={article.url}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                        >
                          Read Article
                          <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Have Insights to Share?</h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for fresh perspectives from students and young professionals
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
            >
              Submit Your Article
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}