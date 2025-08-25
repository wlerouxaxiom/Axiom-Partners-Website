'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Heart, GraduationCap, Truck, Zap, Clock, BarChart3 } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      shortDescription: 'Smart factory automation that eliminates manual tracking',
      automationFocus: 'Real-time production monitoring, AI-powered cost optimization, and predictive maintenance that delivers 40% efficiency gains within 60 days.',
      outcomes: ['40% efficiency improvement', '25% cost reduction', '60-day implementation'],
      solutions: [
        'Automated production tracking and quality control',
        'Predictive maintenance scheduling and alerts',
        'Real-time cost analysis and optimization'
      ],
      icon: Factory
    },
    {
      id: 'non-profit',
      title: 'Non-Profit',
      shortDescription: 'Mission-driven automation that eliminates administrative burden',
      automationFocus: 'Automated donor management, grant tracking, and impact measurement that frees up 60% of administrative time for mission-critical work.',
      outcomes: ['60% less paperwork', '35% donor retention boost', '20+ hours saved weekly'],
      solutions: [
        'Automated donor workflows and communications',
        'Smart grant deadline tracking and compliance',
        'Real-time impact measurement dashboards'
      ],
      icon: Heart
    },
    {
      id: 'education',
      title: 'Education',
      shortDescription: 'Student success automation that prevents failures before they happen',
      automationFocus: 'Early warning systems, automated administrative processes, and performance tracking that improves retention by 25% while saving 15+ hours per week.',
      outcomes: ['25% better retention', '40% less admin work', '15+ hours saved weekly'],
      solutions: [
        'Automated student success analytics and alerts',
        'Streamlined enrollment and scheduling workflows',
        'Real-time performance tracking and reporting'
      ],
      icon: GraduationCap
    },
    {
      id: 'logistics',
      title: 'Logistics & 3PL',
      shortDescription: 'Supply chain intelligence that optimizes every mile and dollar',
      automationFocus: 'AI-powered route optimization, inventory intelligence, and supply chain visibility that cuts operational costs by 25-30% while improving delivery performance.',
      outcomes: ['25% cost reduction', '30% inventory savings', '40% better satisfaction'],
      solutions: [
        'AI-powered route optimization and planning',
        'Automated inventory management and forecasting',
        'Real-time supply chain visibility and tracking'
      ],
      icon: Truck
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry <span className="text-blue-400">Automation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Purpose-built automation solutions that eliminate manual processes and deliver 
              measurable results in weeks, not months. We don't just understand your industry—we transform it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Industry-Specific Automation Matters */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Generic Consulting vs. Industry-Specific Automation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3">Traditional Approach</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• One-size-fits-all consulting frameworks</li>
                  <li>• Generic process improvements</li>
                  <li>• Months to see any results</li>
                  <li>• Expensive hourly consulting fees</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Our Automation-First Method</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Industry-specific automation solutions</li>
                  <li>• Working systems deployed immediately</li>
                  <li>• Results visible within 30-60 days</li>
                  <li>• Outcome-based pricing and guarantees</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Automation Solutions by Industry
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each industry has unique operational challenges. Our automation solutions are 
              purpose-built to address your specific pain points with measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border border-transparent hover:border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-lg font-medium text-slate-700 mb-4">
                    {industry.shortDescription}
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {industry.automationFocus}
                  </p>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                      Typical Results
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.outcomes.map((outcome, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-slate-800">Automation Solutions</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-start">
                          <Zap className="w-4 h-4 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={`/industries/${industry.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    Explore {industry.title} Automation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Industry-Specific Automation */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Industry-Specific Automation Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Generic consulting advice doesn't work because every industry has unique operational challenges. 
              Our automation solutions are built specifically for your sector's pain points.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Purpose-Built Solutions</h3>
              <p className="text-slate-600">
                Every automation system is designed specifically for your industry's workflows, 
                not adapted from generic templates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Rapid Deployment</h3>
              <p className="text-slate-600">
                Because we understand your industry, we can deploy working solutions 
                in weeks instead of months.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Measurable Impact</h3>
              <p className="text-slate-600">
                Industry-specific metrics and KPIs ensure you see concrete results 
                that matter to your business.
              </p>
            </motion.div>
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
              Ready to Automate Your Industry Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stop managing with manual processes and spreadsheets. See how our industry-specific 
              automation solutions can deliver measurable results in your first month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Industry Assessment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Success Stories
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}