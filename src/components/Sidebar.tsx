'use client';

import Image from 'next/image';
import { FaUserFriends, FaStore, FaBookmark, FaFlag, FaCalendarAlt, FaGamepad } from 'react-icons/fa';
import { MdOndemandVideo, MdGroups, MdHistory } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';
import { AiOutlineDesktop } from 'react-icons/ai';
import { IoNewspaperOutline } from 'react-icons/io5';
import { HiRocketLaunch } from 'react-icons/hi2';

const menuItems = [
  { id: 1, name: 'Friends', icon: FaUserFriends },
  { id: 2, name: 'Groups', icon: MdGroups },
  { id: 3, name: 'Marketplace', icon: FaStore },
  { id: 4, name: 'Watch', icon: MdOndemandVideo },
  { id: 5, name: 'Memories', icon: MdHistory },
  { id: 6, name: 'Saved', icon: FaBookmark },
  { id: 7, name: 'Pages', icon: FaFlag },
  { id: 8, name: 'Events', icon: FaCalendarAlt },
  { id: 9, name: 'Gaming', icon: FaGamepad },
];

const shortcuts = [
  { id: 1, name: 'Web Development', icon: BsLaptop },
  { id: 2, name: 'Design Community', icon: AiOutlineDesktop },
  { id: 3, name: 'Tech News', icon: IoNewspaperOutline },
  { id: 4, name: 'Startup Hub', icon: HiRocketLaunch },
];

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="flex items-center space-x-3 px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
        <div className="h-9 w-9 relative">
          <Image
            src="/download.jpeg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="font-medium">Your Name</span>
      </div>

      {/* Main Menu */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center space-x-3 w-full px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <item.icon className="text-xl text-blue-500" />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Shortcuts */}
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 font-medium px-2 mb-2">
          Your Shortcuts
        </h3>
        <div className="space-y-1">
          {shortcuts.map((shortcut) => (
            <button
              key={shortcut.id}
              className="flex items-center space-x-3 w-full px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <shortcut.icon className="text-xl text-gray-500" />
              <span className="font-medium">{shortcut.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-2 text-xs text-gray-500 dark:text-gray-400 space-y-2">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Advertising</a>
          <span>·</span>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <p>© 2024 Modern Facebook</p>
      </div>
    </div>
  );
};

export default Sidebar; 