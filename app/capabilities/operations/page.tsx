'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Cog, BarChart3, Zap, Settings, Search, Map, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function Operations() {
  const offerings = [
    {
      icon: Search,
      title: 'Current State Assessment',
      description: 'Comprehensive analysis of existing processes, workflows, and performance metrics',
      capabilities: [
        'Process documentation and mapping',
        'Performance baseline establishment',
        'Bottleneck identification',
        'Resource utilization analysis'
      ]
    },
    {
      icon: Map,
      title: 'Process Optimization',
      description: 'Detailed mapping and redesign of workflows for maximum efficiency',
      capabilities: [
        'Value stream mapping',
        'Lean methodology implementation',
        'Workflow redesign and automation',
        'Standard operating procedures'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Enhancement',
      description: 'Implementation of improvements that drive measurable results',
      capabilities: [
        'Cost reduction initiatives',
        'Quality improvement programs',
        'Capacity optimization',
        'Performance measurement systems'
      ]
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Ensure successful adoption and sustainable operational improvements',
      capabilities: [
        'Stakeholder engagement strategy',
        'Training program development',
        'Implementation support',
        'Continuous improvement culture'
      ]
    }
  ];

  const approach = [
    {
      phase: 'Assess',
      description: 'Comprehensive evaluation of current operations, performance metrics, and pain points through data analysis and stakeholder interviews.'
    },
    {
      phase: 'Analyze',
      description: 'Deep-dive process mapping, root cause analysis, and identification of optimization opportunities across the value chain.'
    },
    {
      phase: 'Optimize',
      description: 'Design and implement process improvements, efficiency initiatives, and performance measurement systems.'
    },
    {
      phase: 'Sustain',
      description: 'Change management, training delivery, and ongoing support to ensure lasting operational excellence.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 text-xs tracking-[0.3em] text-slate-400 border border-slate-700/50 rounded-full">
                CAPABILITIES
              </span>
            </div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Operations <span className="italic">Excellence</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Transform operational performance through systematic process optimization, 
              efficiency enhancement, and sustainable improvement initiatives that deliver 
              measurable results.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 group"
            >
              <span className="font-medium tracking-wide">Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
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
              Operational <span className="italic">Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions to streamline processes and enhance performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <div className="relative h-full p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 text-blue-400 transition-transform duration-500 group-hover:scale-110">
                    <offering.icon className="w-full h-full" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-light text-white mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {offering.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2">
                    {offering.capabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-3">
                        <div className="w-1 h-1 mt-2 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm text-slate-400">{capability}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/5 transition-opacity duration-500 group-hover:border-blue-400/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-[#111827]">
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
              Our <span className="italic">Approach</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful operational transformation
            </p>
          </motion.div>

          <div className="space-y-6">
            {approach.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/10 border border-blue-400/30 rounded-full">
                  <span className="text-blue-400 font-medium">{index + 1}</span>
                </div>
                <div>
                  <h3 
                    className="text-2xl font-light text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.phase}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#111827] to-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 
                className="text-4xl sm:text-5xl font-light text-white mb-8 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Why Choose <span className="italic">Axiom?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/20 rounded-full">
                    <Cog className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Practical Expertise
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Real-world operational experience combined with proven methodologies 
                      from leading consulting frameworks, tailored to your organization's scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/20 rounded-full">
                    <BarChart3 className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Data-Driven Results
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Every recommendation is backed by rigorous analysis and clear metrics, 
                      ensuring measurable improvements in efficiency and performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/20 rounded-full">
                    <Settings className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Implementation Support
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      We work alongside your team to implement changes, train staff, and 
                      ensure improvements are sustainable long after our engagement ends.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="p-12 bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-8">
                  <h3 
                    className="text-3xl font-light text-white mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Excellence Framework
                  </h3>
                  <p className="text-slate-400">
                    Core pillars of operational transformation
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <Cog className="w-10 h-10 text-blue-400 mb-4 mx-auto" strokeWidth={1.5} />
                    <div className="text-center text-sm font-medium text-white">Process Optimization</div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <BarChart3 className="w-10 h-10 text-blue-400 mb-4 mx-auto" strokeWidth={1.5} />
                    <div className="text-center text-sm font-medium text-white">Performance Analytics</div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <Zap className="w-10 h-10 text-blue-400 mb-4 mx-auto" strokeWidth={1.5} />
                    <div className="text-center text-sm font-medium text-white">Efficiency Enhancement</div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <Settings className="w-10 h-10 text-blue-400 mb-4 mx-auto" strokeWidth={1.5} />
                    <div className="text-center text-sm font-medium text-white">System Integration</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="text-4xl sm:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to Optimize Your <span className="italic">Operations?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Let's discuss how operational excellence can transform your business performance
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 group text-lg font-medium"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
