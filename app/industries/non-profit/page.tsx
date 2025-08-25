'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';

export default function NonProfit() {
  const solutions = [
    {
      icon: Users,
      title: 'Automated Donor Management',
      description: 'Smart donor tracking, automated thank-you workflows, and predictive giving analysis that increases retention by 35% while eliminating manual data entry'
    },
    {
      icon: BarChart3,
      title: 'Grant Tracking & Compliance',
      description: 'Automated grant application tracking, compliance monitoring, and impact reporting that ensures 100% on-time submissions and reduces administrative burden by 60%'
    },
    {
      icon: Zap,
      title: 'Impact Measurement Dashboards',
      description: 'Real-time program effectiveness tracking, outcome measurement automation, and stakeholder reporting that demonstrates mission impact with data-driven proof'
    },
    {
      icon: Clock,
      title: 'Volunteer & Program Automation',
      description: 'Automated volunteer scheduling, program registration systems, and resource allocation tools that free up 20+ hours per week for mission-critical work'
    }
  ];

  const outcomes = [
    { metric: '60%', description: 'Less time on paperwork' },
    { metric: '35%', description: 'Higher donor retention' },
    { metric: '100%', description: 'On-time grant submissions' },
    { metric: '20+', description: 'Hours saved per week' }
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
            <Heart className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mission-Driven <span className="text-blue-400">Automation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stop spending 60% of your time on paperwork and administrative tasks. Our automation solutions 
              let you focus on your mission while technology handles donor management, grant tracking, and impact reporting automatically.
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
              <h3 className="text-xl font-bold text-red-800 mb-4">Non-Profit Administrative Burden</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Manual donor data entry and thank-you letters</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Spreadsheet-based grant tracking and deadlines</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Hours spent on compliance reporting</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Volunteer coordination through email chains</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Manual impact measurement and reporting</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Mission-Focused Automation</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Automated donor workflows and personalized communications</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Smart grant deadline tracking with auto-alerts</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>One-click compliance reports and impact summaries</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Self-service volunteer scheduling and management</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Real-time program outcome tracking and visualization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Impact Statement */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              More Time for Mission, Less Time for Management
            </h2>
            <p className="text-xl text-blue-100">
              Our automation solutions are designed specifically for non-profits who want to maximize 
              their impact, not their administrative overhead. Every hour saved on paperwork is an hour 
              spent changing lives.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Non-Profit Automation Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Purpose-built systems that eliminate administrative burden so you can focus on what matters most
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Proven Mission Impact</h2>
            <p className="text-xl text-slate-600">
              Real results our non-profit clients achieve within their first 90 days
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

      {/* Pro Bono Highlight */}
      <section className="py-16 bg-green-50 border-y border-green-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Pro Bono Services for Qualifying Organizations
            </h2>
            <p className="text-green-700 text-lg">
              We believe in supporting organizations making a difference. Qualifying non-profits 
              may be eligible for reduced-rate or pro bono automation implementations.
            </p>
          </motion.div>
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
              Ready to Automate Your Mission-Critical Work?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let us handle the administrative burden so you can focus on changing lives. 
              See how our automation solutions can free up 20+ hours per week for your real work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Mission Assessment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 rounded-xl font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Learn About Pro Bono Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}