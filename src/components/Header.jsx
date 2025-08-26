import React from 'react';
import NotificationDropdown from './NotificationDropdown';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineExitToApp } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-gray-500 hover:text-black p-2 md:hidden">
        <HiMenuAlt2 className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold">Freelance Dashboard</h1>
      <div className="relative flex-1 max-w-lg">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"/>
      </div>
      <div className="flex items-center space-x-4">
        <NotificationDropdown />
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40/FF5C85/FFF?text=MS"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-4 border-indigo-500"
          />
          <div className="hidden sm:flex items-center px-3 py-2 bg-gray-700 rounded-lg bg-indigo-600">
            <span className="text-sm font-semibold text-white-300">
              Welcome, Menna Saad!
            </span>
          </div>
          <button
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-black-500 transition-colors duration-200">
          <MdOutlineExitToApp className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;