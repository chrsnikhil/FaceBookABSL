'use client';

import React from 'react';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';

interface Story {
  id: number;
  name: string;
  image: string;
  profile: string;
  isCreate?: boolean;
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Create Story',
    image: '/download.jpeg',
    profile: '/download.jpeg',
    isCreate: true,
  },
  {
    id: 2,
    name: 'John Doe',
    image: '/download.jpeg',
    profile: '/download.jpeg',
  },
  {
    id: 3,
    name: 'Jane Smith',
    image: '/download.jpeg',
    profile: '/download.jpeg',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    image: '/download.jpeg',
    profile: '/download.jpeg',
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    image: '/download.jpeg',
    profile: '/download.jpeg',
  },
];

const StorySection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative flex-shrink-0 cursor-pointer group"
          >
            <div className="relative w-28 h-48 rounded-xl overflow-hidden">
              <Image
                src={story.image}
                alt={story.name}
                fill
                className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-200"
              />
              
              {story.isCreate ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <AiOutlinePlus className="text-white text-xl" />
                      </div>
                      <p className="text-white text-sm font-medium text-center">
                        Create Story
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-4 left-4 ring-4 ring-blue-500 rounded-full overflow-hidden">
                    <div className="relative w-9 h-9">
                      <Image
                        src={story.profile}
                        alt={`${story.name}'s profile`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <p className="text-white text-sm font-medium">
                      {story.name}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySection; 