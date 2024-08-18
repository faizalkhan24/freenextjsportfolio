import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query; 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch post data');
          }
          const data = await response.json();
          setPost(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!post) {
    return <p className="text-center text-white">No post found.</p>;
  }

  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-400 mb-4">{new Date(post.date).toLocaleDateString()} - By {post.author}</p>
        
        {/* Display the image if available */}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        
        {/* Display the video if available */}
        {post.video && (
          <div className="mb-8">
            <video className="w-full rounded-lg" controls>
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        {/* Render content */}
        <div
          className="prose prose-lg prose-invert mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Render tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
