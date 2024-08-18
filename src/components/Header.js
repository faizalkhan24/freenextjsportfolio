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
    <header className="relative bg-gray-800 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 flex">
        <div className="flex-1 relative">
          {/* Mobile view: background image */}
          <div className="absolute inset-0 block lg:hidden">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover absolute inset-0 z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Welcome to CyberSecExpert
              </h1>
              <p className="text-base sm:text-lg mb-6">
                {images[currentImage].context}
              </p>
              <Link
                href="services"
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          {/* Desktop view: images */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative overflow-hidden">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
