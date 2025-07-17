import React from 'react';
import AnimatedDiv from './AnimatedDiv';
import { TRUSTED_BY_LOGOS } from '../constants';

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedDiv>
            <h2 className="text-center text-lg font-semibold leading-8 text-slate-300">
                Trusted by the world's most innovative teams
            </h2>
            <div className="mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {TRUSTED_BY_LOGOS.map((company) => (
                <div key={company.name} className="flex justify-center text-slate-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                     {company.logo}
                </div>
            ))}
            </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default TrustedBy;