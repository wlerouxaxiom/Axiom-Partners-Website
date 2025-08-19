import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Strategy & Corporate Finance', href: '/capabilities/strategy' },
        { name: 'Operations Excellence', href: '/capabilities/operations' },
        { name: 'Implementation & Build', href: '/capabilities/implementation' },
        { name: 'Pro Bono Services', href: '/contact', icon: Heart },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Non-Profit Organizations', href: '/industries/non-profit' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Logistics & 3PL', href: '/industries/logistics' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Mission & Values', href: '/about/mission' },
        { name: 'Our Story', href: '/about/history' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Student Insights', href: '/insights' },
        { name: 'Featured Articles', href: '/insights/articles' },
        { name: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">Axiom Partners</span>
                <span className="text-sm text-blue-300">Strategic Consulting</span>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Next-generation strategic consulting firm founded by University of Waterloo students. 
              Delivering transformative solutions for manufacturing, logistics, and non-profit organizations.
            </p>

            {/* University of Waterloo Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-500/30 mb-6">
              <span className="text-amber-300 font-semibold text-sm">
                University of Waterloo Founded
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:inquiries@axiompartners.ca" className="text-slate-300 hover:text-white transition-colors">
                  inquiries@axiompartners.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+12894005213" className="text-slate-300 hover:text-white transition-colors">
                  +1 (289) 400-5213
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Waterloo, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-slate-300 hover:text-white transition-colors group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-2 text-green-400" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Bono Highlight Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-800/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Community Pro Bono Services</h3>
                  <p className="text-green-300 text-sm">Supporting local organizations with accessible consulting</p>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold"
              >
                <Heart className="w-4 h-4 mr-2" />
                Apply for Pro Bono Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Axiom Partners. All rights reserved. | Founded by University of Waterloo Students
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">Connect with us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/company/axiom-partners" 
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/axiompartners" 
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;