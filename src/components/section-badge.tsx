'use client';

import { motion } from 'framer-motion';

type BadgeVariant = 'purple' | 'blue' | 'indigo';

interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export default function SectionBadge({ children, variant = 'purple' }: SectionBadgeProps) {
  const variants = {
    purple: "bg-purple-100 text-purple-700 dark:bg-white/10 dark:text-purple-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-blue-300",
    indigo: "bg-indigo-100 text-indigo-700 dark:bg-white/10 dark:text-indigo-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium mb-3 border border-transparent dark:border-white/5 shadow-sm transition-colors ${variants[variant]}`}
    >
      {children}
    </motion.div>
  );
}
