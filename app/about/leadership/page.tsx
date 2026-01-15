'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Leadership() {
  const founders = [
    {
      name: 'Wyatt Leroux',
      title: 'Co-Founder & Managing Partner',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQG76qWmrB_-fQ/profile-displayphoto-shrink_400_400/B4EZcNsIzwHQAk-/0/1748281364134?e=1770249600&v=beta&t=MtzRW5cJM58Gaql-pTvLqlX37S5osDwU_ltKqTsW_Fc',
      education: 'Bachelor of Accounting and Financial Management, University of Waterloo (Expected 2027)',
      email: 'wleroux@axiompartners.ca',
      linkedin: 'https://www.linkedin.com/in/wyatt-leroux-1a18091ba/',
      experience: 'US Corporate Tax Consultant, KPMG LLP',
      bio: 'Wyatt brings deep expertise in corporate tax strategy and process automation from his work at KPMG, where he automated complex tax workflows and managed multi-state tax compliance for $100M+ clients. As President of both the UW Management Consulting Club and KICK Conference, he has demonstrated exceptional leadership in scaling organizations and driving strategic growth. His technical prowess in Python-based automation and data analytics, combined with hands-on experience optimizing operations at scale, positions him to deliver transformative consulting solutions that bridge strategic planning with operational execution.',
      highlights: [
        'Automated tax workflows improving efficiency by 90% at KPMG',
        'President of UW Management Consulting Club',
        'President of KICK Conference (scaled to 1,000+ attendees)',
        'Designed Python-based scheduling optimization reducing planning time by 90%',
        'Managed $2M+ operational budgets with data-driven optimization'
      ]
    },
    {
      name: 'Roisin Djukic',
      title: 'Co-Founder & Partner',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFbapeZ6BO77g/profile-displayphoto-scale_400_400/B56ZjtJU2GHUAg-/0/1756325304218?e=1770249600&v=beta&t=E3ScV8gmRRyyJvGKATs4dS4ii1Hgeqzt39xeCydUPhc',
      education: 'Bachelor of Accounting and Financial Management, University of Waterloo (Expected 2027)',
      email: 'rdjukic@axiompartners.ca',
      linkedin: 'https://www.linkedin.com/in/roisin-djukic-400b9a356/',
      experience: 'Audit Associate, KPMG LLP',
      bio: 'Roisin brings rigorous analytical expertise and financial acumen from her audit work at KPMG, where she ensures financial integrity and operational compliance for diverse client portfolios. Her deep understanding of financial systems, internal controls, and business processes provides Axiom Partners with a critical foundation for delivering comprehensive strategic and operational consulting. With a commitment to precision and a keen eye for identifying operational inefficiencies, Roisin helps clients build robust financial frameworks that support sustainable growth and strategic objectives.',
      highlights: [
        'Audit expertise at KPMG LLP',
        'Financial systems and internal controls specialist',
        'Process improvement and compliance optimization',
        'Strategic financial planning and analysis',
        'Risk management and operational efficiency'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 text-xs tracking-[0.3em] text-slate-400 border border-slate-700/50 rounded-full">
                LEADERSHIP
              </span>
            </div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <span className="italic">Leaders</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Meet the founding partners combining Big 4 expertise with entrepreneurial vision 
              to deliver boutique consulting excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-32">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                {/* Image - alternating sides */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="relative w-full aspect-square object-cover rounded-2xl border border-white/10"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Name & Title */}
                  <div>
                    <h2 
                      className="text-4xl font-light text-white mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {founder.name}
                    </h2>
                    <p className="text-xl text-blue-400 mb-4">{founder.title}</p>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{founder.experience}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400">{founder.education}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-400 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Highlights */}
                  <div className="pt-4">
                    <h3 
                      className="text-xl font-light text-white mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      {founder.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <div className="w-1 h-1 mt-2 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className="text-sm text-slate-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-6">
                    <a 
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 group"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">Contact {founder.name.split(' ')[0]}</span>
                    </a>
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 bg-gradient-to-b from-transparent to-[#111827]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="text-4xl sm:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to Work <span className="italic">Together?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Connect with our leadership team to discuss how Axiom Partners can support your organization's growth.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 group text-lg font-medium"
            >
              Get in Touch
              <Mail className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
