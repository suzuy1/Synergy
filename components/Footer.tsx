import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, SYNERGY_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
                {SYNERGY_LOGO}
                <span className="text-xl font-bold text-white">Synergy</span>
            </Link>
        </div>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          by oriza
        </p>
      </div>
    </footer>
  );
};

export default Footer;