'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, BarChart3, Settings, Clock, CheckCircle } from 'lucide-react';

export default function Manufacturing() {
  const solutions = [
    {
      icon: Zap,
      title: 'Smart Production Monitoring',
      description: 'Automated real-time production tracking, quality control alerts, and performance dashboards that eliminate manual data collection and provide instant visibility into operations'
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization Automation',
      description: 'AI-powered cost analysis, automated expense tracking, and predictive maintenance scheduling that reduces overhead by 25-40% within 60 days'
    },
    {
      icon: Settings,
      title: 'Workflow Integration Systems',
      description: 'Custom automation solutions connecting your ERP, inventory, and production systems for seamless data flow and automated reporting'
    },
    {
      icon: Clock,
      title: 'Rapid Implementation Support',
      description: '30-day deployment guarantee with full training, system integration, and ongoing optimization to ensure immediate productivity gains'
    }
  ];

  const outcomes = [
    { metric: '40%', description: 'Reduction in manual tracking time' },
    { metric: '25%', description: 'Lower operational costs' },
    { metric: '60%', description: 'Faster reporting cycles' },
    { metric: '30', description: 'Days to full deployment' }
  ];

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
            <Factory className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart <span className="text-blue-400">Manufacturing</span> Automation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stop drowning in spreadsheets and manual tracking. Our automation-first solutions deliver 
              real-time production visibility, cost optimization, and quality control—with results visible in weeks, not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Contrast */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-red-800 mb-4">Traditional Manufacturing Challenges</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Hours spent on manual data entry</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Reactive maintenance causing downtime</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Disconnected systems and data silos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Weekly/monthly reports that are already outdated</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Automation-First Solutions</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Automated data collection and real-time dashboards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Predictive maintenance alerts and scheduling</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Integrated systems with seamless data flow</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Live performance metrics updated every minute</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Manufacturing Automation Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Purpose-built automation systems that eliminate manual processes and deliver immediate productivity gains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full border border-transparent hover:border-blue-200">
                  <solution.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Guaranteed Results</h2>
            <p className="text-xl text-slate-600">
              Real outcomes our manufacturing clients see within the first 90 days
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-md"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{outcome.metric}</div>
                <div className="text-slate-700 text-sm font-medium">{outcome.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Manufacturing Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              See how our automation solutions can eliminate manual processes and deliver 
              measurable results in your first month. No long consulting engagements—just working systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Automation Assessment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                See Case Studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}