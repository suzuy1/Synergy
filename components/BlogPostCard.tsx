import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedDiv from './AnimatedDiv';

interface Post {
  id: number;
  title: string;
  href?: string;
  description: string;
  imageUrl: string;
  category: { name: string; href: string };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
}

interface BlogPostCardProps {
  post: Post;
  delay?: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, delay = 0 }) => {
  return (
    <AnimatedDiv delay={delay}>
      <article className="group relative flex flex-col items-start justify-between h-full bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/30">
        <div className="relative w-full">
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-x-4 text-xs">
            <Link
              to={post.category.href}
              className="relative z-10 rounded-full bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-500 transition-colors"
            >
              {post.category.name}
            </Link>
          </div>
          <div className="group relative flex-grow mt-4">
            <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors">
              <Link to={post.href || '#'}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{post.description}</p>
          </div>
          <div className="relative mt-6 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-white">
                <Link to={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </Link>
              </p>
              <p className="text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>
    </AnimatedDiv>
  );
};

export default BlogPostCard;