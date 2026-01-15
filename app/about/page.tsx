'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Calendar, Lightbulb, Building, Award } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      date: 'June 2025',
      title: 'The Inspiration',
      description: 'Wyatt Leroux and Roisin Djukic identified a critical gap in the consulting market: firms that could deliver both strategic insight and operational execution for growing businesses.',
      icon: Lightbulb
    },
    {
      date: 'July 2025',
      title: 'Axiom Partners Founded',
      description: 'Established with a clear mission: to provide boutique consulting excellence that bridges strategy and operations for small and medium enterprises.',
      icon: Building
    },
    {
      date: 'August 2025',
      title: 'Practice Development',
      description: 'Launched our dual-practice model focusing on Strategy and Operations, combining analytical rigor with hands-on implementation support.',
      icon: Target
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We bring top-tier analytical frameworks and strategic thinking to every engagement, regardless of size.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Deep collaboration with clients, working alongside teams to build lasting capabilities.'
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'Measurable results that translate strategic recommendations into operational reality.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 text-xs tracking-[0.3em] text-slate-400 border border-slate-700/50 rounded-full">
                ABOUT US
              </span>
            </div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              About <span className="italic">Axiom Partners</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A boutique strategy and operations consulting firm founded by University of Waterloo 
              graduates with a vision to deliver integrated consulting excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 bg-gradient-to-b from-[#0B0F1A] to-[#111827]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 
              className="text-3xl sm:text-4xl font-light text-white mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <span className="italic">Mission</span>
            </h2>
            <div className="p-12 bg-white/5 backdrop-blur-sm border border-white/10">
              <p 
                className="text-2xl text-white font-light leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                To empower growing organizations with integrated consulting that transforms 
                strategic vision into operational reality, delivering the analytical rigor of 
                top-tier firms with the agility and attention of a boutique practice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <span className="italic">Values</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                  <div className="w-14 h-14 mb-6 text-blue-400 transition-transform duration-500 group-hover:scale-110">
                    <value.icon className="w-full h-full" strokeWidth={1.5} />
                  </div>
                  <h3 
                    className="text-2xl font-light text-white mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative py-20 bg-gradient-to-b from-[#111827] to-[#0B0F1A]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <span className="italic">Journey</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Key milestones in the formation of Axiom Partners
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/10 border border-blue-400/30 rounded-full">
                  <event.icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1 p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-500 tracking-wide">{event.date}</span>
                  </div>
                  <h3 
                    className="text-2xl font-light text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative py-20 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 
                className="text-4xl sm:text-5xl font-light text-white mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Founded by <span className="italic">Excellence</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Wyatt Leroux and Roisin Djukic bring together expertise in Accounting & 
                Financial Management from the University of Waterloo, combined with 
                experience from leading consulting firms.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Their vision: to create a consulting firm that delivers strategic sophistication 
                without losing sight of practical implementation and client partnership.
              </p>
              <Link 
                href="/about/leadership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 group"
              >
                <Users className="w-5 h-5" />
                <span className="font-medium tracking-wide">Meet Our Leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-light text-blue-400 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2025</div>
                  <div className="text-slate-400">Founded</div>
                </div>
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-light text-blue-400 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SME</div>
                  <div className="text-slate-400">Focused</div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-light text-blue-400 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>UW</div>
                  <div className="text-slate-400">Alumni</div>
                </div>
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-light text-blue-400 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2</div>
                  <div className="text-slate-400">Core Practices</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-20 bg-gradient-to-b from-[#0B0F1A] to-[#111827]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Learn <span className="italic">More</span>
            </h2>
            <p className="text-lg text-slate-400">
              Explore our leadership, mission, and story
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Leadership', icon: Users, href: '/about/leadership', description: 'Meet our founding partners' },
              { title: 'Mission & Values', icon: Target, href: '/about/mission', description: 'Our purpose and principles' },
              { title: 'Our Story', icon: Award, href: '/about/history', description: 'The journey so far' }
            ].map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link href={link.href}>
                  <div className="group h-full p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                    <link.icon className="w-12 h-12 text-blue-400 mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    <h3 
                      className="text-2xl font-light text-white mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {link.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{link.description}</p>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
