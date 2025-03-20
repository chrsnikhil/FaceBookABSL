'use client';

import Image from 'next/image';
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const posts = [
  {
    id: 1,
    author: {
      name: 'John Doe',
      image: '/download.jpeg',
      timestamp: '2h',
    },
    content: 'Just launched my new website! Check it out 🚀',
    image: '/download.jpeg',
    likes: 1234,
    comments: 56,
    shares: 12,
  },
  {
    id: 2,
    author: {
      name: 'Jane Smith',
      image: '/download.jpeg',
      timestamp: '4h',
    },
    content: 'Beautiful sunset at the beach today! 🌅',
    image: '/download.jpeg',
    likes: 2345,
    comments: 78,
    shares: 23,
  },
];

const Feed = () => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          {/* Post Header */}
          <div className="p-4 flex items-center space-x-3">
            <div className="h-10 w-10 relative">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.timestamp}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <BsThreeDots className="text-xl text-gray-500" />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
          </div>

          {/* Post Image */}
          <div className="relative aspect-video">
            <Image
              src={post.image}
              alt="Post image"
              fill
              className="object-cover"
            />
          </div>

          {/* Post Stats */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <AiOutlineLike className="text-blue-500 text-lg" />
                <span>{post.likes.toLocaleString()}</span>
              </div>
              <div className="flex space-x-4">
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 py-2">
            <div className="flex justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <AiOutlineLike className="text-xl" />
                <span className="font-medium">Like</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <AiOutlineComment className="text-xl" />
                <span className="font-medium">Comment</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <AiOutlineShareAlt className="text-xl" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Feed; 