'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, TrendingUp, GraduationCap, Heart, Lightbulb, Building } from 'lucide-react';

export default function History() {
  const milestones = [
    {
      year: '2025',
      quarter: 'June',
      title: 'The Inspiration Moment',
      description: 'Wyatt Leroux and Roisin Djukic discovered a shared passion for transforming strategic insights into action. Their vision for full-cycle consulting—seamlessly bridging strategy, operations, and implementation—was born.',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      year: '2025',
      quarter: 'July',
      title: 'Axiom Partners Founded',
      description: 'Axiom Partners was officially established to close the gap left by larger firms that separate strategic planning from execution. From the start, our mission has been to deliver integrated, end-to-end consulting tailored to growing businesses.',
      icon: Users,
      color: 'blue'
    },
    {
      year: '2025',
      quarter: 'August',
      title: 'SME Focus & Automation Vision',
      description: 'We identified that small and mid-sized businesses often lack the resources of legacy systems but can thrive with automation-first strategies. This realization set the foundation for our consulting model: combining innovation with practical implementation to empower SMEs.',
      icon: Building,
      color: 'green'
    },
  
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
              From a shared vision in June 2025 to a thriving consultancy - the story of two passionate 
              professionals who recognized the need for integrated, full-cycle consulting services for 
              small and medium-sized businesses.
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
              From initial inspiration to educational advocacy - key milestones in our evolution
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

      {/* Founding Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Founding Vision</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bridging the gap in the consulting industry by offering integrated, full-cycle services 
              that larger firms have traditionally separated
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
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">SME Focus</h3>
              <p className="text-slate-600">
                Small and medium businesses without legacy system constraints can benefit significantly from integrated automation and consulting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Full-Cycle Consulting</h3>
              <p className="text-slate-600">
                Strategy, operations, and implementation services integrated into one comprehensive offering rather than separated.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Educational Advocacy</h3>
              <p className="text-slate-600">
                Passionate commitment to education and industry awareness through workshops, case studies, and career guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Educational Impact</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Both founders are deeply passionate about education and bringing awareness to the broader 
                accounting and finance industry. We believe in nurturing the next generation of professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">High School Outreach</h3>
                    <p className="text-slate-600">Hosted case studies at University of Waterloo with local high schools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Career Guidance</h3>
                    <p className="text-slate-600">Helping students understand accounting and finance career paths</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Industry Workshops</h3>
                    <p className="text-slate-600">Ongoing commitment to delivering educational workshops and case studies</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100"
            >
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Educational Mission</h3>
                <p className="text-slate-600">
                  Committed to advancing professional development and industry awareness through hands-on learning experiences.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-3">Recent Educational Initiatives:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• University of Waterloo high school case study workshops</li>
                  <li>• Career exploration sessions for students</li>
                  <li>• Industry awareness and education programs</li>
                  <li>• Professional development guidance</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}