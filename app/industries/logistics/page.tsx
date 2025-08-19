'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle, BarChart3, MapPin, Clock, Award } from 'lucide-react';

export default function Logistics() {
  const solutions = [
    {
      icon: MapPin,
      title: 'Distribution Network Optimization',
      description: 'Strategic network design for optimal coverage and efficiency'
    },
    {
      icon: BarChart3,
      title: 'Warehouse Management',
      description: 'Advanced WMS implementation and inventory optimization'
    },
    {
      icon: Clock,
      title: 'Delivery Excellence',
      description: 'Last-mile optimization and customer service enhancement'
    },
    {
      icon: Award,
      title: 'Technology Integration',
      description: 'Seamless integration of logistics technology solutions'
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
              Streamlining logistics operations, warehouse management, and distribution 
              networks for maximum efficiency and customer satisfaction.
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
              End-to-end logistics optimization for 3PL providers and distribution companies
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
              <h3 className="text-2xl text-blue-600 font-semibold">Regional 3PL Provider Optimization</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A growing 3PL provider faced capacity constraints, inefficient warehouse operations, 
                  and increasing customer demands for faster delivery times while maintaining cost competitiveness.
                </p>
                
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Solution</h4>
                <p className="text-slate-600 leading-relaxed">
                  We optimized their warehouse layout, implemented advanced inventory management systems, 
                  and redesigned their distribution network for improved efficiency and speed.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-6">Results Achieved</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Efficiency Improvement</span>
                    <span className="text-2xl font-bold text-green-600">30%</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">25%</span>
                  </div>
                  <div className="flex items-center justify-between bg-purple-50 rounded-xl p-4">
                    <span className="text-slate-700 font-medium">Order Processing Speed</span>
                    <span className="text-2xl font-bold text-purple-600">40%</span>
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