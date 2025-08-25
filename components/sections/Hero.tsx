'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Clock, Heart, BarChart3, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="heading-xl text-white leading-tight"
              >
                Automation-First Consulting
                <span className="block gradient-text-primary bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  That Actually Delivers Results
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="body-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                While traditional firms sell recommendations, we build solutions. While they charge for time, we guarantee outcomes. 
                We're not consultants who use AI—we're technologists who solve business problems through automation-first approaches.
              </motion.p>
              
              {/* Value Props Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-slate-400 text-sm font-medium mb-3">Traditional Consulting</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>6-month engagement</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>200-slide deck</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Hope they implement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-300 text-sm font-medium mb-3">Axiom Partners</h4>
                    <ul className="space-y-2 text-blue-200 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2"></CheckCircle>6-week deployment</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2"></CheckCircle>Working automation</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2"></CheckCircle>Results from day one</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Differentiation Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-300">
                    Built From Scratch for AI Age
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-300">
                    Outcome-Guaranteed
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Dual CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact"
                className="btn-gradient-primary group"
              >
                See Our Results
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-400/50 text-amber-300 rounded-xl hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300 font-semibold backdrop-blur-sm group"
              >
                <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Pro Bono Services
              </Link>
            </motion.div>

            {/* Outcome Metrics instead of generic stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700/50"
            >
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text-primary bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  90%
                </div>
                <div className="text-slate-300 text-sm">Faster Implementation</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text-primary bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  30
                </div>
                <div className="text-slate-300 text-sm">Days to Results</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text-primary bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-slate-300 text-sm">Measurable ROI</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements - Updated to show automation/tech focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl backdrop-blur-sm border border-white/5 shadow-glow -z-10"
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-3xl backdrop-blur-sm border border-amber-500/10 shadow-glow -z-10"
            />
            
            {/* Floating Content Cards - Updated messaging */}
            <div className="absolute top-8 left-8 z-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-medium hover:shadow-glow transition-all duration-300 max-w-xs"
              >
                <Zap className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Automation-First</h4>
                <p className="text-slate-300 text-xs">Built for the AI age, not retrofitted</p>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 z-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-medium hover:shadow-glow transition-all duration-300 max-w-xs"
              >
                <Clock className="w-6 h-6 text-green-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Rapid Deployment</h4>
                <p className="text-slate-300 text-xs">Working solutions in weeks, not months</p>
              </motion.div>
            </div>

            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-medium hover:shadow-glow transition-all duration-300 max-w-xs"
              >
                <BarChart3 className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Measurable Impact</h4>
                <p className="text-slate-300 text-xs">Quantifiable results from day one</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;