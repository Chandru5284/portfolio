'use client';

import { motion } from 'framer-motion';
import { Globe, Layout, ShoppingBag, Smartphone, Layers, ArrowRight, Rocket } from 'lucide-react';
import SectionBadge from './section-badge';

const services = [
  {
    icon: <Globe className="text-indigo-500" />,
    title: "High-performance websites for businesses",
    desc: "Bespoke, high-performance websites built with modern frameworks to ensure speed and SEO success.",
    cta: "Discuss Your Website"
  },
  {
    icon: <Layout className="text-indigo-500" />,
    title: "Custom web applications tailored to your needs",
    desc: "Complex, scalable web applications with rich interactivity and seamless backend integrations.",
    cta: "Plan Your App"
  },
  {
    icon: <ShoppingBag className="text-indigo-500" />,
    title: "Online stores that are fast, scalable, and conversion-focused",
    desc: "Conversion-focused online stores with secure payments, inventory mapping, and customer management.",
    cta: "Launch Your Store"
  },
  {
    icon: <Smartphone className="text-indigo-500" />,
    title: "Premium mobile experiences for iOS & Android",
    desc: "Native-like mobile experiences using Next.js and Capacitor for rapid deployment on iOS & Android.",
    cta: "Plan Your Mobile App"
  },
  {
    icon: <Layers className="text-indigo-500" />,
    title: "From idea to scalable SaaS product",
    desc: "End-to-end SaaS building including multi-tenancy, subscription models, and scalable architectures.",
    cta: "Discuss Your SaaS Idea"
  }
];

interface ServicesSectionProps {
  onOpenModal: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-white/[0.02] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionBadge>Services</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
          >
            Full-Stack <span className="grad-text italic">Specializations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Leveraging cutting-edge technologies to solve your most complex business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="rounded-3xl p-6 sm:p-8 h-full transition-all duration-500 bg-white dark:bg-[#0B0F1A] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-3 flex flex-col items-start group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/5 dark:bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-indigo-500/10 dark:border-white/10 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-900 dark:text-white leading-tight">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed flex-grow font-medium">
                {service.desc}
              </p>
              <button
                onClick={() => onOpenModal(service.title)}
                className="cursor-pointer flex items-center gap-3 font-black text-sm text-indigo-600 dark:text-indigo-400 group-hover:gap-4 transition-all"
              >
                {service.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}

          {/* Bonus Conversion Card */}
          <div className="grad-cta p-6 sm:p-8 rounded-3xl flex flex-col items-start text-white overflow-hidden h-full relative group shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-1000">
              <Rocket size={120} className="sm:w-[160px] sm:h-[160px]" />
            </div>

            <div className="relative z-10 w-full space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Have a unique idea?</h3>
              <p className="!text-white/90 text-base sm:text-lg font-medium leading-relaxed">
                Let&apos;s discuss your Custom Solution. Limited monthly slots available.
              </p>
            </div>

            <div className="mt-auto pt-6 relative z-10">
              <button
                onClick={() => onOpenModal("Custom Solution")}
                className="cursor-pointer px-5 py-2.5 rounded-lg bg-white text-gray-900 font-black text-sm hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Reserve Your Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
