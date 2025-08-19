'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Cog, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategy & Corporate Finance',
      description: 'Comprehensive strategic frameworks and financial analysis that align organizational goals with market opportunities and drive sustainable competitive advantage.',
      href: '/capabilities/strategy',
      features: ['Market Research', 'Financial Analysis', 'Strategic Planning', 'Competitive Intelligence']
    },
    {
      icon: Cog,
      title: 'Operations',
      description: 'Process optimization and operational transformation that enhances efficiency, reduces costs, and improves quality across all business functions.',
      href: '/capabilities/operations',
      features: ['Process Optimization', 'Efficiency Improvements', 'Workflow Analysis', 'Performance Metrics']
    },
    {
      icon: Wrench,
      title: 'Implementation & Build',
      description: 'Custom systems development and technology solutions that transform strategic initiatives into operational reality with measurable results.',
      href: '/capabilities/implementation',
      features: ['Custom Systems', 'Tailored Applications', 'Technology Solutions', 'Integration Support']
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
            Our <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive consulting solutions that transform challenges into opportunities, 
            driving measurable outcomes across strategy, operations, and implementation.
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