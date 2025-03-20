'use client';

import Image from 'next/image';

const stories = [
  {
    id: 1,
    name: 'Create Story',
    image: '/placeholder.jpg',
    isCreate: true,
  },
  {
    id: 2,
    name: 'John Doe',
    image: '/placeholder.jpg',
    profile: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Jane Smith',
    image: '/placeholder.jpg',
    profile: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    image: '/placeholder.jpg',
    profile: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    image: '/placeholder.jpg',
    profile: '/placeholder.jpg',
  },
];

const StorySection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative flex-shrink-0 cursor-pointer group"
          >
            <div className="relative w-32 h-48 rounded-xl overflow-hidden">
              <Image
                src={story.image}
                alt={story.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {!story.isCreate && (
                <div className="absolute top-4 left-4 ring-4 ring-blue-500 rounded-full overflow-hidden">
                  <Image
                    src={story.profile || ''}
                    alt={`${story.name}'s profile`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium">{story.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySection; 