import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Map, Filter, Download } from 'lucide-react';
import ForecastChart from '../components/ForecastChart';
import { exportReport } from '../utils/export';

function EpidemicForecasts() {
  const { t } = useTranslation();
  const [selectedDisease, setSelectedDisease] = useState('covid19');
  const [selecedRegion, setSelectedRegion] = useState('global');
  const [timeframe, setTimeframe] = useState('6months');

  const diseases = [
    { id: 'covid19', name: 'COVID-19' },
    { id: 'influenza', name: 'Influenza' },
    { id: 'dengue', name: 'Dengue' },
    { id: 'ebola', name: 'Ebola' }
  ];

  const regions = [
    { id: 'global', name: 'Global' },
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'Americas' },
    { id: 'asia', name: 'Asia' },
    { id: 'europe', name: 'Europe' }
  ];

  const timeframes = [
    { id: '1month', name: '1 Month' },
    { id: '3months', name: '3 Months' },
    { id: '6months', name: '6 Months' },
    { id: '1year', name: '1 Year' }
  ];

  const handleExport = async () => {
    const data = {
      disease: diseases.find(d => d.id === selectedDisease)?.name,
      region: regions.find(r => r.id === selectedRegion)?.name,
      timeframe: timeframes.find(t => t.id === timeframe)?.name,
      date: new Date().toISOString(),
      metrics: {
        confidence: '94%',
        implementation: '78%',
        success: '85%'
      }
    };
    await exportReport(data, 'excel');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div id="report-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Epidemic Forecasts</h1>
          <button 
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold">Disease Selection</h2>
            </div>
            <div className="space-y-2">
              {diseases.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease.id)}
                  className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                    selectedDisease === disease.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {disease.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Map className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold">Region</h2>
            </div>
            <div className="space-y-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                    selectedRegion === region.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold">Timeframe</h2>
            </div>
            <div className="space-y-2">
              {timeframes.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setTimeframe(time.id)}
                  className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                    timeframe === time.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {time.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {diseases.find(d => d.id === selectedDisease)?.name} Forecast
            </h2>
            <p className="text-gray-600">
              Forecast for {regions.find(r => r.id === selectedRegion)?.name} region over the next {timeframes.find(t => t.id === timeframe)?.name}
            </p>
          </div>
          <ForecastChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">↑</span>
                <div>
                  <p className="font-medium text-gray-800">Increasing Trend</p>
                  <p className="text-sm text-gray-600">15% increase expected in next month</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">!</span>
                <div>
                  <p className="font-medium text-gray-800">Risk Areas</p>
                  <p className="text-sm text-gray-600">3 regions showing elevated risk</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">i</span>
                <div>
                  <p className="font-medium text-gray-800">Seasonality</p>
                  <p className="text-sm text-gray-600">Peak expected during winter months</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confidence Levels</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Short-term (1 month)</span>
                  <span className="text-sm font-medium text-green-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Medium-term (3 months)</span>
                  <span className="text-sm font-medium text-blue-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Long-term (6 months)</span>
                  <span className="text-sm font-medium text-yellow-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Preventive Measures</h4>
                <p className="text-sm text-green-600">Increase vaccination coverage in high-risk areas</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Resource Allocation</h4>
                <p className="text-sm text-yellow-600">Prepare additional medical supplies for peak season</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Communication</h4>
                <p className="text-sm text-blue-600">Launch public awareness campaign in affected regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpidemicForecasts;