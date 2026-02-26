'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building, Users, TrendingUp, Cog, FileText, Phone } from 'lucide-react';

// Logo Component
const AxiomLogo = ({ className = "", textClassName = "" }) => (
  <div className={`group ${className}`}>
    <span className={`font-bold text-2xl tracking-wide transition-colors group-hover:scale-105 transition-transform duration-300 ${textClassName}`}>
      AXIOM PARTNERS
    </span>
    <div className="text-xs font-light tracking-widest mt-2">
      <span className={`transition-colors ${
        textClassName.includes('text-white') || textClassName.includes('text-slate-800') 
          ? textClassName.includes('text-white') ? 'text-slate-300' : 'text-slate-500' 
          : 'text-slate-500'
      }`}>
        A U T O M A T I O N - F I R S T &nbsp;&nbsp; C O N S U L T I N G
      </span>
    </div>
  </div>
);

// Each nav item's dropdown descriptors
const dropdownMeta: Record<string, { description: string }[]> = {
  About: [
    { description: "Our story, values, and what sets us apart" },
    { description: "The people driving Axiom's vision forward" },
  ],
  Capabilities: [
    { description: "Long-term roadmaps and transformation strategy" },
    { description: "Process design, efficiency, and execution" },
  ],
  Insights: [
    { description: "Research, perspectives, and industry analysis" },
  ],
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Leadership', href: '/about/leadership', icon: Users },
      ]
    },
    {
      name: 'Capabilities',
      href: '/capabilities',
      dropdown: [
        { name: 'Strategy', href: '/capabilities/strategy', icon: TrendingUp },
        { name: 'Operations', href: '/capabilities/operations', icon: Cog },
      ]
    },
    {
      name: 'Insights',
      href: '/insights',
      dropdown: [
        { name: 'Insights', href: '/insights', icon: FileText },
      ]
    }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <AxiomLogo 
              className="hover:scale-105 transition-transform duration-300"
              textClassName="text-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-widest transition-all duration-200 rounded-sm ${
                    isActivePath(item.href)
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  <span className="uppercase">{item.name}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                {/* ── Premium Dropdown ── */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                      style={{ minWidth: '260px' }}
                    >
                      {/* Arrow pointer */}
                      <div className="flex justify-center mb-0">
                        <div className="w-3 h-3 bg-[#0e1428] border-l border-t border-white/10 rotate-45 -mb-1.5 z-10 relative" />
                      </div>

                      {/* Panel */}
                      <div className="bg-[#0e1428] border border-white/[0.08] rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                        {/* Top accent line */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                        <div className="p-2">
                          {item.dropdown.map((dropdownItem, idx) => {
                            const meta = dropdownMeta[item.name]?.[idx];
                            const Icon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="group flex items-start gap-4 px-4 py-3.5 rounded-lg hover:bg-white/[0.05] transition-all duration-150"
                                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                              >
                                {/* Icon container */}
                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all duration-150">
                                  <Icon className="w-4 h-4 text-blue-400" />
                                </div>

                                {/* Text */}
                                <div>
                                  <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors tracking-wide">
                                    {dropdownItem.name}
                                  </div>
                                  {meta?.description && (
                                    <div className="text-xs text-slate-500 group-hover:text-slate-400 mt-0.5 leading-relaxed transition-colors">
                                      {meta.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs tracking-[0.15em] font-semibold rounded-lg transition-all duration-200 uppercase shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_28px_rgba(37,99,235,0.5)]"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 py-6"
            >
              <div className="space-y-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div className="text-[10px] tracking-[0.25em] text-slate-500 mb-2 px-2 uppercase font-semibold">
                      {item.name}
                    </div>
                    <div className="space-y-1">
                      {item.dropdown.map((dropdownItem, idx) => {
                        const meta = dropdownMeta[item.name]?.[idx];
                        const Icon = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
                            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="mt-0.5 w-7 h-7 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-sm text-slate-200 font-medium">{dropdownItem.name}</div>
                              {meta?.description && (
                                <div className="text-xs text-slate-500 mt-0.5">{meta.description}</div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
                
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 text-sm font-semibold tracking-widest uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
