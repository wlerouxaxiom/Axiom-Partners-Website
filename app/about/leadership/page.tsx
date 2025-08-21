'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { founders } from '@/content/founders';

export default function Leadership() {
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
              Our <span className="text-blue-400">Leadership</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet the founding partners who bring innovative thinking and deep expertise 
              to every client engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{founder.name}</h3>
                    <div className="text-xl text-blue-600 font-semibold mb-4">{founder.title}</div>
                    <div className="text-slate-600 mb-6">{founder.education}</div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">{founder.bio}</p>

                  {/* Contact */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a 
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact {founder.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}