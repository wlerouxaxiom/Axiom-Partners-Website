'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, ExternalLink } from 'lucide-react';
import NewsletterSubscription from '@/components/NewsletterSubscription'; // Adjust path as needed

export default function Insights() {
  const featuredArticle = {
    title: 'Next-Gen Consulting: A Student Perspective',
    excerpt: 'How University of Waterloo students are bringing fresh perspectives and innovative methodologies to traditional consulting challenges, combining academic rigor with real-world experience.',
    author: 'Wyatt Leroux',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Consulting',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://medium.com/@wleroux_24242/next-gen-consulting-a-student-perspective-0939b0733305'
  };

  const categoryColors = {
    'Consulting': 'bg-blue-100 text-blue-800',
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
              Student <span className="text-blue-400">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Fresh perspectives on consulting, business strategy, and community impact from 
              University of Waterloo students bringing next-generation thinking to traditional challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Featured
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[featuredArticle.category as keyof typeof categoryColors]}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-slate-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <a 
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                  >
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="relative">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">More Insights Coming Soon</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              We're working on bringing you more fresh perspectives from University of Waterloo students 
              on consulting, business strategy, and community impact. Stay tuned for upcoming articles 
              covering manufacturing efficiency, non-profit management, and innovative consulting methodologies.
            </p>
            
            <NewsletterSubscription />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
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
