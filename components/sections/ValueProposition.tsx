'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, BarChart3 } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Automation-First Consulting
              <span className="block text-blue-600">That Actually Delivers Results</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              While traditional firms sell recommendations, we build solutions. While they charge for time, we guarantee outcomes. 
              We're not consultants who use AI—we're technologists who solve business problems through automation-first approaches.
            </p>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-wide">Traditional Consulting</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-600">
                      <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                      6-month engagement
                    </li>
                    <li className="flex items-center text-slate-600">
                      <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                      200-slide deck
                    </li>
                    <li className="flex items-center text-slate-600">
                      <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                      Hope they implement
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wide">Axiom Partners</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      6-week deployment
                    </li>
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Working automation
                    </li>
                    <li className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Results from day one
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
            >
              See Our Results
            </Link>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Automation-First</h3>
              <p className="text-slate-600">Built for the AI age, not retrofitted from outdated frameworks</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300">
              <Clock className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Rapid Deployment</h3>
              <p className="text-slate-600">Working solutions in weeks, not months of planning</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Measurable Impact</h3>
              <p className="text-slate-600">Quantifiable results from day one, not abstract improvements</p>
            </div>
          </motion.div>
        </div>

        {/* Outcome Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-slate-700 font-medium">Faster Implementation</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-4xl font-bold text-blue-600 mb-2">30</div>
              <div className="text-slate-700 font-medium">Days to Results</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-slate-700 font-medium">Measurable ROI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;