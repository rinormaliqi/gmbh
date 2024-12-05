import React from 'react';

import CountUp from 'react-countup';

function StatisticsCounter() {
  const stats = [
    { title: 'Projects Done', value: 100, suffix: '+' },
    { title: 'Happy Clients', value: 250, suffix: '+' },
    { title: 'Years of Experience', value: 10, suffix: '+' },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-4xl font-extrabold text-red-300">
              <CountUp end={stat.value} duration={2.5} />
              {stat.suffix}
            </h2>
            <p className="mt-2 text-lg font-medium text-gray-700">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsCounter;
