import React from 'react';
import { useTranslation } from 'react-i18next';
import HealthcareClusters from '../components/HealthcareClusters';
import { Download, Users, Activity, Brain } from 'lucide-react';

function UtilizationClusters() {
  const { t } = useTranslation();

  const metrics = [
    {
      title: 'Total Patients',
      value: '45,789',
      change: '+12.5%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Average Visits',
      value: '3.2',
      change: '+5.3%',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Predictive Accuracy',
      value: '94%',
      change: '+2.1%',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Healthcare Utilization Clusters</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Export Analysis
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-sm font-medium text-gray-600">{metric.title}</h2>
                    <div className="flex items-center mt-1">
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <span className="ml-2 text-sm font-medium text-green-500">{metric.change}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Cluster Analysis</h2>
          <HealthcareClusters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Findings</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Urban Utilization Pattern</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Higher frequency of preventive care visits in urban areas, with 85% regular check-ups
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Service Utilization Trends</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Increased adoption of telehealth services, showing 45% growth in remote consultations
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Predictive Insights</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    AI models predict 23% increase in specialist consultations over next quarter
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Resource Allocation</h4>
                <p className="text-sm text-blue-600">
                  Increase mobile health units in suburban areas to improve accessibility
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Service Optimization</h4>
                <p className="text-sm text-green-600">
                  Expand telehealth services to accommodate growing remote consultation demands
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Preventive Care</h4>
                <p className="text-sm text-purple-600">
                  Launch targeted awareness campaigns in low-utilization clusters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilizationClusters;