import React from 'react';

// The logo is a 3D isometric cube/block.
export const SYNERGY_LOGO = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Icons for features
const BoltIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const UsersIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ShieldIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;

// Icons for mobile menu
export const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>;
export const XIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

// Generic icons
export const CheckIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
export const ChevronDownIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;


export const FEATURES = [
  {
    name: 'Lightning Fast',
    description: 'Experience unparalleled speed and responsiveness. Our infrastructure is optimized for performance.',
    icon: BoltIcon,
  },
  {
    name: 'Collaborative Workspace',
    description: 'Work together with your team in real-time. Share, comment, and iterate with ease.',
    icon: UsersIcon,
  },
  {
    name: 'Ironclad Security',
    description: 'Your data is protected with enterprise-grade security features. We take your privacy seriously.',
    icon: ShieldIcon,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Sign Up in Seconds',
    description: 'Create your account with just a few clicks. No credit card required to get started.',
  },
  {
    step: 2,
    title: 'Integrate Your Tools',
    description: 'Connect your favorite applications and services with our powerful one-click integrations.',
  },
    {
    step: 3,
    title: 'Start Building',
    description: 'Leverage our full suite of features to build, manage, and scale your projects like never before.',
  },
];

export const TRUSTED_BY_LOGOS = [
  { name: 'QuantumCore', logo: <svg viewBox="0 0 130 30" fill="currentColor" width="130" height="30"><path d="M12.3 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8H.3v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.5-5.4zM36.1 7.7c-3.3 0-5.7 2.3-5.7 5.7s2.4 5.7 5.7 5.7 5.7-2.3 5.7-5.7-2.4-5.7-5.7-5.7zm0 9.2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zM53.1 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8h-6.5v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.6-5.4zM74 7.5c-2.2 0-3.9 1.7-3.9 3.9v6.3h-6.6V7.7c0-3.3-2.3-5.4-6.6-5.4-3.9 0-6.6 2.3-6.6 5.6v12.8h6.6V16.4c0-2.2 1.2-3.9 3.4-3.9s3.3 1.7 3.3 3.9v8.2h6.6v-8c0-2.2 1.7-3.9 3.9-3.9s3.9 1.7 3.9 3.9v8h6.6V11c0-3.4-2.4-5.8-6.6-5.8zM96.5 7.7c-3.3 0-5.7 2.3-5.7 5.7s2.4 5.7 5.7 5.7 5.7-2.3 5.7-5.7-2.4-5.7-5.7-5.7zm0 9.2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zM119.5 7.4h-5.2l-2.1 4.5-2.1-4.5h-5.2l4.7 9.5v5.8h6.6v-5.8l4.6-9.5z"></path></svg> },
  { name: 'Nebula Systems', logo: <svg viewBox="0 0 130 30" fill="currentColor" width="130" height="30"><path d="M12.3 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8H.3v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.5-5.4zM35.6 13.4c0-3.1-2.4-5.7-5.8-5.7s-5.8 2.5-5.8 5.7 2.6 5.7 5.8 5.7 5.8-2.5 5.8-5.7zm-9.1 0c0-1.7 1.2-3.2 3.3-3.2s3.3 1.4 3.3 3.2-1.2 3.2-3.3 3.2-3.3-1.4-3.3-3.2zM53.1 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8h-6.5v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.6-5.4zM74.8 13.2l-2.6-5.8h-6.7v13.3h6.6V11.2l2.2 4.9h.2l2.2-4.9v9.5h6.6V7.4h-6.7zM97.1 2.3c-3.9 0-6.6 2.5-6.6 5.6v12.8h6.6V7.9c0-2.2 1.3-3.4 3.3-3.4s3.3 1.2 3.3 3.4v12.8h6.6V7.7c-.1-3.2-2.7-5.4-6.6-5.4zM119.5 7.4h-5.2l-2.1 4.5-2.1-4.5h-5.2l4.7 9.5v5.8h6.6v-5.8l4.6-9.5z"></path></svg> },
  { name: 'Apex Innovations', logo: <svg viewBox="0 0 130 30" fill="currentColor" width="130" height="30"><path d="M12.3 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8H.3v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.5-5.4zM36.1 7.7c-3.3 0-5.7 2.3-5.7 5.7s2.4 5.7 5.7 5.7 5.7-2.3 5.7-5.7-2.4-5.7-5.7-5.7zm0 9.2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zM53.1 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8h-6.5v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.6-5.4zM74.8 13.2l-2.6-5.8h-6.7v13.3h6.6V11.2l2.2 4.9h.2l2.2-4.9v9.5h6.6V7.4h-6.7zM97.1 2.3c-3.9 0-6.6 2.5-6.6 5.6v12.8h6.6V7.9c0-2.2 1.3-3.4 3.3-3.4s3.3 1.2 3.3 3.4v12.8h6.6V7.7c-.1-3.2-2.7-5.4-6.6-5.4zM119.5 7.4h-5.2l-2.1 4.5-2.1-4.5h-5.2l4.7 9.5v5.8h6.6v-5.8l4.6-9.5z"></path></svg> },
  { name: 'Pinnacle Dynamics', logo: <svg viewBox="0 0 130 30" fill="currentColor" width="130" height="30"><path d="M12.9 20.7c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1zm6.7 0c0 1.4-1.2 2.6-2.6 2.6s-2.6-1.2-2.6-2.6 1.2-2.6 2.6 2.6 2.6 1.2 2.6 2.6zM35.6 13.4c0-3.1-2.4-5.7-5.8-5.7s-5.8 2.5-5.8 5.7 2.6 5.7 5.8 5.7 5.8-2.5 5.8-5.7zm-9.1 0c0-1.7 1.2-3.2 3.3-3.2s3.3 1.4 3.3 3.2-1.2 3.2-3.3 3.2-3.3-1.4-3.3-3.2zM53.1 2.3c-2.3 0-4.3 1.2-5.4 3.1h-.1v-2.8h-6.5v18.1h6.6v-9.3c0-2.3 1.3-4.1 3.5-4.1s3.5 1.8 3.5 4.1v9.3h6.6V7.7c0-3.3-2.3-5.4-6.6-5.4zM74.8 13.2l-2.6-5.8h-6.7v13.3h6.6V11.2l2.2 4.9h.2l2.2-4.9v9.5h6.6V7.4h-6.7zM97.1 2.3c-3.9 0-6.6 2.5-6.6 5.6v12.8h6.6V7.9c0-2.2 1.3-3.4 3.3-3.4s3.3 1.2 3.3 3.4v12.8h6.6V7.7c-.1-3.2-2.7-5.4-6.6-5.4zM119.5 7.4h-5.2l-2.1 4.5-2.1-4.5h-5.2l4.7 9.5v5.8h6.6v-5.8l4.6-9.5z"></path></svg> },
];

