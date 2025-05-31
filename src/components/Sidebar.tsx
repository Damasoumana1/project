import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Map, Users, Settings, Globe2, Bell, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white border-r border-gray-200 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <Activity className="h-8 w-8 text-blue-500" />
        <span className="text-2xl font-bold text-gray-800">{t('sidebar.title')}</span>
      </div>

      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>
      
      <nav className="space-y-1">
        <Link 
          to="/" 
          className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg ${
            isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          } transition-colors`}
        >
          <Globe2 className="h-5 w-5" />
          <span>{t('sidebar.dashboard')}</span>
        </Link>
        <Link 
          to="/maps" 
          className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg ${
            isActive('/maps') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          } transition-colors`}
        >
          <Map className="h-5 w-5" />
          <span>{t('sidebar.maps')}</span>
        </Link>
        <Link 
          to="/clusters" 
          className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg ${
            isActive('/clusters') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          } transition-colors`}
        >
          <Users className="h-5 w-5" />
          <span>{t('sidebar.clusters')}</span>
        </Link>
        <Link 
          to="/settings" 
          className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg ${
            isActive('/settings') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          } transition-colors`}
        >
          <Settings className="h-5 w-5" />
          <span>{t('sidebar.settings')}</span>
        </Link>
      </nav>

      <div className="px-4 mt-auto">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-800">Notifications</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">3</span>
        </div>
      </div>

      <div className="px-4">
        <Link to="/profile" className="flex items-center space-x-3 p-4 border-t">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Sarah Wilson</p>
            <p className="text-xs text-gray-500">Health Analyst</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;