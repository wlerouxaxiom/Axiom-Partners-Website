'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';

export default function Education() {
  const solutions = [
    {
      icon: BarChart3,
      title: 'Student Success Analytics',
      description: 'Automated early warning systems, engagement tracking, and intervention alerts that identify at-risk students before they fail—improving retention by 25%'
    },
    {
      icon: Users,
      title: 'Administrative Process Automation',
      description: 'Streamlined enrollment, scheduling, and grading workflows that reduce administrative burden by 40% while ensuring compliance and accuracy'
    },
    {
      icon: Zap,
      title: 'Resource Optimization Systems',
      description: 'Smart classroom utilization, budget tracking automation, and resource allocation tools that maximize efficiency and reduce waste by 30%'
    },
    {
      icon: Clock,
      title: 'Performance Tracking Dashboards',
      description: 'Real-time academic performance monitoring, institutional effectiveness metrics, and automated reporting that saves 15+ hours per week on data compilation'
    }
  ];

  const outcomes = [
    { metric: '25%', description: 'Improved student retention' },
    { metric: '40%', description: 'Less administrative work' },
    { metric: '30%', description: 'Better resource utilization' },
    { metric: '15+', description: 'Hours saved on reporting' }
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
            <GraduationCap className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Educational <span className="text-blue-400">Technology</span> Integration
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stop losing students to preventable failures and drowning in manual processes. Our automation solutions 
              predict at-risk students, streamline operations, and free up educators to focus on teaching, not paperwork.
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
              <h3 className="text-xl font-bold text-red-800 mb-4">Traditional Educational Challenges</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Students fail before warning signs are noticed</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Manual enrollment and scheduling processes</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Hours spent on performance reporting</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Inefficient resource allocation and planning</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Reactive rather than predictive interventions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Education-First Automation</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Early warning systems for at-risk student identification</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Automated enrollment, scheduling, and grading workflows</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>One-click performance dashboards and compliance reports</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Smart resource allocation and utilization optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2"></CheckCircle>Proactive intervention recommendations and tracking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Focus Statement */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              More Time for Teaching, Less Time for Administration
            </h2>
            <p className="text-xl text-blue-100">
              Our automation solutions are built specifically for educational institutions that want to 
              focus on student success, not spreadsheet management. Every hour saved on paperwork is 
              an hour invested in better learning outcomes.
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Educational Automation Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technology-enabled systems that improve student outcomes while reducing administrative burden
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Proven Educational Impact</h2>
            <p className="text-xl text-slate-600">
              Real results our educational clients achieve within their first semester
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
              Ready to Improve Student Outcomes Through Automation?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let technology handle the administrative burden so you can focus on education. 
              See how our automation solutions can improve retention and save 15+ hours per week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Your Education Assessment
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Student Success Case Studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}