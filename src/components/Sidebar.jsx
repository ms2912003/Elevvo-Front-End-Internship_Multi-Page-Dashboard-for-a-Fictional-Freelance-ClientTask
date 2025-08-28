import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdWork, MdSettings } from 'react-icons/md';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const links = [
    { to: '/', text: 'Dashboard', icon: MdDashboard, color: 'text-indigo-400' },
    { to: '/projects', text: 'Projects', icon: MdWork, color: 'text-green-400' },
    { to: '/settings', text: 'Profile Settings', icon: MdSettings, color: 'text-yellow-400' },
  ];

  return (
    <aside
      className={`
        bg-gray-900 text-white h-screen p-4
        fixed inset-y-0 left-0 z-50 transform
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'w-64' : 'w-20'}
      `}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 bg-gray-800 rounded-full p-1 hover:bg-gray-700"
      >
        {isSidebarOpen ? (
          <HiChevronDoubleLeft className="h-5 w-5 text-white" />
        ) : (
          <HiChevronDoubleRight className="h-5 w-5 text-white" />
        )}
      </button>

      <div className="flex items-center space-x-2 mb-8">
        <span className="text-xl font-bold">{isSidebarOpen ? 'Freelance' : ' '}</span>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`
                  flex items-center p-2 rounded
                  hover:bg-gray-700 transition-colors duration-200
                  ${location.pathname === link.to ? 'bg-gray-700 text-white' : 'text-gray-400'}
                `}
              >
                <link.icon className={`h-5 w-5 ${link.color}`} />
                {isSidebarOpen && <span className="ml-2">{link.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
