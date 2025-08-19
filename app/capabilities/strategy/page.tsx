'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, TrendingUp, Users, BarChart3, Search, Calculator, Map, Award } from 'lucide-react';

export default function Strategy() {
  const approaches = [
    {
      icon: Search,
      title: 'Market Research & Analysis',
      description: 'Comprehensive market dynamics, competitive landscape, and opportunity identification'
    },
    {
      icon: Calculator,
      title: 'Financial Planning & Modeling',
      description: 'Advanced financial forecasting, scenario planning, and investment analysis'
    },
    {
      icon: Map,
      title: 'Strategic Planning & Roadmapping',
      description: 'Clear strategic direction with actionable roadmaps and milestone tracking'
    },
    {
      icon: Award,
      title: 'Performance Measurement',
      description: 'KPI framework design and performance tracking systems implementation'
    }
  ];

  const services = [
    'Competitive analysis and market positioning',
    'Financial forecasting and scenario modeling',
    'Business plan development and validation',
    'KPI framework design and implementation',
    'Strategic roadmap creation',
    'Investment analysis and recommendations'
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
              Strategy & <span className="text-blue-400">Corporate Finance</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive strategic frameworks and financial analysis that align organizational 
              goals with market opportunities and drive sustainable competitive advantage.
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
              A systematic methodology that delivers actionable strategic insights and financial clarity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
              Comprehensive strategic and financial services tailored to your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Comprehensive Strategic Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our strategy and corporate finance services help organizations define clear direction, 
                optimize financial performance, and build sustainable competitive advantages through 
                rigorous analysis and innovative financial modeling.
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
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Excellence Framework</h3>
                <p className="text-slate-600">
                  Our integrated approach combines strategic planning with financial rigor
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Strategic Focus</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Financial Analysis</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Growth Planning</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">Stakeholder Alignment</div>
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
              A systematic approach that ensures strategic initiatives deliver measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research & Analysis', description: 'Market research, competitive analysis, and financial assessment' },
              { step: '02', title: 'Strategy Development', description: 'Strategic framework creation and financial modeling' },
              { step: '03', title: 'Roadmap Planning', description: 'Detailed implementation roadmap with KPI frameworks' },
              { step: '04', title: 'Performance Tracking', description: 'Ongoing monitoring and strategic adjustment support' }
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