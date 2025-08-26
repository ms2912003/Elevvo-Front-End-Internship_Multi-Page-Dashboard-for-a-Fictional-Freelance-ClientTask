import React from 'react';

const projectsData = [
  { id: 1, name: 'Website Redesign for Alpha Co.', status: 'In Progress', deadline: '2025-09-30' },
  { id: 2, name: 'Mobile App Development', status: 'Completed', deadline: '2025-07-15' },
  { id: 3, name: 'Marketing Campaign Strategy', status: 'Pending', deadline: '2025-10-20' },
  { id: 4, name: 'Brand Identity Creation', status: 'In Progress', deadline: '2025-11-05' },
];

const Projects = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projectsData.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;