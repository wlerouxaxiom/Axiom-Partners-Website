'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, BarChart3, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function Logistics() {
  const solutions = [
    {
      icon: Zap,
      title: 'Route Optimization Automation',
      description: 'AI-powered route planning, dynamic load balancing, and real-time delivery optimization that cuts transportation costs by 25% and improves on-time delivery rates'
    },
    {
      icon: BarChart3,
      title: 'Inventory Intelligence Systems',
      description: 'Automated stock level monitoring, predictive demand forecasting, and just-in-time replenishment that reduces carrying costs by 30% while preventing stockouts'
    },
    {
      icon: MapPin,
      title: 'Supply Chain Visibility Platform',
      description: 'End-to-end shipment tracking, automated customer notifications, and performance analytics that eliminate manual status updates and improve customer satisfaction by 40%'
    },
    {
      icon: Clock,
      title: 'Warehouse Management Integration',
      description: 'Automated picking optimization, inventory synchronization, and labor management systems that increase warehouse efficiency by 35% with same-day deployment'
    }
  ];

  const outcomes = [
    { metric: '25%', description: 'Lower transportation costs' },
    { metric: '30%', description: 'Reduced inventory costs' },
    { metric: '40%', description: 'Better customer satisfaction' },
    { metric: '35%', description: 'Warehouse efficiency gain' }
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
              Supply Chain <span className="text-blue-400">Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stop managing logistics through spreadsheets and phone calls. Our automation solutions deliver 
              real-time visibility, optimize routes automatically, and cut operational costs by 25-30% while improving delivery performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Contrast */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-red-800 mb-4">Traditional Logistics Challenges</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Manual route planning and load optimization</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Reactive inventory management and stockouts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Phone calls and emails for shipment tracking</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Disconnected warehouse and transportation systems</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>High fuel costs and inefficient routing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Logistics-First Automation</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>AI-powered route optimization and dynamic planning</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Predictive inventory management and auto-replenishment</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Real-time tracking with automated customer updates</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Integrated warehouse and transportation systems</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Fuel cost optimization and performance analytics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics Focus Statement */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              More Time for Growth, Less Time for Operations Management
            </h2>
            <p className="text-xl text-blue-100">
              Our automation solutions are designed specifically for logistics companies who want to scale 
              efficiently, not spend all day managing spreadsheets and chasing shipments. Every dollar saved 
              on operations is a dollar invested in business growth.
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Logistics Automation Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Intelligent systems that optimize every aspect of your supply chain while reducing operational overhead
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
                <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full border border-transparent hover:border-blue-200">
                  <solution.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Proven Logistics Impact</h2>
            <p className="text-xl text-slate-600">
              Real results our logistics clients achieve within their first quarter
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-md"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{outcome.metric}</div>
                <div className="text-slate-700 text-sm font-medium">{outcome.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stop managing logistics manually. See how our automation solutions can cut 
              operational costs by 25-30% while improving delivery performance and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Supply Chain Assessment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Logistics Case Studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}