'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 relative overflow-hidden flex flex-col items-center"
        >
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white relative z-10 leading-tight"
          >
            Let&apos;s Build Something <span className="grad-text">Valuable</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto relative z-10 font-medium"
          >
            I&apos;m currently working with a limited number of clients and offering flexible pricing to build long-term partnerships.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto grad-cta px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              Start a Conversation
            </Link>
            <div className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm w-full sm:w-auto justify-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Available for now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

