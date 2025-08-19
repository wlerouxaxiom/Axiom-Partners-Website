'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, CheckCircle, TrendingUp, Settings, Award, Users } from 'lucide-react';

export default function Manufacturing() {
  const solutions = [
    {
      icon: Settings,
      title: 'Lean Manufacturing',
      description: 'Implementing lean principles to eliminate waste and optimize production flow'
    },
    {
      icon: TrendingUp,
      title: 'Supply Chain Optimization',
      description: 'Streamlining supply chain processes for improved efficiency and cost reduction'
    },
    {
      icon: Award,
      title: 'Quality Management',
      description: 'Developing robust quality systems and continuous improvement processes'
    },
    {
      icon: Users,
      title: 'Workforce Development',
      description: 'Training programs and organizational development for manufacturing excellence'
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
            <Factory className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">Manufacturing</span> Excellence
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Optimizing production processes, supply chain efficiency, and quality management 
              systems for manufacturing excellence and competitive advantage.
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Manufacturing Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions that address the unique challenges of modern manufacturing
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
                <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                  <solution.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Case Study Highlight</h2>
              <h3 className="text-2xl text-blue-600 font-semibold">Automotive Parts Manufacturer</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A mid-size automotive parts manufacturer was struggling with high defect rates, 
                  inefficient production processes, and rising costs that threatened their competitiveness 
                  in a demanding market.
                </p>
                
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Solution</h4>
                <p className="text-slate-600 leading-relaxed">
                  We implemented a comprehensive lean manufacturing program, including value stream 
                  mapping, quality management systems, and workforce training initiatives.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-6">Results Achieved</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">25%</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Defect Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex items-center justify-between bg-purple-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Productivity Increase</span>
                    <span className="text-2xl font-bold text-purple-600">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}