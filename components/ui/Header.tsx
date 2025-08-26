'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Building, Users, Target, TrendingUp, Cog, Wrench, Factory, GraduationCap, Truck, FileText, Phone } from 'lucide-react';

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
        { name: 'Overview', href: '/about', icon: Building },
        { name: 'Leadership', href: '/about/leadership', icon: Users },
        { name: 'Mission & Values', href: '/about/mission', icon: Target },
        { name: 'Our Story', href: '/about/history', icon: FileText },
      ]
    },
    {
      name: 'Capabilities',
      href: '/capabilities',
      dropdown: [
        { name: 'Overview', href: '/capabilities', icon: TrendingUp },
        { name: 'Strategy & Corporate Finance', href: '/capabilities/strategy', icon: TrendingUp },
        { name: 'Operations', href: '/capabilities/operations', icon: Cog },
        { name: 'Implementation & Build', href: '/capabilities/implementation', icon: Wrench },
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Overview', href: '/industries', icon: Building },
        { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
        { name: 'Non-Profit', href: '/industries/non-profit', icon: Heart },
        { name: 'Education', href: '/industries/education', icon: GraduationCap },
        { name: 'Logistics & 3PL', href: '/industries/logistics', icon: Truck },
      ]
    },
    {
      name: 'Insights',
      href: '/insights',
      dropdown: [
        { name: 'Student Insights', href: '/insights', icon: FileText },
        { name: 'Featured Articles', href: '/insights/articles', icon: FileText },
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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-slate-900/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto pl-0 pr-6 sm:pl-0 sm:pr-8 lg:pl-0 lg:pr-10">
        <div className="flex justify-between items-center h-24">
          {/* Logo - moved much further left */}
          <Link href="/" className="flex-shrink-0 -ml-24">
            <AxiomLogo 
              className="hover:scale-105 transition-transform duration-300"
              textClassName={isScrolled ? 'text-slate-800' : 'text-white'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-bold tracking-wide text-sm transition-all duration-200 ${
                    isActivePath(item.href)
                      ? isScrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-blue-300 bg-white/10'
                      : isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="uppercase">{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-3 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium tracking-wide"
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

            {/* CTA Buttons - much more spacing */}
            <div className="flex items-center space-x-12 ml-20">
              <Link
                href="/contact"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-bold tracking-wide text-sm transition-all duration-200 uppercase whitespace-nowrap ${
                  isScrolled
                    ? 'text-green-700 hover:text-green-800 hover:bg-green-50 border border-green-200'
                    : 'text-green-300 hover:text-white hover:bg-green-600/20 border border-green-400/30'
                }`}
              >
                <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">PRO BONO</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-bold tracking-wide text-sm hover:scale-105 uppercase whitespace-nowrap"
              >
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">CONTACT</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
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
              className="lg:hidden bg-white border-t border-slate-200 shadow-lg rounded-b-2xl"
            >
              <div className="px-6 py-8 space-y-6">
                {/* Mobile Logo */}
                <div className="flex justify-center pb-6 border-b border-slate-200">
                  <AxiomLogo textClassName="text-slate-800" />
                </div>

                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-bold tracking-wide text-base transition-colors uppercase ${
                        isActivePath(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-6 mt-3 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium tracking-wide"
                          onClick={() => setIsOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-4 text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors font-bold tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    PRO BONO SERVICES
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-bold tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    CONTACT US
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