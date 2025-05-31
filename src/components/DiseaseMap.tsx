import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DiseaseMap = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');

  // Enhanced sample data points for disease distribution
  const dataPoints = [
    { lat: 48.8566, lng: 2.3522, cases: 150, location: 'Paris', trend: '+5%', risk: 'Moderate' },
    { lat: 40.7128, lng: -74.0060, cases: 200, location: 'New York', trend: '+12%', risk: 'High' },
    { lat: -23.5505, lng: -46.6333, cases: 300, location: 'São Paulo', trend: '-3%', risk: 'Moderate' },
    { lat: 35.6762, lng: 139.6503, cases: 250, location: 'Tokyo', trend: '+8%', risk: 'High' },
    { lat: 51.5074, lng: -0.1278, cases: 180, location: 'London', trend: '-2%', risk: 'Low' },
    // Added more data points for better coverage
    { lat: 19.4326, lng: -99.1332, cases: 220, location: 'Mexico City', trend: '+6%', risk: 'High' },
    { lat: -33.8688, lng: 151.2093, cases: 120, location: 'Sydney', trend: '-1%', risk: 'Low' },
    { lat: 55.7558, lng: 37.6173, cases: 280, location: 'Moscow', trend: '+9%', risk: 'High' },
    { lat: 31.2304, lng: 121.4737, cases: 190, location: 'Shanghai', trend: '+4%', risk: 'Moderate' },
    { lat: -1.2921, lng: 36.8219, cases: 160, location: 'Nairobi', trend: '+7%', risk: 'Moderate' }
  ];

  const getColorByRisk = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'moderate': return '#f97316';
      case 'low': return '#22c55e';
      default: return '#ef4444';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {['7days', '30days', '90days'].map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                selectedTimeframe === timeframe
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {timeframe === '7days' ? '7 Days' : timeframe === '30days' ? '30 Days' : '90 Days'}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-sm text-gray-600">High Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="text-sm text-gray-600">Moderate Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-600">Low Risk</span>
          </div>
        </div>
      </div>
      <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="h-full w-full"
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataPoints.map((point, index) => (
            <CircleMarker
              key={index}
              center={[point.lat, point.lng]}
              radius={Math.sqrt(point.cases) / 2}
              fillColor={getColorByRisk(point.risk)}
              color={getColorByRisk(point.risk)}
              weight={1}
              opacity={1}
              fillOpacity={0.7}
            >
              <Popup className="rounded-lg shadow-lg">
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800">{point.location}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      Active Cases: <span className="font-medium">{point.cases}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Trend: <span className={`font-medium ${point.trend.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}>
                        {point.trend}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Risk Level: <span className="font-medium">{point.risk}</span>
                    </p>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default DiseaseMap;