import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query; 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  //for dummy 
  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const dummyData = [
          {
            id: '1',
            title: 'Understanding Cyber Threats',
            coverPhoto: 'https://via.placeholder.com/800x400?text=Cyber+Threats',
            content: `
              <p>An in-depth look at common cyber threats and how to defend against them.</p>
              <p>Cyber threats are becoming more sophisticated, making it crucial to stay informed and prepared. This article explores...</p>
            `,
            date: 'August 10, 2024',
            author: 'John Doe',
          },
          {
            id: '2',
            title: 'Why Penetration Testing is Essential',
            coverPhoto: 'https://via.placeholder.com/800x400?text=Penetration+Testing',
            content: `
              <p>Learn the importance of penetration testing in today’s digital landscape.</p>
              <p>Penetration testing is a vital part of any organization’s security strategy. This article covers the...</p>
            `,
            date: 'August 15, 2024',
            author: 'Jane Smith',
          },
          {
            id: '3',
            title: 'Best Practices for Incident Response',
            coverPhoto: 'https://via.placeholder.com/800x400?text=Incident+Response',
            content: `
              <p>Tips and strategies for effective incident response in your organization.</p>
              <p>When a security breach occurs, every second counts. This article provides key insights on how to handle...</p>
            `,
            date: 'August 18, 2024',
            author: 'Alex Johnson',
          },
        ];
        const foundPost = dummyData.find((post) => post.id === id);
        setPost(foundPost);
      };
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <p className="text-center text-white">Loading...</p>;
  }

  //real data

//   useEffect(() => {
//     if (id) {
//       const fetchPost = async () => {
//         try {
//           const response = await fetch(`/api/blog/${id}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch post data');
//           }
//           const data = await response.json();
//           setPost(data);
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchPost();
//     }
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-white">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">Error: {error}</p>;
//   }

//   if (!post) {
//     return <p className="text-center text-white">No post found.</p>;
//   }


  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-400 mb-4">{post.date} - By {post.author}</p>
        <Image
          src={post.coverPhoto}
          alt={post.title}
          width={200}  // Add width
          height={200}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div
          className="prose prose-lg prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
