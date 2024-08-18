import React, { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  { src: "/images/sahil.png", alt: "3D Image 1", context: "Innovative Security Solutions" },
  { src: "/images/sahil.png", alt: "3D Image 2", context: "Advanced Threat Protection" },
  // Add more images and contexts as needed
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagePosition, setImagePosition] = useState('right');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagePosition((prevPosition) => (prevPosition === 'right' ? 'left' : 'right'));
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="relative bg-sixty text-white min-h-screen flex items-center">
      <div className="absolute inset-0 flex">
        <div className={`flex-1 flex justify-center items-center relative overflow-hidden`}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out 
                ${index === currentImage && imagePosition === 'right' ? 'slide-enter-right' : ''} 
                ${index !== currentImage && imagePosition === 'left' ? 'slide-exit-left' : ''} 
                ${index === currentImage && imagePosition === 'left' ? 'slide-enter-left' : ''} 
                ${index !== currentImage && imagePosition === 'right' ? 'slide-exit-right' : ''}`}
            />
          ))}
        </div>
        <div className={`flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to CyberSecExpert</h1>
          <p className="text-lg md:text-xl mb-6">
            {images[currentImage].context}
          </p>
          <Link href="services" className="inline-block px-6 py-3 bg-ten text-white font-semibold rounded-lg hover:bg-ten transition duration-300">
            Explore Our Services
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
