'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target } from 'lucide-react';

export default function WhatIsAxiom() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0B0F1A] to-[#111827] overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 text-xs tracking-[0.3em] text-slate-400 border border-slate-700/50 rounded-full">
              WHO WE ARE
            </span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What is <span className="italic">Axiom?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A boutique strategy and operations consulting firm dedicated to helping 
            organizations translate vision into execution.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 
              className="text-3xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Boutique Excellence,
              <br />
              <span className="italic">Comprehensive Impact</span>
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Axiom Partners is a specialized consulting firm that bridges the gap between 
                strategic planning and operational reality. We work with ambitious organizations 
                that need more than recommendations—they need results.
              </p>
              <p>
                Our approach combines the analytical rigor of top-tier strategy firms with 
                hands-on operational expertise. We don't just tell you what to do; we help 
                you do it.
              </p>
              <p>
                As a boutique firm, we offer personalized attention and deep engagement that 
                larger consultancies cannot match, while maintaining the same level of 
                strategic sophistication.
              </p>
            </div>
          </motion.div>

          {/* Right: Key Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Strategy Focus */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-blue-400">
                  <Target className="w-full h-full" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-light text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Strategy Practice
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Strategic planning, market analysis, and growth roadmapping that 
                    aligns with your organizational objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Operations Focus */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-slate-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-slate-400">
                  <Building2 className="w-full h-full" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-light text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Operations Practice
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Process optimization, workflow design, and implementation support 
                    that transforms strategy into measurable outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Focus */}
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 text-amber-400">
                  <Users className="w-full h-full" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-light text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Client Partnership
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Deep, collaborative engagements where we work alongside your team 
                    to build capabilities and drive lasting change.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote/Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-block max-w-4xl px-12 py-8 bg-white/5 backdrop-blur-sm border border-white/10">
            <p 
              className="text-2xl text-white font-light leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We are <span className="italic">strategy consultants</span> who understand operations,
              <br />
              and <span className="italic">operations consultants</span> who understand strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
