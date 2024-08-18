import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navbarandfooter text-white shadow-md border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-ten">
                CyberSecExpert
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/aboutus">
              <span className="hover:text-ten">About</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-ten">Services</span>
            </Link>
            <Link href="/projects">
              <span className="hover:text-ten">Projects</span>
            </Link>
            <Link href="/blog">
              <span className="hover:text-ten">Blog</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-ten">Contact</span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-thirty border-t border-gray-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/aboutus">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
                Services
              </span>
            </Link>
            <Link href="/projects">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
                Projects
              </span>
            </Link>
            <Link href="/blog">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
