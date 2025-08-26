import React, { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5'; 

const notifications = [
  { id: 1, message: 'Payment received for Project Alpha.', time: '2 hours ago' },
  { id: 2, message: 'Task "Design Mockups" completed.', time: '1 day ago' },
  { id: 3, message: 'New client "Beta Corp" added.', time: '3 days ago' },
];

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Cleaned up and updated className
        className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-black focus:outline-none transition-colors duration-200"
      >
        {/* Using a React Icon for consistency */}
        <IoNotificationsOutline className="h-6 w-6" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <span className="text-sm text-gray-500">{notifications.length} new</span>
            </div>
            <ul className="divide-y divide-y-200">
              {notifications.map((notification) => (
                <li key={notification.id} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;