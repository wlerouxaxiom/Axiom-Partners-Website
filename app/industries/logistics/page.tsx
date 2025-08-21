'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle, BarChart3, MapPin, Clock, Award } from 'lucide-react';

export default function Logistics() {
  const solutions = [
    {
      icon: BarChart3,
      title: 'Cost Analysis & Reduction',
      description: 'Transportation cost modeling, warehouse expense analysis, and margin optimization by route and customer'
    },
    {
      icon: Award,
      title: 'Financial Controls & KPI Dashboards',
      description: 'Performance measurement systems, cash flow management, and financial process automation'
    },
    {
      icon: MapPin,
      title: 'Route & Network Optimization',
      description: 'Distribution center location analysis, delivery route efficiency studies, and capacity utilization improvement'
    },
    {
      icon: Clock,
      title: 'Technology Implementation Support',
      description: 'WMS/TMS selection and ROI analysis, system integration planning, and change management'
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
            <Truck className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-400">Logistics</span> & 3PL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Financial analysis, process optimization, and strategic planning solutions 
              for logistics companies and 3PL providers seeking operational efficiency.
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Logistics Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Data-driven financial analysis and process optimization for logistics and 3PL companies
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