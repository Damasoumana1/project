import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Activity, Guitar as Hospital, TrendingUp, TrendingDown } from 'lucide-react';

function HealthcareClusters() {
  const { t } = useTranslation();
  const [selectedView, setSelectedView] = useState('overview');

  const clusters = [
    {
      name: 'Urban High Utilization',
      visits: 12,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      trend: '+8%',
      stats: {
        preventiveCare: '85%',
        specialists: '45%',
        emergencyVisits: '5%',
        satisfaction: '92%',
        waitTime: '15 min',
        digitalAdoption: '78%'
      }
    },
    {
      name: 'Suburban Medium Utilization',
      visits: 8,
      icon: Activity,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      trend: '+3%',
      stats: {
        preventiveCare: '75%',
        specialists: '30%',
        emergencyVisits: '8%',
        satisfaction: '88%',
        waitTime: '25 min',
        digitalAdoption: '65%'
      }
    },
    {
      name: 'Rural Low Utilization',
      visits: 4,
      icon: Hospital,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      trend: '-2%',
      stats: {
        preventiveCare: '60%',
        specialists: '15%',
        emergencyVisits: '12%',
        satisfaction: '82%',
        waitTime: '40 min',
        digitalAdoption: '45%'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedView('overview')}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedView === 'overview'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedView('detailed')}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedView === 'detailed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Detailed View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clusters.map((cluster, index) => {
          const Icon = cluster.icon;
          const TrendIcon = cluster.trend.startsWith('+') ? TrendingUp : TrendingDown;
          
          return (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg border ${cluster.borderColor} ${cluster.bgColor} transition-transform hover:scale-[1.02]`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${cluster.bgColor}`}>
                      <Icon className={`h-6 w-6 ${cluster.color}`} />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-800">{cluster.name}</h3>
                  </div>
                  <div className={`flex items-center ${
                    cluster.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{cluster.trend}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">Annual Visits</span>
                    <span className="text-lg font-semibold">{cluster.visits}</span>
                  </div>

                  {selectedView === 'detailed' ? (
                    <div className="space-y-3">
                      {Object.entries(cluster.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded-lg">
                        <div className="text-sm text-gray-600">Preventive Care</div>
                        <div className="text-lg font-semibold">{cluster.stats.preventiveCare}</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <div className="text-sm text-gray-600">Satisfaction</div>
                        <div className="text-lg font-semibold">{cluster.stats.satisfaction}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HealthcareClusters;