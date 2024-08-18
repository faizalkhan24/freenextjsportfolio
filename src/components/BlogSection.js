import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const dummyData = [
        {
          id: 1,
          title: "Understanding Cyber Threats",
          description:
            "An in-depth look at common cyber threats and how to defend against them.",
          date: "August 10, 2024",
          author: "John Doe",
          coverPhoto: "https://via.placeholder.com/400x250?text=Cyber+Threats",
        },
        {
          id: 2,
          title: "Why Penetration Testing is Essential",
          description:
            "Learn the importance of penetration testing in today’s digital landscape.",
          date: "August 15, 2024",
          author: "Jane Smith",
          coverPhoto:
            "https://via.placeholder.com/400x250?text=Penetration+Testing",
        },
        {
          id: 3,
          title: "Best Practices for Incident Response",
          description:
            "Tips and strategies for effective incident response in your organization.",
          date: "August 18, 2024",
          author: "Alex Johnson",
          coverPhoto:
            "https://via.placeholder.com/400x250?text=Incident+Response",
        },
        {
          id: 4,
          title: "Advanced Cybersecurity Techniques",
          description:
            "Explore advanced techniques to protect your digital assets.",
          date: "August 22, 2024",
          author: "Alice Brown",
          coverPhoto:
            "https://via.placeholder.com/400x250?text=Advanced+Techniques",
        },
      ];

      // Simulate API call
      const sortedPosts = dummyData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setPosts(sortedPosts.slice(0, 3));
    };

    fetchPosts();
  }, []);

  return (
    <section className="min-h-screen bg-gray-800 text-white p-8">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold">Our Latest Blog</h1>
        <Link href="/blog">
          <span className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
            Explore All Blogs
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-700 p-4 rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            <Image
              src={post.coverPhoto}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">
              {post.date} - By {post.author}
            </p>
            <p className="mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-green-500 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
