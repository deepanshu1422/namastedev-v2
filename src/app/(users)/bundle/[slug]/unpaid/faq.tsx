'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../../components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ({
  faqs,
}: {
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_70%,transparent_110%)]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        {/* Animated Glow */}
        <div className="absolute -left-40 top-0 h-[500px] w-[500px]">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[120px] animate-glow-slow" />
        </div>
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px]">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[120px] animate-glow-slower" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <HelpCircle className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">Have Questions?</span>
          </div>
          
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our comprehensive tech courses
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4"
        >
          <Accordion className="flex flex-col gap-4" type="single" collapsible>
            {faqs.map(({ answer, question }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <AccordionItem value={`item-${i}`} className="group border-none">
                  <AccordionTrigger className="relative w-full text-lg rounded-xl p-6 font-semibold text-start text-white bg-[#112121] hover:bg-[#1A2A2A] transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 border border-emerald-500/20 rounded-xl group-hover:border-emerald-500/40 transition-colors duration-300" />
                    <div className="relative flex items-center">
                      <span className="flex-grow pr-4">{question}</span>
                      <ChevronDown className="h-5 w-5 text-emerald-400 shrink-0 transition-transform duration-300" />
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="relative mt-2 text-base rounded-xl p-6 text-emerald-100/90 bg-[#0A1A1A] border border-emerald-500/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-xl" />
                    <div className="relative">{answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}



