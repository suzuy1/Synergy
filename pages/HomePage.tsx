import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';
import TrustedBy from '../components/TrustedBy';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';

const HomePage: React.FC = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <TrustedBy />
      <section id="features"><Features /></section>
      <HowItWorks />
      <section id="testimonials"><Testimonials /></section>
      <section id="faq"><FAQ /></section>
      <section id="pricing"><Pricing /></section>
      <CTA />
    </>
  );
};

export default HomePage;