import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, Image, BarChart3, Users } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Impact', path: '/impact', icon: BarChart3 },
    { name: 'Partners', path: '/partners', icon: Users },
  ];

  const isActive = (path) => {
    return path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/assets/logo.png"
              alt="WOPEDE Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-blue-900 dark:text-blue-400">
                WOPEDE
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-500 dark:text-gray-400">
                Peace & Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  moreLinks.some((l) => isActive(l.path))
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4 ml-0.5" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 py-2 z-50 animate-fadeIn">
                  {moreLinks.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                          isActive(sub.path)
                            ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <SubIcon className="w-4 h-4 text-blue-500" />
                        <span>{sub.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme Toggle & Donate */}
            <div className="flex items-center space-x-2 pl-3 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 shadow-sm transition-all hover:shadow"
              >
                <Heart className="w-4 h-4 text-white" />
                <span>Support Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="block px-3 py-1 text-xs uppercase tracking-wider text-gray-400 font-semibold">
              More Pages
            </span>
            {moreLinks.map((sub) => (
              <Link
                key={sub.path}
                to={sub.path}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {sub.name}
              </Link>
            ))}
          </div>
          <div className="pt-4">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              <Heart className="w-4 h-4" />
              <span>Support Us</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
