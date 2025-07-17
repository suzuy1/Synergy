import React from 'react';
import AnimatedDiv from './AnimatedDiv';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 py-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#3b82f6_0,_transparent_50%)] animate-slow-spin"></div>
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle_at_center,_#8b5cf6_0,_transparent_55%)] animate-slow-spin [animation-delay:-5s]"></div>
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-3/4 -translate-y-3/4 bg-[radial-gradient(circle_at_center,_#ec4899_0,_transparent_60%)] animate-slow-spin [animation-delay:-10s]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <AnimatedDiv>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
            Unlock the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Synergy</span>
          </h1>
        </AnimatedDiv>
        <AnimatedDiv delay={200}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
            Harness the power of AI and seamless integration to elevate your projects beyond imagination. Start building faster, smarter, and more collaboratively today.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay={400} className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 animate-pulse-glow">
            Start Your Free Trial
          </button>
          <button className="bg-slate-700/50 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-600/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-slate-600 hover:shadow-lg hover:shadow-blue-500/20">
            Request a Demo
          </button>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Hero;