import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const dummyData = [
        {
          id: 1,
          title: 'Understanding Cyber Threats',
          description: 'An in-depth look at common cyber threats and how to defend against them.',
          date: 'August 10, 2024',
          author: 'John Doe',
          coverPhoto: 'https://via.placeholder.com/400x250?text=Cyber+Threats',
        },
        {
          id: 2,
          title: 'Why Penetration Testing is Essential',
          description: 'Learn the importance of penetration testing in today’s digital landscape.',
          date: 'August 15, 2024',
          author: 'Jane Smith',
          coverPhoto: 'https://via.placeholder.com/400x250?text=Penetration+Testing',
        },
        {
          id: 3,
          title: 'Best Practices for Incident Response',
          description: 'Tips and strategies for effective incident response in your organization.',
          date: 'August 18, 2024',
          author: 'Alex Johnson',
          coverPhoto: 'https://via.placeholder.com/400x250?text=Incident+Response',
        },
      ];

      setPosts(dummyData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-thirty p-2 rounded-lg shadow-lg hover:bg-gray-600 transition">
            <Image
              src={post.coverPhoto}
              alt={post.title}
              width={200}  
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.date} - By {post.author}</p>
            <p className="mb-4">{post.description}</p>
            <a
              href={`/blog/${post.id}`}
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
