import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Development', value: 30 },
  { name: 'Design', value: 25 },
  { name: 'Client Communication', value: 15 },
  { name: 'Project Management', value: 10 },
  { name: 'Other', value: 20 },
];

const COLORS = ['#e95a97', '#8884d8', '#ffc658', '#00c49f', '#ff8042'];

const TaskTypePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TaskTypePieChart;