'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionBadge from './section-badge';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  outcome: string; // Used for card highlight
  impact: string;  // Used for modal business impact
  demoUrl: string;
  detailsUrl: string;
  gallery?: string[]; // Optional gallery for modals
  isMobileApp?: boolean; // To handle card button labels
  ctaLabels?: { primary: string; secondary: string }; // Custom modal CTAs
}

const projects: Project[] = [
  {
    title: "CodeDash eCommerce Platform",
    category: "ECOMMERCE SYSTEM",
    image: "/projects/ecommerce_light_1.png",
    description: "Scalable eCommerce platform for managing products, orders, and secure online payments.",
    problem: "Small and mid-sized businesses struggle to manage products, orders, and payments efficiently due to fragmented systems and lack of centralized control.",
    solution: "A centralized eCommerce platform with role-based access, secure payment integration, and a powerful admin dashboard to manage operations, analytics, and inventory in one place.",
    outcome: "Helps businesses streamline operations, automate order workflows, and manage inventory with real-time insights.",
    impact: "Helps businesses reduce manual order processing, improve operational efficiency, and manage sales, inventory, and payments from a single platform.",
    tags: ["Next.js (Fullstack)", "Supabase (Database)", "Razorpay"],
    gallery: [
      "/projects/ecommerce_light_1.png",
      "/projects/ecommerce_dark_1.png",
      "/projects/ecommerce_light_2.png",
      "/projects/ecommerce_dark_2.png",
      "/projects/ecommerce_light_3.png",
      "/projects/ecommerce_dark_3.png",
    ],
    features: [
      "Role-based authentication (Super Admin & Store Admin)",
      "Google OAuth and secure email/password login",
      "Razorpay payment integration with webhook handling",
      "Coupon and dynamic pricing management",
      "Shipping configuration and order workflows",
      "Real-time admin analytics dashboard",
      "Inventory tracking and product management"
    ],
    demoUrl: "https://ecom-fawn-mu.vercel.app/",
    detailsUrl: "#"
  },
  {
    title: "Vault Expense & Income Tracker",
    category: "FINANCE TRACKER APP",
    image: "/projects/vault_cover.png",
    description: "A smart finance tracking app for managing income, expenses, and project-based profitability in one place.",
    problem: "Managing financial data across projects or services becomes difficult without a structured system, especially when using manual or fragmented tools.",
    solution: "A mobile-first application that enables users to track transactions, analyze profit, generate reports, and manage financial workflows with cloud sync and custom branding.",
    outcome: "Helps businesses and individuals track financial flow, generate reports, and analyze profit per project or service.",
    impact: "Improves financial visibility, simplifies reporting, and helps users manage income, expenses, and profitability more efficiently.",
    tags: ["Next.js", "Capacitor", "SQLite (Offline)", "Google Sheets Sync"],
    isMobileApp: true,
    gallery: [
      "/projects/vault_1.png",
      "/projects/vault_7.png",
      "/projects/vault_8.png",
      "/projects/vault_2.png",
      "/projects/vault_3.png",
      "/projects/vault_4.png",
      "/projects/vault_5.png",
      "/projects/vault_6.png",
    ],
    ctaLabels: {
      primary: "Start a Similar App",
      secondary: "Contact Me"
    },
    features: [
      "Income & expense tracking with project/service tagging",
      "Profit analysis per project or service",
      "PDF & Excel report generation with filters",
      "Invoice generation for transactions",
      "Google authentication",
      "Cloud sync via Google Drive & Google Sheets",
      "Custom theme and branding options",
      "Business profile integration for reports/invoices"
    ],
    demoUrl: "#",
    detailsUrl: "#"
  },
  {
    title: "Vishaka Fashion Business Website",
    category: "BUSINESS WEBSITE",
    image: "/projects/vishaka_1.png",
    description: "A premium business website designed to attract customers, showcase products, and generate leads through WhatsApp and email.",
    problem: "Many businesses struggle to establish a strong online presence, making it difficult to attract customers and convert visitors into inquiries or sales.",
    solution: "A premium multi-page business website designed with modern UI, SEO optimization, and integrated WhatsApp and email lead generation to attract, engage, and convert customers effectively.",
    outcome: "Helps businesses increase online presence, capture leads, and drive customer inquiries through optimized UI and conversion-focused design.",
    impact: "Lead-generating business website with premium UI, SEO optimization, and direct customer engagement. Deployed on Vercel with future custom domain plans.",
    tags: ["Next.js", "Tailwind CSS", "SEO Optimization"],
    features: [
      "Premium UI/UX aligned with brand identity",
      "Multi-page structure (Home, Services, Collections)",
      "WhatsApp integration for direct communication",
      "Email lead capture system",
      "SEO-friendly architecture",
      "Fully responsive design"
    ],
    demoUrl: "https://vishaka-website.vercel.app/",
    detailsUrl: "#"
  }
];

export default function ProjectsSection({ onOpenModal }: { onOpenModal: (project: Project) => void }) {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <SectionBadge>Projects</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
            >
              Selected <span className="grad-text italic">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-gray-600 dark:text-zinc-400"
            >
              Solving real-world business problems with high-performance digital products.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:pb-1"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline transition-all"
            >
              Start your project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="group relative flex flex-col h-full bg-white dark:bg-[#0B0F1A] border border-gray-100 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview - ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 hover:cursor-pointer"
                  onClick={() => onOpenModal(project)}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                {/* Category Tag */}
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 w-fit">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow font-medium">
                  {project.description}
                </p>

                {/* Outcome/Impact */}
                <div className="mb-6 p-4 rounded-xl bg-primary/[0.03] border border-primary/10">
                  <p className="text-sm text-primary font-semibold leading-relaxed italic">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech stack - Muted text */}
                <div className="mb-8 pt-6 border-t border-gray-100 dark:border-white/5">
                  <p className="text-[11px] font-medium text-gray-400 dark:text-zinc-500 tracking-wide">
                    {project.tags.join(" • ")}
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl grad-cta text-white transition-all text-xs sm:text-sm font-black shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-[1.02] ${project.isMobileApp ? 'hidden' : ''}`}
                  >
                    {/* {project.isMobileApp ? 'View Screens' : 'Live Demo'}  */}
                    Live Demo <ExternalLink size={16} />
                  </Link>
                  <button
                    onClick={() => onOpenModal(project)}
                    className={`cursor-pointer flex-1 flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-xs sm:text-sm font-black text-gray-900 dark:text-white`}
                  >
                    {project.isMobileApp ? 'View Screens' : 'Details'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

