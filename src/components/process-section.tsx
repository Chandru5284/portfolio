'use client';

import { motion } from 'framer-motion';
import { Search, Layout, Code2, TestTube2, Rocket } from 'lucide-react';
import SectionBadge from './section-badge';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery",
    desc: "Understanding your goals, audience, and requirements",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Planning",
    desc: "Structuring the solution and defining architecture",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    desc: "Building with continuous feedback and iteration",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <TestTube2 className="w-6 h-6" />,
    title: "Testing",
    desc: "Ensuring performance, stability, and reliability",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch",
    desc: "Deploying and supporting your product in production",
    color: "from-rose-500 to-orange-500"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-28 px-3 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 sm:mb-24 flex flex-col items-center">
          <SectionBadge variant="blue">How I Work</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            A Proven <span className="grad-text">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium"
          >
            A structured journey designed to deliver consistent results and transform your digital vision into reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[31px] left-[10%] right-[10%] h-[3px] bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ 
                scaleX: 1, 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              viewport={{ once: true }}
              transition={{ 
                scaleX: { duration: 1.5, ease: "easeInOut" },
                backgroundPosition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              style={{ backgroundSize: '200% 100%' }}
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 opacity-80 dark:opacity-60 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="lg:hidden absolute left-[31px] top-0 bottom-0 w-[3px] bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ 
                scaleY: 1,
                backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"]
              }}
              viewport={{ once: true }}
              transition={{ 
                scaleY: { duration: 1.5, ease: "easeInOut" },
                backgroundPosition: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              style={{ backgroundSize: '100% 200%' }}
              className="w-full h-full bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 opacity-80 dark:opacity-60 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group w-full lg:w-1/5 relative"
              >
                {/* Step Indicator (Circle) */}
                <div className="relative mb-0 lg:mb-8 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-[#0B0F1A] border-2 border-slate-200 dark:border-white/10 flex items-center justify-center shadow-xl dark:shadow-none relative z-20 group-hover:border-transparent transition-all duration-300 overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative z-10 text-slate-700 dark:text-white group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-white/10 flex items-center justify-center shadow-md z-30`}>
                    <span className="text-[10px] font-black text-slate-800 dark:text-white">0{i + 1}</span>
                  </div>

                  {/* Glow Effect (Dark Mode) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-0 dark:group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
                </div>

                {/* Content */}
                <div className="ml-6 sm:ml-8 lg:ml-0 pt-2 lg:pt-0">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-indigo-500 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-[240px] lg:mx-auto font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 dark:text-zinc-500 font-medium italic">
            &ldquo;A proven process designed to deliver consistent results&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
