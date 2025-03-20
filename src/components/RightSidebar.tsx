'use client';

import Image from 'next/image';
import { BsCameraVideo, BsSearch, BsThreeDots, BsPlusLg } from 'react-icons/bs';

const contacts = [
  { id: 1, name: 'John Doe', image: '/download.jpeg', status: 'online' },
  { id: 2, name: 'Jane Smith', image: '/download.jpeg', status: 'online' },
  { id: 3, name: 'Mike Johnson', image: '/download.jpeg', status: 'offline' },
  { id: 4, name: 'Sarah Wilson', image: '/download.jpeg', status: 'online' },
  { id: 5, name: 'David Brown', image: '/download.jpeg', status: 'offline' },
];

const sponsored = [
  {
    id: 1,
    title: 'Modern Web Development',
    description: 'Learn the latest web technologies',
    image: '/download.jpeg',
  },
  {
    id: 2,
    title: 'Tech Gadgets Store',
    description: 'Find the best deals on electronics',
    image: '/download.jpeg',
  },
];

const RightSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Sponsored Section */}
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 font-medium px-2 mb-4">
          Sponsored
        </h3>
        <div className="space-y-4">
          {sponsored.map((ad) => (
            <a
              key={ad.id}
              href="#"
              className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="relative h-32 w-32 flex-shrink-0">
                <Image
                  src={ad.image}
                  alt={ad.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{ad.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {ad.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <div className="flex items-center justify-between px-2 mb-4">
          <h3 className="text-gray-500 dark:text-gray-400 font-medium">
            Contacts
          </h3>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <BsCameraVideo className="text-lg text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <BsSearch className="text-lg text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <BsThreeDots className="text-lg text-gray-500" />
            </button>
          </div>
        </div>
        <div className="space-y-1">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              className="flex items-center space-x-3 w-full px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="relative">
                <div className="h-8 w-8 relative">
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                {contact.status === 'online' && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-800" />
                )}
              </div>
              <span className="font-medium">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Group Conversations */}
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 font-medium px-2 mb-2">
          Group Conversations
        </h3>
        <button className="flex items-center space-x-3 w-full px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <BsPlusLg className="text-gray-600 dark:text-gray-400" />
          </div>
          <span className="font-medium">Create New Group</span>
        </button>
      </div>
    </div>
  );
};

export default RightSidebar; 