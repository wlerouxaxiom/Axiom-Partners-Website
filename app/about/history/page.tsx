'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

export default function History() {
  const milestones = [
    {
      year: '2024',
      quarter: 'Q1',
      title: 'University of Waterloo Foundation',
      description: 'Axiom Partners was founded by Wyatt Leroux and Roisin Djukic, two University of Waterloo Accounting & Financial Management students who recognized the need for accessible, next-generation consulting services.',
      icon: Users,
      color: 'blue'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Professional Experience Integration',
      description: 'Leveraged Wyatt\'s Big 4 consulting and tax experience alongside Roisin\'s staff accounting background to deliver comprehensive solutions for manufacturing and non-profit clients.',
      icon: Award,
      color: 'green'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Community Engagement Launch',
      description: 'Launched pro bono consulting services for local SMEs and community organizations, reflecting our commitment to accessible consulting and community support.',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Industry Education & Promotion',
      description: 'Expanded our mission to include industry education and promotion, helping advance professional development opportunities within the consulting field.',
      icon: Calendar,
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

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
              Our <span className="text-blue-400">Story</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From University of Waterloo classrooms to professional consulting excellence - 
              the journey of two students who transformed their academic knowledge and professional 
              experience into accessible, community-focused consulting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600">
              From university students to professional consultants - key milestones in our evolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${milestone.quarter}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClasses[milestone.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-slate-800">{milestone.year}</span>
                      <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {milestone.quarter}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">University of Waterloo Foundation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our University of Waterloo Accounting & Financial Management education provides the 
              analytical foundation, while our professional experience delivers practical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Academic Excellence</h3>
              <p className="text-slate-600">
                University of Waterloo Accounting & Financial Management foundation with analytical rigor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Experience</h3>
              <p className="text-slate-600">
                Big 4 consulting, tax consulting, and staff accounting experience in real-world applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Commitment</h3>
              <p className="text-slate-600">
                Pro bono services and community involvement from Youth Advisory Council to industry advocacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}