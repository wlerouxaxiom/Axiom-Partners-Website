'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Building } from 'lucide-react';

const ProBonoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Community-Focused <span className="text-green-600">Pro Bono Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to supporting our local community through pro bono consulting services 
            for qualifying non-profits, small businesses, and educational organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Non-Profit Organizations</h3>
            <p className="text-slate-600">
              Strategic planning and operational optimization for mission-driven organizations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Small Local Businesses</h3>
            <p className="text-slate-600">
              Process improvement and growth strategies for community businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Educational Institutions</h3>
            <p className="text-slate-600">
              Resource optimization and program development for schools and universities
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="mr-2 w-5 h-5" />
            Apply for Pro Bono Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProBonoSection;