import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { PRICING_PLANS, CheckIcon } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Right Plan for Your Team
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Simple, transparent pricing that scales with your needs. No hidden fees.
          </p>
        </AnimatedDiv>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <AnimatedDiv
              key={plan.name}
              delay={index * 150}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended
                  ? 'border-blue-500 bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/40'
                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-slate-400">{plan.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                <span className="text-base font-medium text-slate-400">{plan.frequency}</span>
              </p>
              <a
                href="#"
                className={`mt-8 block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold leading-6 transition-colors ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <span className="text-blue-400">{CheckIcon}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;