export const TESTIMONIALS = [
  {
    quote: "Synergy has completely transformed our workflow. The speed and collaboration features are second to none. We're delivering projects faster than ever before.",
    name: 'Sarah Johnson',
    title: 'Project Manager at TechCorp',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. The platform is intuitive, powerful, and the security gives us peace of mind. Highly recommended!",
    name: 'Michael Chen',
    title: 'Lead Developer at Innovate LLC',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    quote: "As a designer, the seamless integration with my existing tools is a game-changer. It allows me to focus on creativity without worrying about the technical overhead.",
    name: 'Emily Rodriguez',
    title: 'UX/UI Designer at Creative Solutions',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];


export const FAQS = [
  {
    question: 'What is Synergy and what does it do?',
    answer: 'Synergy is a next-generation platform designed to streamline your workflow through powerful AI and seamless integrations. It helps teams collaborate more effectively, build faster, and deploy with confidence.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial with access to all our Pro features. No credit card is required to sign up. You can explore the full potential of Synergy and see if it\'s the right fit for you.'
  },
  {
    question: 'What kind of security measures are in place?',
    answer: 'We take security very seriously. Our platform is built with enterprise-grade security protocols, including end-to-end encryption, regular security audits, and compliance with major data protection standards like GDPR and SOC 2.'
  },
  {
    question: 'Can I integrate Synergy with my existing tools?',
    answer: 'Absolutely. Synergy is built to be extensible. We offer a wide range of native integrations with popular tools like Slack, GitHub, Jira, and more. We also provide a robust API for custom integrations.'
  },
   {
    question: 'What kind of support can I expect?',
    answer: 'We offer 24/7 customer support for all our paid plans. Our support team is available via email, live chat, and phone. We also have an extensive knowledge base and community forums to help you get answers quickly.'
  },
];


export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$0',
    frequency: '/month',
    description: 'For individuals and small teams getting started.',
    features: [
      '5 Projects',
      'Basic Analytics',
      '2 Integrations',
      'Community Support'
    ],
    cta: 'Get Started for Free',
    recommended: false,
  },
  {
    name: 'Pro',
    price: '$49',
    frequency: '/month',
    description: 'For growing teams that need more power and support.',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      '50 Integrations',
      'API Access',
      'Priority Email Support'
    ],
    cta: 'Start Free Trial',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'For large organizations with specific needs.',
    features: [
      'Everything in Pro',
      'Single Sign-On (SSO)',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'Custom Security Reviews'
    ],
    cta: 'Contact Sales',
    recommended: false,
  }
];


