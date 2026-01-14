'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  <div className="text-2xl font-light tracking-wider text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
    AXIOM <span className="font-normal">PARTNERS</span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/about" 
              className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              ABOUT
            </Link>

            {/* Capabilities Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setCapabilitiesOpen(true)}
              onMouseLeave={() => setCapabilitiesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm tracking-wide text-slate-300 hover:text-white transition-colors"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                CAPABILITIES
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {capabilitiesOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-[#111633] border border-white/10 rounded-lg p-4 shadow-2xl">
                  <Link 
                    href="/capabilities/strategy" 
                    className="block py-3 px-4 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Strategy
                  </Link>
                  <Link 
                    href="/capabilities/operations" 
                    className="block py-3 px-4 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Operations
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/insights" 
              className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              INSIGHTS
            </Link>

            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-wide rounded transition-all duration-300"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                href="/about" 
                className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors py-2"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              
              <div className="flex flex-col gap-2 pl-4">
                <Link 
                  href="/capabilities/strategy" 
                  className="text-sm tracking-wide text-slate-400 hover:text-white transition-colors py-2"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Strategy
                </Link>
                <Link 
                  href="/capabilities/operations" 
                  className="text-sm tracking-wide text-slate-400 hover:text-white transition-colors py-2"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Operations
                </Link>
              </div>

              <Link 
                href="/insights" 
                className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors py-2"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                INSIGHTS
              </Link>

              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-wide rounded transition-all mt-4"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
