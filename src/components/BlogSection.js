// components/BlogSection.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample blog post data
const blogPosts = [
  {
    image: "/images/sahil.png",
    title: "Blog Post 1",
    publisher: "Jane Doe",
    excerpt: "Brief excerpt of the blog post.",
    slug: "blog-post-1",
  },
  {
    image: "/images/sahil.png",
    title: "Blog Post 2",
    publisher: "John Smith",
    excerpt: "Another brief excerpt of the blog post.",
    slug: "blog-post-2",
  },
  {
    image: "/images/sahil.png",
    title: "Blog Post 3",
    publisher: "John Smith",
    excerpt: "Another brief excerpt of the blog post.",
    slug: "blog-post-2",
  },
  {
    image: "/images/sahil.png",
    title: "Blog Post 3",
    publisher: "John Smith",
    excerpt: "Another brief excerpt of the blog post.",
    slug: "blog-post-2",
  },
];

const BlogSection = () => (
  <section className="bg-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
        <Link href="/blogs">
          <span className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-900 transition duration-300">
            View All Blogs
          </span>
        </Link>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500 duration-400"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold p-4 transition-opacity duration-300 hover:opacity-75">
                {post.title}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-green-900 font-semibold">{post.title}</h3>
              <p className="mt-2 text-green-600">By {post.publisher}</p>
              <p className="mt-2 text-gray-800">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <span className="mt-4 inline-block text-green-500 hover:underline">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
