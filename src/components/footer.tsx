'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/Chandru5284', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/chandra-mohan-02a17b252', label: 'LinkedIn' },
  ];

  return (
    <footer className="pt-16 pb-10 sm:pt-24 sm:pb-12 px-3 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-white/5 relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 dark:via-indigo-500/40 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-12 relative z-10">
        {/* Brand Column */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-3">
            <Link href="/" className="text-3xl sm:text-4xl font-black grad-text tracking-tighter">
              CHANDRU.DEV
            </Link>
            <p className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.3em]">
              Full Stack developer
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
            Building high-performance web applications and digital experiences with modern technology stacks.
          </p>
          <div className="flex gap-5 justify-center md:justify-start">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/50 hover:bg-white dark:hover:bg-indigo-500/10 transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-center md:items-start lg:items-center">
          <div className="space-y-8">
            <h4 className="text-gray-900 dark:text-white text-xs font-black uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4 text-center md:text-left lg:text-left">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 text-sm font-semibold hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-8 flex flex-col items-center md:items-start lg:items-start text-center md:text-left">
          <h4 className="text-gray-900 dark:text-white text-xs font-black uppercase tracking-[0.3em]">Get In Touch</h4>
          <ul className="space-y-6">
            <li className="group">
              <a href="mailto:chandru@email.com" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold">chandrucm5284@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Phone size={18} className="text-indigo-500" />
              </div>
              <span className="text-sm font-bold">+91 63807 41790</span>
            </li>
            <li className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                <MapPin size={18} className="text-indigo-500" />
              </div>
              <span className="text-sm font-bold">Remote / India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-24 pt-8 sm:pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <p className="text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] order-2 md:order-1">
          © {currentYear} CHANDRU.DEV — All Rights Reserved
        </p>
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] order-1 md:order-2">
          <span>Created with</span>
          <span className="text-gray-900 dark:text-white px-3 py-1 bg-gray-50 dark:bg-white/10 rounded-lg border border-gray-100 dark:border-white/10 font-black">Next.js</span>
          {/* <span>&</span>
          <span className="text-gray-900 dark:text-white px-3 py-1 bg-gray-50 dark:bg-white/10 rounded-lg border border-gray-100 dark:border-white/10 font-black">Django</span> */}
        </div>
      </div>
    </footer>
  );
}
