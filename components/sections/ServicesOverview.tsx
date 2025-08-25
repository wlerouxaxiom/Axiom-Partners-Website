'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Settings, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: 'Data-Driven Growth',
      description: 'Automated market analysis, real-time financial modeling, and performance dashboards that update automatically—no more manual reporting.',
      href: '/capabilities/strategy',
      features: ['Automated Market Analysis', 'Real-time Financial Modeling', 'Performance Dashboards', 'Competitive Intelligence']
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Workflow automation that eliminates manual tasks, AI-powered optimization, and integration solutions that connect your systems seamlessly.',
      href: '/capabilities/operations',
      features: ['Workflow Automation', 'AI-Powered Optimization', 'System Integration', 'Continuous Improvement']
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored automation frameworks, end-to-end deployment with guaranteed adoption, and ongoing optimization based on real performance data.',
      href: '/capabilities/implementation',
      features: ['Custom Automation Systems', 'End-to-end Deployment', 'Performance-based Optimization', 'Integration Support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-blue-600">Automation Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Purpose-built automation systems that eliminate manual processes and deliver 
            measurable results in weeks, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;