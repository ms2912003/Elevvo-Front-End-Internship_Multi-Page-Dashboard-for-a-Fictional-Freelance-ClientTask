import React from 'react';
import SummaryCard from '../components/SummaryCard';
import EarningsChart from '../components/EarningsChart';
import TaskTypePieChart from '../components/TaskTypePieChart';

const Overview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Total Projects" value="42" icon="🚀" />
        <SummaryCard title="Total Earnings" value="$25,500" icon="💰" />
        <SummaryCard title="Tasks Due" value="8" icon="🗓️" />
        <SummaryCard title="Active Clients" value="7" icon="🤝" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Monthly Earnings</h3>
          <EarningsChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl font-bold mb-4">Task Distribution</h3>
          <TaskTypePieChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <ul className="space-y-2">
            <li className="p-2 border-b border-gray-200">Payment received for Project Alpha. <span className="text-xs text-gray-500 float-right">2 hours ago</span></li>
            <li className="p-2 border-b border-gray-200">Task "Design Mockups" completed. <span className="text-xs text-gray-500 float-right">1 day ago</span></li>
            <li className="p-2 border-b border-gray-200">New client "Beta Corp" added. <span className="text-xs text-gray-500 float-right">3 days ago</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;