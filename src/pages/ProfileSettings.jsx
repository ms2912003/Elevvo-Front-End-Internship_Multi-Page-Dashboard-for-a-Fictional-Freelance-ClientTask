import React from 'react';
import Button from '../components/Button';

const ProfileSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Profile Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" defaultValue="Menna Saad" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" defaultValue="menna.saad@example.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" placeholder="********" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div className="pt-4">
            <Button type="submit"> Save Changes </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;