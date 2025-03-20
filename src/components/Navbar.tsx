'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="h-8 w-8 relative">
                <Image
                  src="/download.jpeg"
                  alt="Facebook"
                  fill
                  className="text-blue-500"
                />
              </div>
            </Link>
            <div className="ml-4 bg-gray-100 dark:bg-gray-700 rounded-full">
              <input
                type="text"
                placeholder="Search Facebook"
                className="w-64 px-4 py-2 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Center section - Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-1">
              {['Home', 'Watch', 'Marketplace', 'Groups', 'Gaming'].map((item) => (
                <button
                  key={item}
                  className="px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 