'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, FileText, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionBadge from './section-badge';

const products = [
  {
    icon: <ShoppingCart className="text-primary" />,
    title: "Enterprise eCommerce Platform",
    desc: "A scalable solution for online retail featuring advanced product filtering, secure checkout, and a comprehensive seller dashboard. Optimized for 99.9% uptime and rapid transaction processing.",
    highlight: "Process 10,000+ orders monthly"
  },
  {
    icon: <FileText className="text-secondary" />,
    title: "Automation Invoice Generator",
    desc: "Streamlined business billing system with automated tax calculation, recurring invoice scheduling, and instant PDF generation/export. Designed to save 10+ hours of manual paperwork weekly.",
    highlight: "Built-in PDF processing engine"
  },
  {
    icon: <Activity className="text-accent" />,
    title: "Advanced Fitness Tracking App",
    desc: "Real-time health monitoring application with deep API integrations for wearable devices, data visualization for progress tracking, and personalized workout logic based on user performance.",
    highlight: "Real-time wearable sync"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <SectionBadge variant="indigo">Products</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
          >
            Real Products I&apos;ve Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            While I&apos;m new to freelancing, I&apos;ve built real-world applications focused on solving business problems and delivering practical results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-white">{product.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed mb-auto">
                {product.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                   {product.highlight}
                </span>
                <Link href="#contact" className="text-primary hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
