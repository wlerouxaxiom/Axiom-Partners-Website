'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Heart, Building, Factory, GraduationCap, Truck, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    serviceType: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeForm, setActiveForm] = useState('general');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // EmailJS configuration
      const serviceId = 'service_axiom'; // You'll get this from EmailJS
      const templateId = 'template_contact'; // You'll get this from EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        industry: formData.industry || 'Not specified',
        service_type: activeForm === 'probono' ? 'Pro Bono Services' : 'General Consulting',
        message: formData.message,
        to_email: 'inquiries@axiompartners.ca'
      };

      // Import EmailJS dynamically
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
          industry: '',
          serviceType: 'general',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const industries = [
    { value: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { value: 'non-profit', label: 'Non-Profit', icon: Heart },
    { value: 'education', label: 'Education', icon: GraduationCap },
    { value: 'logistics', label: 'Logistics & 3PL', icon: Truck },
    { value: 'other', label: 'Other', icon: Building }
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
              Get In <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your organization? Let's discuss how Axiom Partners can help 
              you achieve strategic excellence. We offer both professional consulting services 
              and pro bono support for qualifying organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Type Selection */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Choose Your Service Type</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveForm('general')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeForm === 'general'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                General Consulting Inquiry
              </button>
              <button
                onClick={() => setActiveForm('probono')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center ${
                  activeForm === 'probono'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Heart className="w-4 h-4 mr-2" />
                Pro Bono Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                {activeForm === 'probono' ? 'Pro Bono Services Application' : 'Send Us a Message'}
              </h2>
              
              {activeForm === 'probono' && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Pro Bono Qualification Criteria
                  </h3>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• Non-profit organizations and community groups</li>
                    <li>• Small businesses (under 50 employees) in underserved communities</li>
                    <li>• Educational institutions and student organizations</li>
                    <li>• Local community development initiatives</li>
                    <li>• Organizations with limited consulting budgets</li>
                  </ul>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    <p className="text-red-700">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-800">
                      {activeForm === 'probono' ? 'Application Submitted!' : 'Message Sent!'}
                    </h3>
                  </div>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                    {activeForm === 'probono' ? 'Organization Name' : 'Company/Organization'}
                    {activeForm === 'probono' && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required={activeForm === 'probono'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={activeForm === 'probono' ? 'Your organization name' : 'Your organization'}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                    Industry/Sector
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {activeForm === 'probono' ? 'Project Description & Community Impact' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder={
                      activeForm === 'probono' 
                        ? 'Describe your project, community impact goals, and how pro bono consulting would help your organization...'
                        : 'Tell us about your project or challenge...'
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-lg transition-colors font-semibold flex items-center justify-center group ${
                    activeForm === 'probono'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {activeForm === 'probono' ? (
                        <>
                          <Heart className="w-5 h-5 mr-2" />
                          Submit Pro Bono Application
                        </>
                      ) : (
                        'Send Message'
                      )}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-slate-800">Contact Information</h2>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl"
                >
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">inquiries@axiompartners.ca</p>
                    <p className="text-slate-500 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl"
                >
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (289) 400-5213</p>
                    <p className="text-slate-500 text-sm mt-1">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                    <p className="text-slate-600">Waterloo, Ontario</p>
                    <p className="text-slate-500 text-sm mt-1">Serving clients across North America</p>
                  </div>
                </motion.div>
              </div>

              {/* Pro Bono Information */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-green-600 mr-2" />
                  Pro Bono Services
                </h3>
                <p className="text-slate-600 mb-4">
                  We're committed to supporting our community through pro bono consulting services 
                  for qualifying non-profits, small businesses, and educational organizations.
                </p>
                <div className="text-sm text-green-700">
                  <p className="font-medium mb-2">Typical pro bono projects include:</p>
                  <ul className="space-y-1">
                    <li>• Strategic planning for non-profits</li>
                    <li>• Process optimization for small businesses</li>
                    <li>• Financial analysis and budgeting support</li>
                    <li>• Community development initiatives</li>
                  </ul>
                </div>
              </div>
              {/* Direct Contact */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Reach Our Founders Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Wyatt Leroux</span>
                    <a href="mailto:wleroux@axiompartners.ca" className="text-blue-600 hover:text-blue-700 font-medium">
                      wleroux@axiompartners.ca
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Roisin Djukic</span>
                    <a href="mailto:rdjukic@axiompartners.ca" className="text-blue-600 hover:text-blue-700 font-medium">
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