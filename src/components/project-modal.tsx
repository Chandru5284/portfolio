import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ExternalLink, Rocket, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  outcome: string;
  impact: string;
  demoUrl: string;
  gallery?: string[];
  ctaLabels?: { primary: string; secondary: string };
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Optimized Gallery Stack to prevent decoding lag by rendering all images upfront
const GalleryStack = memo(({ images, activeIndex, title }: { images: string[]; activeIndex: number; title: string }) => {
  return (
    <div className="relative w-full aspect-video md:aspect-[4/3] max-h-[60vh] md:max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 dark:bg-zinc-900/50">
      {images.map((src, idx) => (
        <div
          key={`${title}-${idx}`}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out transform-gpu ${activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          style={{
            willChange: 'opacity',
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
        >
          <Image
            src={src}
            alt={`${title} - screen ${idx + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto max-h-full object-contain mx-auto"
            priority={idx === 0} // Only prioritize the very first image
            quality={85}
          />
        </div>
      ))}
    </div>
  );
});

GalleryStack.displayName = 'GalleryStack';

const ProjectModal = memo(({ isOpen, onClose, project }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Preload gallery images (browser handles decoding once rendered in the stack)
  useEffect(() => {
    if (isOpen && project?.gallery) {
      project.gallery.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [isOpen, project]);

  // Reset image index when modal opens with a new project
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (!project) return null;

  // Safe images calculation
  const images = (project.gallery && project.gallery.length > 0)
    ? project.gallery
    : [project.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-sm dark:backdrop-blur-md cursor-pointer transition-colors duration-500"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-500"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-black/40 text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 md:space-y-12 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10">

              {/* Header */}
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Gallery Section */}
              <div className="space-y-6">
                {/* Main Preview Stack */}
                <div className="relative w-full rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-xl bg-gray-50 dark:bg-zinc-900/50 p-2 md:p-4">
                  <GalleryStack
                    images={images}
                    activeIndex={activeImageIndex}
                    title={project.title}
                  />
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                      <ImageIcon size={14} />
                      App Screens Preview
                    </div>
                    <div className="flex gap-4 overflow-x-auto p-2 scrollbar-hide">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`cursor-pointer relative w-24 md:w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 bg-gray-100 dark:bg-zinc-800 ${activeImageIndex === idx
                            ? "border-primary scale-105 shadow-lg"
                            : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screen thumbnail ${idx + 1}`}
                            fill
                            sizes="256px"
                            className="object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-8 border-b border-gray-100 dark:border-white/5">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-red-500 rounded-full" />
                    The Problem
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-500 rounded-full" />
                    The Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Features & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-500 uppercase tracking-tighter">Key Features</h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800 dark:text-gray-400">
                        <CheckCircle2 size={20} className="text-purple-600 dark:text-primary mt-1 shrink-0" />
                        <span className="text-base sm:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-500 uppercase tracking-tighter">Built With</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-medium text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result/Outcome Section */}
              <div className="p-8 rounded-2xl bg-primary/[0.03] dark:bg-primary/5 border border-gray-200 dark:border-primary/10 space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  Business Impact / Outcome
                </h3>
                <p className="text-gray-900 dark:text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed italic">
                  &ldquo;{project.impact}&rdquo;
                </p>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100 dark:border-white/5">
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 grad-cta px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-white font-bold text-center flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20 text-sm sm:text-base"
                >
                  {project.ctaLabels?.primary || "Start a Similar Project"} <Rocket size={20} />
                </Link>
                <Link
                  href={project.demoUrl === "#" ? "#contact" : project.demoUrl}
                  target={project.demoUrl === "#" ? "_self" : "_blank"}
                  onClick={project.demoUrl === "#" ? onClose : undefined}
                  className="flex-1 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-bold text-center hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {project.ctaLabels?.secondary || "View Live Demo"} <ExternalLink size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;
