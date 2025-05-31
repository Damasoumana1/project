import React from 'react';
import { Activity, Users, Guitar as Hospital, BrainCircuit } from 'lucide-react';
import DiseaseMap from '../components/DiseaseMap';
import ForecastChart from '../components/ForecastChart';
import HealthcareClusters from '../components/HealthcareClusters';
import { useTranslation } from 'react-i18next';
import { exportReport } from '../utils/export';

function Home() {
  const { t } = useTranslation();

  const handleExport = async () => {
    const data = {
      activeCases: 24589,
      recoveredCases: 18234,
      facilities: 1284,
      predictions: '+15%',
      date: new Date().toISOString(),
      trends: {
        weekly: '+2.5%',
        monthly: '+4.3%'
      }
    };
    await exportReport(data, 'excel');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div id="report-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {t('dashboard.title')}
          </h1>
          <div className="flex items-center space-x-4">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="global">Global View</option>
              <option value="regional">Regional View</option>
              <option value="local">Local View</option>
            </select>
            <button 
              onClick={handleExport}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:from-indigo-700 hover:to-blue-600 transition-all"
            >
              Generate Report
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-200 transition-colors">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Activity className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">{t('dashboard.activeCases')}</h2>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">24,589</p>
                  <span className="ml-2 text-sm font-medium text-emerald-500">+2.5%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-emerald-200 transition-colors">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">{t('dashboard.recoveredCases')}</h2>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">18,234</p>
                  <span className="ml-2 text-sm font-medium text-emerald-500">+4.3%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-violet-200 transition-colors">
            <div className="flex items-center">
              <div className="p-2 bg-violet-50 rounded-lg">
                <Hospital className="h-8 w-8 text-violet-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">{t('dashboard.facilities')}</h2>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">1,284</p>
                  <span className="ml-2 text-sm font-medium text-violet-500">+12</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-rose-200 transition-colors">
            <div className="flex items-center">
              <div className="p-2 bg-rose-50 rounded-lg">
                <BrainCircuit className="h-8 w-8 text-rose-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-600">{t('dashboard.predictions')}</h2>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">+15%</p>
                  <span className="ml-2 text-sm font-medium text-rose-500">Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-200 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t('dashboard.diseaseMap')}</h2>
            <DiseaseMap />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-200 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t('dashboard.forecast')}</h2>
            <ForecastChart />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-200 transition-colors mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{t('dashboard.clusters')}</h2>
          <HealthcareClusters />
        </div>
      </div>
    </div>
  );
}

export default Home;