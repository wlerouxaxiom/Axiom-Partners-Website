'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // EmailJS configuration
      const serviceId = 'service_9mb27wl';
      const templateId = 'template_okj37dg';
      const publicKey = 'PbuPar3oCKYLGGbSh';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        message: formData.message,
        to_email: 'inquiries@axiompartners.ca'
      };

      const emailjs = await import('@emailjs/browser');
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitError('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                GET IN TOUCH
              </span>
            </div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Start a <span className="italic">Conversation</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your organization? Let's discuss how Axiom Partners 
              can help you achieve strategic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 
                className="text-3xl sm:text-4xl font-light text-white mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Send Us a <span className="italic">Message</span>
              </h2>

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <p>{submitError}</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <p>Message sent! We'll respond within 24 hours.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm text-slate-400 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <h2 
                className="text-3xl sm:text-4xl font-light text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Contact <span className="italic">Information</span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <a href="mailto:inquiries@axiompartners.ca" className="text-slate-400 hover:text-white transition-colors">
                        inquiries@axiompartners.ca
                      </a>
                      <p className="text-slate-500 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone</h3>
                      <a href="tel:+12894005213" className="text-slate-400 hover:text-white transition-colors">
                        +1 (289) 400-5213
                      </a>
                      <p className="text-slate-500 text-sm mt-1">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Location</h3>
                      <p className="text-slate-400">Waterloo, Ontario, Canada</p>
                      <p className="text-slate-500 text-sm mt-1">Serving clients across North America</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact with Founders */}
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 
                  className="text-2xl font-light text-white mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Reach Our <span className="italic">Founders</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-slate-400">Wyatt Leroux</span>
                    <a 
                      href="mailto:wleroux@axiompartners.ca" 
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      wleroux@axiompartners.ca
                    </a>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-slate-400">Roisin Djukic</span>
                    <a 
                      href="mailto:rdjukic@axiompartners.ca" 
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      rdjukic@axiompartners.ca
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
