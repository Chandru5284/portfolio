'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Rocket, ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  const floatingTags = [
    { text: "Next.js", delay: 0 },
    { text: "Django", delay: 1 },
    { text: "Scalable", delay: 2 },
    { text: "API Integration", delay: 3 }
  ];

  const metrics = [
    { label: "Fast", value: "99/100", color: "text-green-500" },
    { label: "Scalable", value: "Built for Growth", color: "text-primary dark:text-primary" },
    { label: "Secure", value: "Encrypted", color: "text-secondary dark:text-secondary" }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto z-10 w-full py-12 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start lg:col-span-7 w-full max-w-xl"
          >
            {/* Status Badge */}
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold shadow-sm border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-gray-900 dark:text-white max-w-xl">
              I build high-performing <span className="grad-text">websites & web apps</span> that drive real growth
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md mt-2 sm:mt-4 leading-relaxed font-medium">
              I’m Chandru — a full-stack developer building high-performing web apps and digital solutions. I help startups and businesses build fast, scalable, and conversion-focused digital products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full mt-10">
              <div className="flex flex-col items-center lg:items-start gap-3 flex-1 sm:flex-none">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto grad-cta px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-white font-black text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-center flex items-center justify-center gap-3"
                >
                  Get Free Consultation <ArrowRight size={20} />
                </Link>
              </div>
              <Link
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all duration-300 font-bold text-base sm:text-lg text-gray-800 dark:text-white shadow-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                View My Work
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-6 font-medium">
              Quick response • Clear communication • Reliable delivery
            </p>
          </motion.div>

          {/* Right Side: Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:block lg:col-span-5 w-full flex justify-center lg:justify-center"
          >
            {/* Visual Container */}
            <div className="relative group max-w-lg w-full">
              {/* Floating Tech Tags */}
              {floatingTags.map((tag, i) => (
                <motion.div
                  key={tag.text}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: tag.delay,
                  }}
                  className={`absolute z-20 px-4 py-2 rounded-xl bg-white dark:glass border border-gray-200 dark:border-primary/20 text-xs font-bold text-gray-700 dark:text-primary shadow-md dark:shadow-xl hidden sm:block hover:scale-105 hover:shadow-lg transition-all
                    ${i === 0 ? '-top-10 left-10' : ''}
                    ${i === 1 ? 'top-20 -right-8' : ''}
                    ${i === 2 ? 'bottom-20 -left-12' : ''}
                    ${i === 3 ? '-bottom-10 right-10' : ''}
                  `}
                >
                  {tag.text}
                </motion.div>
              ))}

              {/* Glassmorphism Card (Dashboard Mockup) */}
              <div className="bg-white dark:glass p-2 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden relative group-hover:border-primary/40 transition-all duration-500 animate-float">
                <div className="bg-white dark:bg-zinc-900/95 rounded-[2.2rem] p-8 min-h-[450px] relative overflow-hidden transition-colors duration-500 shadow-inner">

                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl grad-primary flex items-center justify-center text-white shadow-lg">
                        <Code2 size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white">Project_Analytics.v1</div>
                        <div className="text-[10px] text-gray-500 dark:text-zinc-500">Live Production</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-zinc-700" />
                      <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-zinc-700" />
                      <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 group/metric hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                        <div className="text-xs font-semibold text-gray-600 dark:text-zinc-400">{m.label}</div>
                        <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Code Snippet Mirror */}
                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 font-mono text-[11px] leading-relaxed relative group/code overflow-hidden transition-colors duration-500">
                    <div className="absolute top-2 right-4 text-[10px] text-gray-400 dark:text-zinc-600">TypeScript</div>
                    <div className="flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-blue-600 dark:text-blue-400">scaleUp</span>
                      <span className="text-gray-900 dark:text-white">=</span>
                      <span className="text-gray-600 dark:text-zinc-500">async () =&gt; &#123;</span>
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400">await</span>
                      <span className="text-blue-600 dark:text-blue-400">optimize</span>
                      <span className="text-gray-600 dark:text-zinc-500">(&apos;business_growth&apos;);</span>
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400">return</span>
                      <span className="text-green-600 dark:text-green-400">SUCCESS</span>
                      <span className="text-gray-600 dark:text-zinc-500">;</span>
                    </div>
                    <div className="text-gray-600 dark:text-zinc-500">&#125;;</div>

                    {/* Hover Effect Code Glow */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/code:opacity-100 transition-opacity" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                </div>
              </div>

              {/* Decorative Circle Behind */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              <div className="absolute -z-10 top-20 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-[60px]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Illustration / Icon Grid Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-10 gap-4 h-full w-full rotate-12 scale-150">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-zinc-500 aspect-square rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
