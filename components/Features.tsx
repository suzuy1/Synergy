import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-slate-900/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Everything You Need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Accelerate Your Workflow</p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our platform is packed with powerful features designed to make your work seamless and efficient.
          </p>
        </AnimatedDiv>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <AnimatedDiv key={feature.name} delay={index * 150}>
                <div className="group text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/30">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-7 text-white">{feature.name}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-400">{feature.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;