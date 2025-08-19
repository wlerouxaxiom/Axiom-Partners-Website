'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Settings, Heart, GraduationCap, Truck, ArrowRight, Building } from 'lucide-react';

const IndustriesOverview = () => {
  const industries = [
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Optimizing production processes, supply chain efficiency, and quality management systems for manufacturing excellence.',
      href: '/industries/manufacturing',
      stats: '15+ Manufacturing Clients',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Heart,
      title: 'Non-Profit',
      description: 'Enhancing operational efficiency, program effectiveness, and sustainable funding models for mission-driven organizations.',
      href: '/industries/non-profit',
      stats: '20+ Non-Profit Partners',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Improving educational outcomes through strategic planning, resource optimization, and innovative program development.',
      href: '/industries/education',
      stats: '10+ Educational Institutions',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Truck,
      title: 'Logistics & 3PL',
      description: 'Streamlining logistics operations, warehouse management, and distribution networks for maximum efficiency.',
      href: '/industries/logistics',
      stats: '8+ Logistics Partners',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Industry <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deep sector knowledge combined with proven methodologies to deliver 
            tailored solutions that address industry-specific challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={industry.href}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Background Image */}
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="text-sm font-medium bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {industry.stats}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Explore {industry.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/industries"
            className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all duration-300 group font-semibold"
          >
            View All Industries
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Pro Bono Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 mt-12">
            <div className="text-center">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community-Focused Pro Bono Services</h3>
              <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
                We're committed to supporting our local community through pro bono consulting services 
                for qualifying non-profits, small businesses, and educational organizations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Non-Profit Organizations</h4>
                  <p className="text-slate-600 text-sm">Strategic planning and operational optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Small Local Businesses</h4>
                  <p className="text-slate-600 text-sm">Process improvement and growth strategies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Educational Institutions</h4>
                  <p className="text-slate-600 text-sm">Resource optimization and program development</p>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 group font-semibold"
              >
                <Heart className="mr-2 w-5 h-5" />
                Apply for Pro Bono Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesOverview;