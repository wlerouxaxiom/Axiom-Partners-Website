'use client';
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, Building, Users, Target, TrendingUp, Cog, Wrench, Factory, GraduationCap, Truck, FileText, Phone } from 'lucide-react';

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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Axiom Partners
              </span>
              <span className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-blue-300'
              }`}>
                Strategic Consulting
              </span>
            </div>
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
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.href)
                      ? isScrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-blue-300 bg-white/10'
                      : isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
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
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
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

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-8">
              <Link
                href="/contact"
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'text-green-700 hover:text-green-800 hover:bg-green-50 border border-green-200'
                    : 'text-green-300 hover:text-white hover:bg-green-600/20 border border-green-400/30'
                }`}
              >
                <Heart className="w-4 h-4 mr-2" />
                Pro Bono
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
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
              className="lg:hidden bg-white border-t border-slate-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                        isActivePath(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-3 text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Pro Bono Services
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
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