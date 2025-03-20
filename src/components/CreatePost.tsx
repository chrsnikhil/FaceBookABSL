'use client';

import Image from 'next/image';
import { MdVideocam } from 'react-icons/md';
import { IoImagesOutline } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

const CreatePost = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 relative">
          <Image
            src="/download.jpeg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full py-2.5 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          What's on your mind?
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <MdVideocam className="text-white text-lg" />
            </div>
            <span className="text-sm font-medium">Live Video</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <IoImagesOutline className="text-white text-lg" />
            </div>
            <span className="text-sm font-medium">Photo/Video</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <BsEmojiSmile className="text-white text-lg" />
            </div>
            <span className="text-sm font-medium">Feeling/Activity</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost; 