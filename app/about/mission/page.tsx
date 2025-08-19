'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp, GraduationCap, HandHeart } from 'lucide-react';

export default function Mission() {
  const values = [
    {
      icon: Heart,
      title: 'Community Commitment',
      description: 'We are dedicated to giving back through pro bono services, community advisory roles, and supporting local organizations with accessible consulting expertise.'
    },
    {
      icon: GraduationCap,
      title: 'Next-Generation Professional Development',
      description: 'We combine University of Waterloo academic excellence with real-world professional experience to deliver innovative, forward-thinking consulting solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Industry Education & Promotion',
      description: 'We actively promote industry advancement through education, advocacy, and sharing knowledge to elevate the entire consulting profession.'
    },
    {
      icon: Target,
      title: 'Accessible Consulting Services',
      description: 'We believe high-quality strategic consulting should be accessible to organizations of all sizes, from SMEs to large enterprises and non-profits.'
    },
    {
      icon: HandHeart,
      title: 'Pro Bono Community Support',
      description: 'We provide comprehensive pro bono consulting services to community organizations, demonstrating our commitment to social impact and giving back.'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Excellence',
      description: 'We focus on creating long-term value and sustainable growth for our clients while maintaining the highest standards of professional service.'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mission & <span className="text-blue-400">Values</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our mission guides every decision and our values shape every interaction. 
              We exist to transform organizations and create lasting positive impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Mission</h2>
            <div className="bg-blue-50 rounded-3xl p-12 border-l-8 border-blue-600">
              <p className="text-2xl text-slate-700 leading-relaxed font-medium italic">
                "To make high-quality strategic consulting accessible to all organizations while 
                fostering community development, professional advancement, and industry education. 
                We combine University of Waterloo academic excellence with real-world experience 
                to deliver transformative solutions that create lasting positive impact."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our values reflect our commitment to community, professional development, and accessible 
              consulting services that make a meaningful difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Vision</h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <p className="text-2xl leading-relaxed font-medium">
                To be recognized as the leading next-generation consulting firm that makes strategic 
                excellence accessible to all organizations, while advancing industry education, 
                professional development, and community impact through innovative, University of 
                Waterloo-founded expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}