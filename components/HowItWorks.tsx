import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Started in 3 Easy Steps</p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Unleash your potential with a process designed for clarity and speed.
          </p>
        </AnimatedDiv>

        <div className="relative mt-20">
          {/* Dotted line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-700"></div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <AnimatedDiv key={step.step} delay={index * 150} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 border-2 border-blue-500 text-3xl font-bold text-blue-400 transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30">
                    {step.step}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-7 text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{step.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;