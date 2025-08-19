'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/content/services';

export default function Capabilities() {
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
              Our <span className="text-blue-400">Capabilities</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting services that transform challenges into opportunities 
              and drive sustainable organizational success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-4xl font-bold text-slate-800">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.longDescription}</p>

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.keyBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={`/capabilities/${service.id}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {service.methodologies.slice(0, 4).map((methodology) => (
                        <div key={methodology} className="bg-white rounded-xl p-4 shadow-md">
                          <div className="text-sm font-medium text-slate-700">{methodology}</div>
                        </div>
                      ))}
                    </div>
                    {service.caseStudyHighlight && (
                      <div className="mt-6 bg-blue-600 text-white rounded-xl p-6">
                        <div className="text-sm font-medium mb-2">Case Study Highlight</div>
                        <div className="text-sm">{service.caseStudyHighlight}</div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}