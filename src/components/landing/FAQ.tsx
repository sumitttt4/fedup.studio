'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 text-left">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className={`border rounded-[1.5rem] overflow-hidden transition-colors duration-300 ${
              isOpen ? 'border-[#E5E5E5] bg-[#F7F7F7]' : 'border-[#E5E5E5] bg-white hover:bg-[#FAFAFA]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between p-6 sm:p-8 text-left group"
            >
              <span className="font-display text-[18px] sm:text-[20px] font-bold text-[#111111] pr-8 leading-snug">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? 'bg-[#FF4400] text-white' : 'bg-[#E5E5E5] text-[#111111] group-hover:bg-[#FF4400] group-hover:text-white'
                }`}
              >
                <Plus className="h-5 w-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 px-6 sm:px-8 pt-0 font-sans text-[15px] sm:text-[16px] leading-[1.7] text-[#666666] max-w-[700px]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
