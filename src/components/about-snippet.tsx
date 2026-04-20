'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Layers, Target } from 'lucide-react';
import SectionBadge from './section-badge';

export default function AboutSnippet() {
  const valuePoints = [
    "Build production-ready applications, not just UI",
    "Focus on performance, scalability, and clean architecture",
    "Strong understanding of business logic and user experience",
    "End-to-end development (frontend, backend, deployment)",
    "Clear communication and structured workflow"
  ];

  const focusPoints = [
    { title: "Performance-first development", icon: <Zap size={18} className="text-amber-500" /> },
    { title: "Scalable architecture", icon: <Layers size={18} className="text-blue-500" /> },
    { title: "Business-driven solutions", icon: <Target size={18} className="text-rose-500" /> },
    { title: "Secure & reliable systems", icon: <ShieldCheck size={18} className="text-emerald-500" /> }
  ];

  return (
    <section id="about" className="py-16 sm:py-28 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionBadge>About Me</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight"
              >
                Who you’ll be <span className="grad-text">working with</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-800 dark:text-zinc-200 font-medium leading-relaxed"
              >
                I’m Chandru, a full-stack developer focused on building scalable web applications and real-world digital products that solve actual business problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-zinc-400 leading-relaxed"
              >
                I don’t just build websites — I help businesses turn ideas into reliable, high-performing systems. From planning and architecture to development and deployment, I focus on creating solutions that are fast, scalable, and built for long-term growth.
              </motion.p>
            </div>

            {/* Value Points List */}
            <ul className="space-y-4">
              {valuePoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all duration-300">
                    <CheckCircle2 size={16} className="text-indigo-500 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-sm md:text-base font-semibold">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-20 dark:opacity-40 -z-10" />
            
            <div className="bg-white dark:bg-[#0B0F1A] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 border border-gray-100 dark:border-white/10 relative overflow-hidden group">
              {/* Card background detail */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-500/5 rounded-full -mr-16 -mt-16 sm:-mr-20 sm:-mt-20 transition-transform group-hover:scale-110 duration-700" />
              
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                <span className="w-8 h-1 sm:w-10 sm:h-1.5 bg-indigo-500 rounded-full" />
                What I Focus On
              </h3>
              
              <div className="grid gap-4 sm:gap-5">
                {focusPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-indigo-500/20 transition-all hover:translate-x-2 duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-lg font-black text-gray-900 dark:text-white">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5">
                <p className="text-sm text-gray-500 dark:text-zinc-500 italic">
                  &ldquo;Combining technical excellence with business awareness to deliver maximum value.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
