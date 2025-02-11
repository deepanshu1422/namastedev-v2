'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../../components/ui/accordion";

export default function FAQ({
    faqs,
  }: {
    faqs: {
      question: string;
      answer: string;
    }[];
  }) {
    return (
      <section className="flex flex-col gap-6 mb-6 tab:mb-10 max-w-[75rem] px-24 max-tab:px-8 max-phone:px-4 mx-auto">
        <span className="font-bold text-xl tab:text-3xl text-center">Frequently Asked Questions</span>
        <div className="grid gap-2">
          <Accordion className="flex flex-col gap-3" type="single" collapsible>
            {faqs.map(({ answer, question }, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg bg-gray-800 rounded-xl p-4 font-semibold text-start text-white">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base bg-gray-50 rounded-b-xl p-4 text-gray-700">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }