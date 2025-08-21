'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, TrendingUp, Users, Target, Award } from 'lucide-react';

export default function NonProfit() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Financial Management & Controls',
      description: 'Budget optimization, grant tracking systems, and financial reporting for transparency and compliance'
    },
    {
      icon: Target,
      title: 'Strategic Planning & Impact Measurement',
      description: 'Mission-aligned strategic frameworks with data-driven impact assessment and outcome tracking'
    },
    {
      icon: Award,
      title: 'Fundraising Analytics & Optimization',
      description: 'Donor analysis, campaign ROI measurement, and diversification strategies for sustainable funding'
    },
    {
      icon: Users,
      title: 'Operational Efficiency & Process Automation',
      description: 'Workflow optimization, volunteer management systems, and administrative cost reduction'
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
              Financial analysis, operational efficiency, and strategic planning solutions 
              for non-profit organizations seeking to maximize their mission impact.
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
              Data-driven financial and operational consulting for mission-driven organizations
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
    </div>
  );
}