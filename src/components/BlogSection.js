import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const sortedPosts = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts.slice(0, 3));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="min-h-screen bg-sixty text-white p-8">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold">Our Latest Blog</h1>
        <Link href="/blog" className="inline-block bg-ten text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-ten transition duration-300">
            Explore All Blogs
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id} 
            className="bg-thirty p-4 rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">
              {new Date(post.date).toLocaleDateString()} - By {post.author}
            </p>
            <p className="mb-4">{post.content.substring(0, 100)}...</p>
            <Link
              href={`/blog/${post._id}`} 
            >
              <span className="text-ten hover:underline" >Read more →</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
