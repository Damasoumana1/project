import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Target, TrendingUp, AlertCircle, Download, Filter } from 'lucide-react';

function Recommendations() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'prevention', name: 'Prevention' },
    { id: 'treatment', name: 'Treatment' },
    { id: 'resources', name: 'Resources' },
    { id: 'education', name: 'Education' }
  ];

  const priorities = [
    { id: 'all', name: 'All Priorities' },
    { id: 'high', name: 'High Priority' },
    { id: 'medium', name: 'Medium Priority' },
    { id: 'low', name: 'Low Priority' }
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Increase Vaccination Coverage',
      category: 'prevention',
      priority: 'high',
      impact: 'High',
      confidence: '95%',
      description: 'Launch targeted vaccination campaigns in areas with low coverage rates.',
      metrics: {
        cost: 'Medium',
        timeframe: '3 months',
        potential_impact: '25% increase in coverage'
      }
    },
    {
      id: 2,
      title: 'Expand Mobile Clinics',
      category: 'resources',
      priority: 'medium',
      impact: 'Medium',
      confidence: '85%',
      description: 'Deploy additional mobile health units to underserved areas.',
      metrics: {
        cost: 'High',
        timeframe: '6 months',
        potential_impact: '15% increase in healthcare access'
      }
    },
    {
      id: 3,
      title: 'Public Health Education',
      category: 'education',
      priority: 'medium',
      impact: 'Medium',
      confidence: '90%',
      description: 'Implement community health education programs focusing on prevention.',
      metrics: {
        cost: 'Low',
        timeframe: '2 months',
        potential_impact: '30% increase in awareness'
      }
    }
  ];

  const filteredRecommendations = recommendations.filter(rec => 
    (selectedCategory === 'all' || rec.category === selectedCategory) &&
    (selectedPriority === 'all' || rec.priority === selectedPriority)
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AI-Powered Recommendations</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Export Recommendations
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-blue-600">AI Confidence</p>
              <p className="text-2xl font-bold text-blue-900">94%</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-green-600">Implementation Rate</p>
              <p className="text-2xl font-bold text-green-900">78%</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-purple-600">Success Rate</p>
              <p className="text-2xl font-bold text-purple-900">85%</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-orange-100">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-orange-600">Critical Actions</p>
              <p className="text-2xl font-bold text-orange-900">3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Priority</h3>
                <div className="space-y-2">
                  {priorities.map((priority) => (
                    <button
                      key={priority.id}
                      onClick={() => setSelectedPriority(priority.id)}
                      className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                        selectedPriority === priority.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {priority.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-6">
            {filteredRecommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{recommendation.title}</h3>
                    <p className="mt-2 text-gray-600">{recommendation.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    recommendation.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : recommendation.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {recommendation.priority.charAt(0).toUpperCase() + recommendation.priority.slice(1)} Priority
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Impact</p>
                    <p className="mt-1 font-medium text-gray-900">{recommendation.impact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Confidence</p>
                    <p className="mt-1 font-medium text-gray-900">{recommendation.confidence}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cost</p>
                    <p className="mt-1 font-medium text-gray-900">{recommendation.metrics.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Timeframe</p>
                    <p className="mt-1 font-medium text-gray-900">{recommendation.metrics.timeframe}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Potential Impact:</span>
                      <span className="text-sm font-medium text-gray-900">{recommendation.metrics.potential_impact}</span>
                    </div>
                    <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;