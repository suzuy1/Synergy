import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by Teams Worldwide</p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </AnimatedDiv>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedDiv key={index} delay={index * 150}>
              <figure className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/20">
                <blockquote className="text-slate-300 flex-grow">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400">{testimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;