// components/BlogCard.js
import Image from 'next/image';

const BlogCard = ({ image, title, publisher, excerpt }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold p-4">
          {title}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">By {publisher}</p>
        <p className="text-gray-800">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
