'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award, Calendar, TrendingUp, Heart, Lightbulb, Building, GraduationCap } from 'lucide-react';

export default function About() {
  const timelineEvents = [
    {
      date: 'June 2025',
      title: 'The Inspiration Moment',
      description: 'Wyatt Leroux and Roisin Djukic discovered a shared passion for transforming strategic insights into action. Their vision for full-cycle consulting—seamlessly bridging strategy, operations, and implementation—was born.',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      date: 'July 2025',
      title: 'Axiom Partners Founded',
      description: 'Axiom Partners was officially established to close the gap left by larger firms that separate strategic planning from execution. From the start, our mission has been to deliver integrated, end-to-end consulting tailored to growing businesses.',
      icon: Users,
      color: 'blue'
    },
    {
      date: 'August 2025',
      title: 'SME Focus & Automation Vision',
      description: 'We identified that small and mid-sized businesses often lack the resources of legacy systems but can thrive with automation-first strategies. This realization set the foundation for our consulting model: combining innovation with practical implementation to empower SMEs.',
      icon: Building,
      color: 'green'
    },
    {
      date: 'September 2025',
      title: 'Educational Commitment Launch',
      description: 'Hosted case study workshops with local high schools at the University of Waterloo, helping students understand accounting and finance career paths. Established our commitment to education and industry awareness.',
      icon: GraduationCap,
      color: 'amber'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600'
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
              About <span className="text-blue-400">Axiom Partners</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Founded in 2025 by University of Waterloo graduates with a passion for strategic excellence, 
              we deliver transformative consulting solutions combining academic rigor with automation-first approaches.
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border-l-8 border-blue-600 max-w-5xl mx-auto">
              <p className="text-2xl text-slate-700 leading-relaxed font-medium italic">
                "To empower small and medium businesses with integrated, full-cycle consulting that transforms 
                strategic insights into practical automation solutions, creating meaningful impact and sustainable growth."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">Fresh perspectives and automation-first methodologies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">SME Focus</h3>
              <p className="text-slate-600">Specialized solutions for small and medium enterprises</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Community</h3>
              <p className="text-slate-600">Pro bono services and educational advocacy</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Learn More About Us</h2>
            <p className="text-xl text-slate-600">
              Discover our leadership, values, and the story behind Axiom Partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/about/leadership">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Users className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    Leadership
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Meet our founding partners and learn about their expertise and vision for strategic consulting excellence.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Meet Our Team <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/about/mission">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Target className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    Mission & Values
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Discover our commitment to delivering exceptional value and driving positive impact for our clients.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Our Purpose <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about/history">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Award className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    Our Story
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Learn about our journey, milestones, and the vision that drives our commitment to excellence.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Our Journey <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Formation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600">
              Key milestones in the formation and growth of Axiom Partners
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClasses[event.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="text-slate-600 font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Introduction */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Founded by Excellence</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Wyatt Leroux and Roisin Djukic bring together Accounting & Financial Management 
              expertise from the University of Waterloo, combined with Big 4 consulting experience 
              and a commitment to community impact.
            </p>
            <Link 
              href="/about/leadership"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 group font-semibold"
            >
              Meet Our Leadership Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pro Bono Commitment */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Community Commitment</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Beyond our professional consulting services, we're deeply committed to supporting our 
              community through comprehensive pro bono services for qualifying organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Non-Profit Support</h3>
                <p className="text-slate-600">Strategic planning and operational optimization for mission-driven organizations</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Small Business Aid</h3>
                <p className="text-slate-600">Process improvement and growth strategies for local businesses under 50 employees</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Educational Support</h3>
                <p className="text-slate-600">Resource optimization and program development for educational institutions</p>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 group font-semibold"
            >
              <Heart className="mr-2 w-5 h-5" />
              Learn About Pro Bono Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Next-Generation Consulting Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We represent the next generation of strategic consulting, combining the analytical rigor 
                of University of Waterloo programs with real-world consulting experience 
                from leading firms.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our unique perspective allows us to bridge the gap between traditional consulting 
                approaches and innovative, automation-driven solutions that today's SMEs need 
                to thrive in an evolving marketplace.
              </p>
              <Link 
                href="/capabilities"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Explore Our Capabilities
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                  <div className="text-slate-700 font-medium">Founded</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">SME</div>
                  <div className="text-slate-700 font-medium">Focused</div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-slate-700 font-medium">Target Industries</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">UW</div>
                  <div className="text-slate-700 font-medium">Alumni</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}