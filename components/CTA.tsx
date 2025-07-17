import React from 'react';
import AnimatedDiv from './AnimatedDiv';

const CTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
            <AnimatedDiv>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Ready to Dive In?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                    Join thousands of innovators and start building your next big idea today.
                </p>
                <div className="mt-8">
                    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 animate-pulse-glow">
                        Sign Up for Free
                    </button>
                </div>
            </AnimatedDiv>
        </div>
    </section>
  );
};

export default CTA;