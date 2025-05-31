import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, Filter, Download, Info } from 'lucide-react';
import DiseaseMap from '../components/DiseaseMap';
import { exportReport } from '../utils/export';

function HealthMaps() {
  const { t } = useTranslation();
  const [selectedLayer, setSelectedLayer] = useState('cases');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const mapLayers = [
    { id: 'cases', name: 'Active Cases' },
    { id: 'facilities', name: 'Healthcare Facilities' },
    { id: 'risk', name: 'Risk Levels' },
    { id: 'vaccination', name: 'Vaccination Coverage' }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'urban', name: 'Urban Areas' },
    { id: 'rural', name: 'Rural Areas' },
    { id: 'high-risk', name: 'High-Risk Zones' }
  ];

  const handleExport = async () => {
    const data = {
      layer: mapLayers.find(l => l.id === selectedLayer)?.name,
      region: regions.find(r => r.id === selectedRegion)?.name,
      date: new Date().toISOString(),
      statistics: {
        totalFacilities: 1284,
        activeCases: 24589,
        highRiskAreas: 12,
        vaccinationRate: '76%'
      }
    };
    await exportReport(data, 'excel');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div id="report-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Health Maps</h1>
          <button 
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Map
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Layers className="h-5 w-5 text-indigo-600 mr-2" />
                <h2 className="text-lg font-semibold">Map Layers</h2>
              </div>
              <div className="space-y-2">
                {mapLayers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer.id)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                      selectedLayer === layer.id
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {layer.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-indigo-600 mr-2" />
                <h2 className="text-lg font-semibold">Region Filter</h2>
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
                <Info className="h-5 w-5 text-indigo-600 mr-2" />
                <h2 className="text-lg font-semibold">Statistics</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Total Facilities</p>
                  <p className="text-2xl font-bold text-gray-900">1,284</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Cases</p>
                  <p className="text-2xl font-bold text-gray-900">24,589</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">High-Risk Areas</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Vaccination Rate</p>
                  <p className="text-2xl font-bold text-gray-900">76%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {mapLayers.find(l => l.id === selectedLayer)?.name}
                </h2>
                <p className="text-gray-600">
                  Showing data for {regions.find(r => r.id === selectedRegion)?.name}
                </p>
              </div>
              <div className="h-[600px]">
                <DiseaseMap />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Facility Types</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hospitals</span>
                    <span className="text-sm font-medium text-gray-900">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Clinics</span>
                    <span className="text-sm font-medium text-gray-900">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Testing Centers</span>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pharmacies</span>
                    <span className="text-sm font-medium text-gray-900">10%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Risk Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High Risk</span>
                    <span className="text-sm font-medium text-red-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Medium Risk</span>
                    <span className="text-sm font-medium text-yellow-600">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Low Risk</span>
                    <span className="text-sm font-medium text-green-600">40%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Coverage Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Urban Areas</span>
                    <span className="text-sm font-medium text-gray-900">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Suburban Areas</span>
                    <span className="text-sm font-medium text-gray-900">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rural Areas</span>
                    <span className="text-sm font-medium text-gray-900">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthMaps;