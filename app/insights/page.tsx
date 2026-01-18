'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, ExternalLink, Clock } from 'lucide-react';
import NewsletterSubscription from '@/components/NewsletterSubscription';

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

  const upcomingTopics = [
    {
      title: 'Manufacturing Efficiency in Small-Scale Operations',
      category: 'Operations',
      description: 'Exploring lean methodologies and process optimization strategies for small manufacturers.',
      expectedDate: 'Coming February 2025'
    },
    {
      title: 'Non-Profit Management: Strategic Growth',
      category: 'Strategy',
      description: 'How non-profit organizations can leverage business strategy for sustainable impact.',
      expectedDate: 'Coming March 2025'
    },
    {
      title: 'Data-Driven Decision Making for SMBs',
      category: 'Analytics',
      description: 'Practical approaches to implementing data analytics in small and medium businesses.',
      expectedDate: 'Coming March 2025'
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
                INSIGHTS
              </span>
            </div>

            {/* Headline */}
            <h1 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6"
            >
              Student <span className="text-blue-400">Insights</span>
            </h1>
            
            <p 
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Fresh perspectives on consulting, business strategy, and community impact from 
              University of Waterloo students bringing next-generation thinking to traditional challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glass-morphism card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                {/* Featured badge */}
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg">
                    Featured
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    {/* Category */}
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-3xl lg:text-4xl font-light text-white mb-4"
                    >
                      {featuredArticle.title}
                    </h2>

                    {/* Excerpt */}
                    <p 
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      className="text-lg text-slate-400 mb-6 leading-relaxed"
                    >
                      {featuredArticle.excerpt}
                    </p>

                    {/* Meta information */}
                    <div 
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      className="flex flex-wrap items-center gap-6 text-slate-500 mb-8 text-sm"
                    >
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a 
                      href={featuredArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold group/btn"
                    >
                      Read Article
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                    <img 
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Topics Section */}
      <section className="py-20 relative bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-5xl font-light text-white mb-6"
            >
              More Insights <span className="text-blue-400">Coming Soon</span>
            </h2>
            <p 
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
              We're working on bringing you more fresh perspectives from University of Waterloo students.
            </p>
          </motion.div>

          {/* Upcoming articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {topic.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl font-light text-white mb-3"
                  >
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    className="text-slate-400 mb-4 leading-relaxed"
                  >
                    {topic.description}
                  </p>

                  {/* Expected date */}
                  <p 
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    className="text-sm text-slate-500"
                  >
                    {topic.expectedDate}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <NewsletterSubscription />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
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
