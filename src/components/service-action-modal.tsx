'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone as WhatsApp, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  onContinueToForm: (message: string) => void;
}

const SERVICE_MESSAGES: Record<string, string> = {
  "High-performance websites for businesses": "Hi, I’m interested in building a high-performance website with you. Can we discuss the details?",
  "Custom web applications tailored to your needs": "Hi, I’m planning to build a custom web application and would like to discuss the scope and features.",
  "Online stores that are fast, scalable, and conversion-focused": "Hi, I want to build an online store and need help with conversion-focused design and scaling.",
  "Premium mobile experiences for iOS & Android": "Hi, I’m interested in developing a mobile app for iOS and Android. Let's talk about the requirements.",
  "From idea to scalable SaaS product": "Hi, I have a SaaS idea and I'm looking for a partner to build it from scratch.",
  "Custom Solution": "Hi, I have a unique idea and would like to discuss a custom solution with you."
};

export default function ServiceActionModal({ isOpen, onClose, serviceName, onContinueToForm }: ServiceActionModalProps) {
  const message = SERVICE_MESSAGES[serviceName] || `Hi, I'm interested in discussing a project regarding ${serviceName}.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;; // Placeholder
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#0B0F1A] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">How would you like to get started?</h3>
                <p className="text-[11px] sm:text-sm text-gray-500 dark:text-zinc-400 mt-1">Choose your preferred way to discuss your project</p>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-zinc-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Options */}
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              {/* Contact Form Option */}
              <button
                onClick={() => onContinueToForm(message)}
                className="cursor-pointer w-full group p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all text-left flex items-start gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageSquare size={20} className="sm:w-[24px] sm:h-[24px]" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Contact Form</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400">Best for detailed project discussion</p>
                </div>
                <div className="self-center p-1.5 rounded-full bg-primary/5 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
                  <ArrowRight size={18} />
                </div>
              </button>

              {/* WhatsApp Option */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full group p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:border-[#25D366]/50 transition-all text-left flex items-start gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform flex-shrink-0">
                  <WhatsApp size={20} className="sm:w-[24px] sm:h-[24px]" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Chat on WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400">Quick response and fast discussion</p>
                </div>
                <div className="self-center p-1.5 rounded-full bg-[#25D366]/5 text-[#25D366] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
                  <ArrowRight size={18} />
                </div>
              </a>
            </div>

            {/* Footer with Gradient Background for one option (Optional branding) */}
            {/* <div className="px-5 py-4 sm:px-6 bg-gray-50 dark:bg-white/5 text-center">
              <button
                onClick={() => onContinueToForm(message)}
                className="w-full grad-primary py-3.5 sm:py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-sm sm:text-base"
              >
                Continue to Form
              </button>
            </div> */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