// Icons for social links
const TwitterIcon = <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const GitHubIcon = <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>;
const LinkedInIcon = <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'GitHub', href: '#', icon: GitHubIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
];

export const BLOG_POSTS = [
  {
    id: 1,
    category: { name: 'Productivity', href: '#' },
    title: 'Boost your productivity with these 5 Synergy tips',
    description: 'Discover hidden features and best practices to supercharge your workflow and get more done in less time.',
    imageUrl: `https://picsum.photos/seed/blog1/800/600`,
    author: {
      name: 'Michael Chen',
      role: 'Lead Developer',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=2',
    },
  },
  {
    id: 2,
    category: { name: 'Case Study', href: '#' },
    title: 'How TechCorp increased deployment speed by 40%',
    description: 'A deep dive into how TechCorp leveraged Synergy\'s CI/CD integrations to revolutionize their development pipeline.',
    imageUrl: `https://picsum.photos/seed/blog2/800/600`,
    author: {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
    },
  },
  {
    id: 3,
    category: { name: 'Design', href: '#' },
    title: 'Designing for collaboration: Our approach to UX',
    description: 'Explore the design principles behind Synergy\'s intuitive interface that makes teamwork seamless and enjoyable.',
    imageUrl: `https://picsum.photos/seed/blog3/800/600`,
    author: {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=3',
    },
  },
   {
    id: 4,
    category: { name: 'Engineering', href: '#' },
    title: 'Under the Hood: Scaling Our Infrastructure',
    description: 'A technical look at the challenges and solutions in building a highly available and performant platform for our users.',
    imageUrl: `https://picsum.photos/seed/blog4/800/600`,
    author: {
      name: 'Alex Smith',
      role: 'DevOps Engineer',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=4',
    },
  },
  {
    id: 5,
    category: { name: 'Future', href: '#' },
    title: 'The Future of Synergy: What\'s Next on Our Roadmap',
    description: 'A sneak peek into the exciting new features and capabilities we\'re building to further empower your teams.',
    imageUrl: `https://picsum.photos/seed/blog5/800/600`,
    author: {
      name: 'Jane Doe',
      role: 'CEO',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=5',
    },
  },
  {
    id: 6,
    category: { name: 'Security', href: '#' },
    title: 'Our Commitment to Your Data Security',
    description: 'Learn about the robust security measures we have in place to protect your data and ensure your peace of mind.',
    imageUrl: `https://picsum.photos/seed/blog6/800/600`,
    author: {
      name: 'Chris Lee',
      role: 'Security Specialist',
      href: '#',
      imageUrl: 'https://i.pravatar.cc/150?img=6',
    },
  },
];