'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, TrendingUp, Users, Target, Award } from 'lucide-react';

export default function NonProfit() {
  const solutions = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Mission-aligned strategic frameworks that maximize impact and sustainability'
    },
    {
      icon: TrendingUp,
      title: 'Program Evaluation',
      description: 'Comprehensive assessment and optimization of program effectiveness'
    },
    {
      icon: Users,
      title: 'Volunteer Management',
      description: 'Systems and strategies to engage, train, and retain volunteer workforce'
    },
    {
      icon: Award,
      title: 'Fundraising Optimization',
      description: 'Data-driven approaches to diversify funding sources and improve efficiency'
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
            <Heart className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">Non-Profit</span> Impact
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Enhancing operational efficiency, program effectiveness, and sustainable funding 
              models for mission-driven organizations that create positive social impact.
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Non-Profit Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized consulting services designed for the unique needs of non-profit organizations
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
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Success Story</h2>
              <h3 className="text-2xl text-blue-600 font-semibold">Regional Food Bank Transformation</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A regional food bank was struggling with inefficient distribution networks, 
                  high volunteer turnover, and limited capacity to serve growing community needs 
                  during increased demand.
                </p>
                
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Our Approach</h4>
                <p className="text-slate-600 leading-relaxed">
                  We redesigned their distribution network, implemented volunteer engagement programs, 
                  and developed strategic partnerships to expand their reach and impact.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-6">Impact Delivered</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Families Served Increase</span>
                    <span className="text-2xl font-bold text-green-600">50%</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">30%</span>
                  </div>
                  <div className="flex items-center justify-between bg-purple-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Volunteer Retention</span>
                    <span className="text-2xl font-bold text-purple-600">60%</span>
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