'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F1A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl font-light mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Axiom Partners
            </h3>
            <p className="text-xs tracking-[0.2em] text-slate-400 mb-6">
              AUTOMATION-FIRST CONSULTING
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A boutique strategy and operations consulting firm delivering integrated solutions for ambitious organizations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:inquiries@axiompartners.ca" 
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                inquiries@axiompartners.ca
              </a>
              <a 
                href="tel:+12894005213" 
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (289) 400-5213
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                Waterloo, Ontario, Canada
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 
              className="text-lg font-light mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/capabilities/strategy" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link 
                  href="/capabilities/operations" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="text-lg font-light mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/leadership" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/mission" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/history" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 
              className="text-lg font-light mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/insights" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Axiom Partners. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 tracking-wide">
              University of Waterloo Founded
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
