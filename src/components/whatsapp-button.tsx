'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Placeholder
  const message = encodeURIComponent("Hi, I saw your portfolio and I need a project");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[999] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-white/10 transition-shadow hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 fill-white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.769L0 32l8.469-2.018A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.773-1.858l-.486-.289-5.029 1.198 1.218-4.895-.318-.507A13.265 13.265 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.942c-.399-.2-2.359-1.163-2.724-1.296-.365-.133-.63-.2-.896.2-.266.399-1.03 1.296-1.262 1.562-.232.266-.465.299-.864.1-.399-.2-1.685-.621-3.21-1.98-1.186-1.057-1.988-2.363-2.22-2.762-.232-.399-.025-.615.174-.814.179-.178.399-.465.598-.697.199-.232.266-.399.399-.665.133-.266.066-.498-.033-.697-.1-.2-.896-2.161-1.228-2.959-.323-.776-.651-.671-.896-.683-.232-.011-.498-.013-.764-.013-.266 0-.697.1-1.063.498-.365.399-1.394 1.362-1.394 3.321s1.427 3.852 1.626 4.118c.2.266 2.808 4.287 6.804 6.013.951.411 1.693.657 2.271.84.954.305 1.823.262 2.509.159.765-.114 2.359-.964 2.692-1.895.333-.93.333-1.727.233-1.895-.1-.167-.365-.266-.764-.465z" />
      </svg>

      <span
        className="
              absolute right-20 z-50
              bg-white dark:bg-zinc-900
              text-gray-900 dark:text-white
              border border-gray-300 dark:border-white/10
              px-4 py-2 rounded-xl text-sm font-semibold
              shadow-lg dark:shadow-xl
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200 ease-out
              pointer-events-none whitespace-nowrap
            "
      >
        Chat with me
      </span>
    </motion.a>
  );
}
