'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, TrendingUp, FileText } from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      title: 'Next-Gen Consulting: A Student Perspective',
      excerpt: 'How University of Waterloo students are bringing fresh perspectives and innovative methodologies to traditional consulting challenges, combining academic rigor with real-world experience.',
      author: 'Wyatt Leroux',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Consulting',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Pro Bono Consulting: Community Impact Through Accessible Services',
      excerpt: 'Exploring how pro bono consulting services can transform local communities and small businesses while providing valuable experience for next-generation consultants.',
      author: 'Roisin Djukic',
      date: 'January 10, 2025',
      readTime: '4 min read',
      category: 'Community',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Manufacturing Efficiency in Small Business: Practical Solutions',
      excerpt: 'How small and medium manufacturers can implement lean principles and efficiency improvements without large capital investments, based on real client experiences.',
      author: 'Wyatt Leroux',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Non-Profit Financial Management: Maximizing Impact with Limited Resources',
      excerpt: 'Strategic financial management approaches that help non-profit organizations optimize their resources while maintaining program effectiveness and sustainability.',
      author: 'Roisin Djukic',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Non-Profit',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categoryColors = {
    'Consulting': 'bg-blue-100 text-blue-800',
    'Community': 'bg-green-100 text-green-800',
    'Manufacturing': 'bg-purple-100 text-purple-800',
    'Non-Profit': 'bg-green-100 text-green-800',
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[articles[0].category as keyof typeof categoryColors]}`}>
                      {articles[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-slate-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{articles[0].date}</span>
                    </div>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <Link 
                    href="/insights/articles"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Student Perspectives</h2>
            <p className="text-xl text-slate-600">
              Fresh insights from University of Waterloo students on consulting and business strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href="/insights/articles">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-slate-500 text-sm">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/insights/articles"
              className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors group"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}