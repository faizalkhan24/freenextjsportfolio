import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Blog() {
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
        setPosts(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-thirty p-2 rounded-lg shadow-lg hover:bg-gray-600 transition">
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{new Date(post.date).toLocaleDateString()} - By {post.author}</p>
            <p className="mb-4">{post.content.substring(0, 100)}...</p>
            <a
              href={`/blog/${post._id}`}
              className="text-ten hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
