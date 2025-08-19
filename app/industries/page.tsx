'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Heart, GraduationCap, Truck } from 'lucide-react';
import { industries } from '@/content/industries';

export default function Industries() {
  const industryIcons = {
    manufacturing: Factory,
    'non-profit': Heart,
    education: GraduationCap,
    logistics: Truck
  };

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
              Industry <span className="text-blue-400">Expertise</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Deep sector knowledge combined with proven methodologies to deliver 
              tailored solutions for industry-specific challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {industries.map((industry, index) => {
              const IconComponent = industryIcons[industry.id as keyof typeof industryIcons];
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {industry.title}
                      </h3>
                    </div>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {industry.longDescription}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-slate-800">Key Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.slice(0, 3).map((solution) => (
                          <li key={solution} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-slate-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={`/industries/${industry.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                    >
                      Explore {industry.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}