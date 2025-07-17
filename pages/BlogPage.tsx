import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import AnimatedDiv from '../components/AnimatedDiv';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedDiv className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the Blog</h2>
            <p className="mt-2 text-lg leading-8 text-slate-300">
                Insights, stories, and announcements from the Synergy team.
            </p>
        </AnimatedDiv>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;