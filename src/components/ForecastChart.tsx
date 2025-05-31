import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ForecastChart: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState('covid19');

  const diseases = [
    { id: 'covid19', name: 'COVID-19' },
    { id: 'influenza', name: 'Influenza' },
    { id: 'dengue', name: 'Dengue' },
  ];

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actual Cases',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Forecasted Cases',
        data: [null, null, null, null, 56, 61, 70, 85],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderDash: [5, 5],
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {diseases.map((disease) => (
            <button
              key={disease.id}
              onClick={() => setSelectedDisease(disease.id)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                selectedDisease === disease.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {disease.name}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="w-3 h-0.5 bg-blue-500"></span>
          <span>Actual</span>
          <span className="w-3 h-0.5 bg-indigo-500 border-dashed border-t-2"></span>
          <span>Forecast</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ForecastChart;