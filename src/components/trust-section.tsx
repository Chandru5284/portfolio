'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Layout, Rocket } from 'lucide-react';
import SectionBadge from './section-badge';

const trustPoints = [
  {
    icon: <Zap className="text-primary" />,
    title: "Reliable Delivery",
    desc: "Get your project delivered on time without constant follow-ups. I keep you updated every step of the way."
  },
  {
    icon: <ShieldCheck className="text-secondary" />,
    title: "Future-Proof Growth",
    desc: "Built to scale as your business grows without needing to rebuild from scratch later."
  },
  {
    icon: <Layout className="text-accent" />,
    title: "Conversion-Focused Design",
    desc: "Websites designed to turn visitors into leads and customers through intentional UX and clear CTAs."
  },
  {
    icon: <Rocket className="text-electric-blue" />,
    title: "Business-Driven Logic",
    desc: "Every feature is built to support your business goals — not just to write code."
  }
];

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
          <SectionBadge>Why Choose Me</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
          >
            Why Work With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Combining technical excellence with business strategy to deliver results that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="rounded-2xl p-5 sm:p-6 transition-all duration-300 bg-white shadow-md border border-gray-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none hover:shadow-xl hover:-translate-y-1 dark:hover:bg-white/10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-white">{point.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
