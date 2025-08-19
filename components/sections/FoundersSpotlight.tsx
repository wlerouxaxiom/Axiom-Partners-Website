'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Heart, GraduationCap } from 'lucide-react';

const FoundersSpotlight = () => {
  const founders = [
    {
      name: "Wyatt Leroux",
      title: "Co-Founder & Partner",
      program: "Accounting & Financial Management",
      year: "Current Student",
      expertise: ["Strategic Leadership", "Big 4 Consulting", "Tax Strategy"],
      experience: "President, Kick Conference | Ex-Big 4",
      community: "Youth Advisory Council Founding Member | Community Advisor"
    },
    {
      name: "Roisin Djukic",
      title: "Co-Founder & Partner", 
      program: "Accounting & Financial Management",
      year: "Current Student",
      expertise: ["Financial Operations", "Strategic Analysis", "Educational Workshops"],
      experience: "Ex-Staff Accountant | Financial Operations Specialist",
      community: "Educational Workshops for Kids in Accounting & Finance | Industry Promotion Advocate"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Meet Our <span className="gradient-text-primary">Founders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            University of Waterloo students combining academic excellence with professional 
            consulting experience to deliver innovative solutions and community impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Header with Credentials */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">{founder.name}</h3>
                      <div className="text-blue-600 font-semibold">{founder.title}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                    <div className="text-sm font-semibold text-amber-800">University of Waterloo</div>
                    <div className="text-sm text-amber-700">{founder.program} • {founder.year}</div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-slate-800">Professional Experience</h4>
                  </div>
                  <p className="text-slate-600 bg-blue-50 rounded-xl p-3 border border-blue-100">
                    {founder.experience}
                  </p>
                </div>

                {/* Expertise Areas */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-slate-800">Core Expertise</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Community Involvement */}
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-slate-800">Community Impact</h4>
                  </div>
                  <p className="text-slate-600 bg-green-50 rounded-xl p-3 border border-green-100">
                    {founder.community}
                  </p>
                </div>

                {/* Contact CTA */}
                <div className="pt-4 border-t border-slate-200">
                  <Link 
                    href={`mailto:${founder.name.toLowerCase().replace(' ', '.')}@axiompartners.ca`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    Connect with {founder.name.split(' ')[0]}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/about/leadership"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 group font-semibold"
          >
            Learn More About Our Leadership
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersSpotlight;