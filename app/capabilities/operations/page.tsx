'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cog, BarChart3, Zap, Settings, Search, Map, TrendingUp, Users } from 'lucide-react';

export default function Operations() {
  const approaches = [
    {
      icon: Search,
      title: 'Current State Assessment',
      description: 'Comprehensive analysis of existing processes, workflows, and performance metrics'
    },
    {
      icon: Map,
      title: 'Process Mapping & Analysis',
      description: 'Detailed mapping of current processes and identification of improvement opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Enhancement',
      description: 'Implementation of lean principles and efficiency improvements across operations'
    },
    {
      icon: Users,
      title: 'Implementation Support',
      description: 'Change management and training to ensure successful implementation and adoption'
    }
  ];

  const services = [
    'Workflow optimization and process redesign',
    'Cost reduction strategies and implementation',
    'Quality improvement programs',
    'Resource allocation optimization',
    'Performance measurement systems',
    'Change management and training'
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
              Operations <span className="text-blue-400">Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Process optimization and operational transformation that enhances efficiency, 
              reduces costs, and improves quality across all business functions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic methodology that transforms operations through analysis, optimization, and implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-slate-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <approach.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{approach.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Services Include</h2>
            <p className="text-xl text-slate-600">
              Comprehensive operational improvement services that drive efficiency and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Operational Excellence Solutions
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our operations consulting services help organizations streamline processes, 
                reduce costs, and improve quality through proven methodologies and best practices.
              </p>
              <div className="space-y-4">
                {services.map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Operations Excellence Framework</h3>
                <p className="text-slate-600">
                  Proven methodologies that deliver measurable operational improvements
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Cog className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Process Optimization</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Performance Analytics</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Efficiency Enhancement</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">System Integration</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Implementation Process</h2>
            <p className="text-xl text-slate-600">
              A structured approach that ensures successful operational transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Current state analysis and performance baseline establishment' },
              { step: '02', title: 'Analysis', description: 'Process mapping and identification of improvement opportunities' },
              { step: '03', title: 'Optimization', description: 'Implementation of efficiency improvements and best practices' },
              { step: '04', title: 'Support', description: 'Change management and ongoing performance monitoring' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{phase.title}</h3>
                <p className="text-slate-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}