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
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActivePath(item.href)
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  <span className="uppercase">{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu - Dark aesthetic */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-56 bg-[#111633] border border-white/10 rounded-lg shadow-2xl py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-wide rounded transition-all duration-300"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              CONTACT
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
                    <div className="text-xs tracking-[0.2em] text-slate-500 mb-2 px-2 uppercase">
                      {item.name}
                    </div>
                    <div className="space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-2 py-2 text-sm text-slate-300 hover:text-white transition-colors"
                          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                          onClick={() => setIsOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all duration-200 font-medium tracking-wide uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    CONTACT
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
