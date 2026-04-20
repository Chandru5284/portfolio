'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/90 dark:bg-black/80 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-lg rounded-full px-4 sm:px-6 transition-all duration-300 h-16 md:h-14 lg:h-16">
        <Link href="/" className="flex items-center">
          <span className="font-black tracking-tighter grad-text text-lg md:text-xl lg:text-2xl uppercase">
            chandru.dev
          </span>
        </Link>

        {/* Desktop Links (1024px+) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-gray-200 dark:bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="#contact"
              className="grad-cta px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.05]"
            >
              Get a Project
            </Link>
          </div>
        </div>

        {/* Tablet & Mobile Actions (< 1024px) */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-4">
          {/* CTA Button - Shown on tablet (md), hidden on small mobile */}
          <Link
            href="#contact"
            className="hidden md:flex grad-cta px-4 py-2 rounded-full text-white text-sm font-bold transition-all hover:scale-105 active:scale-95"
          >
            Get a Project
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 flex items-center justify-center text-gray-700 dark:text-zinc-300"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[1000] bg-white dark:bg-[#020617] flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/5">
              <span className="font-black tracking-tighter grad-text text-xl uppercase">
                chandru.dev
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 px-6 py-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black text-gray-900 dark:text-white flex items-center justify-between group"
                  >
                    {link.name}
                    <div className="w-10 h-[1px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto px-6 pb-12 space-y-6">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="grad-cta block w-full text-center py-4 rounded-2xl text-white font-black text-lg shadow-xl"
              >
                Start a Project
              </Link>
              <div className="flex justify-center text-center">
                <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium">
                  Let&apos;s build the future together.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
