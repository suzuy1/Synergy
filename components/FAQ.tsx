import React, { useState } from 'react';
import AnimatedDiv from './AnimatedDiv';
import { FAQS, ChevronDownIcon } from '../constants';

const FaqItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700 py-6">
      <dt>
        <button
          onClick={onClick}
          className="flex w-full items-start justify-between text-left text-white"
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold leading-7">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                {ChevronDownIcon}
            </span>
          </span>
        </button>
      </dt>
      <dd
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4 pr-12' : 'max-h-0'
        }`}
      >
        <p className="text-base leading-7 text-slate-300">{faq.answer}</p>
      </dd>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32 bg-slate-900/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
            <AnimatedDiv>
                <h2 className="text-base font-semibold leading-7 text-blue-400">FAQ</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Frequently Asked Questions
                </p>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                </p>
            </AnimatedDiv>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-2">
            {FAQS.map((faq, index) => (
               <AnimatedDiv key={index} delay={index * 100}>
                <FaqItem
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
              </AnimatedDiv>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
