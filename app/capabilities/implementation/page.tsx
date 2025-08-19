'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Calendar, BarChart3, Award, Search, Lightbulb, Code, GraduationCap } from 'lucide-react';

export default function Implementation() {
  const approaches = [
    {
      icon: Search,
      title: 'Requirements Analysis',
      description: 'Comprehensive analysis of business requirements and technical specifications'
    },
    {
      icon: Lightbulb,
      title: 'Solution Design',
      description: 'Custom solution architecture and design tailored to organizational needs'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Development of custom applications and system integrations'
    },
    {
      icon: GraduationCap,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing technical support'
    }
  ];

  const services = [
    'Custom applications development',
    'System integrations and API development',
    'Process automation solutions',
    'Technology solutions implementation',
    'Database design and optimization',
    'User training and documentation'
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
              Implementation & <span className="text-blue-400">Build</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Custom systems development and technology solutions that transform strategic 
              initiatives into operational reality with measurable results.
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
              A systematic methodology that transforms requirements into custom solutions
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
                className="group"
              >
                <div className="bg-slate-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
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
              Comprehensive development and implementation services that deliver results
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
                Custom Development Solutions
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our implementation and build services transform strategic plans into operational 
                reality through custom systems development and technology solutions.
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
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Technology Excellence</h3>
                <p className="text-slate-600">
                  Modern development practices and proven technology solutions
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Custom Development</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">System Integration</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Process Automation</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Training & Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
              A structured approach that ensures successful delivery and adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirements', description: 'Detailed analysis of business requirements and technical specifications' },
              { step: '02', title: 'Design', description: 'Solution architecture and custom design development' },
              { step: '03', title: 'Development', description: 'Custom application development and system integration' },
              { step: '04', title: 'Training', description: 'User training and ongoing technical support delivery' }
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

      {/* Success Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Delivery Excellence</h2>
            <p className="text-xl text-slate-600">
              Our track record of successful implementations and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-700 font-medium">On-Time Delivery</div>
              <p className="text-slate-600 text-sm mt-2">Projects completed within agreed timelines</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-slate-700 font-medium">Budget Adherence</div>
              <p className="text-slate-600 text-sm mt-2">Projects delivered within budget</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-slate-700 font-medium">Client Satisfaction</div>
              <p className="text-slate-600 text-sm mt-2">Clients satisfied with implementation results</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}