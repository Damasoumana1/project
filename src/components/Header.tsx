import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Settings, User, LogIn, UserPlus, Mail, Map, Brain, FileText, Info, Menu, X, Home, Activity, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  
  const navigation = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Epidemic Forecasts', icon: Activity, href: '/forecasts' },
    { name: 'Health Maps', icon: Map, href: '/maps' },
    { name: 'Utilization Clusters', icon: Users, href: '/clusters' },
    { name: 'Recommendations', icon: Brain, href: '/recommendations' },
    { name: 'Contact Us', icon: Mail, href: '/contact' },
    { name: 'About', icon: Info, href: '/about' }
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 fixed w-full z-30 top-0">
      <div className="px-6 py-2"> {/* Reduced padding here */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-white" /> {/* Reduced icon size */}
              <h1 className="text-lg font-semibold text-white">Health Analytics</h1> {/* Reduced text size */}
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-1"> {/* Reduced spacing */}
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-1 px-2 py-1.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  i18n.language === 'en'
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  i18n.language === 'fr'
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                FR
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/login"
                className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium bg-white text-indigo-600 hover:bg-white/90 rounded-lg transition-colors"
              >
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <button className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <Bell className="h-4 w-4" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Profile"
                    className="h-6 w-6 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-white">Sarah Wilson</p>
                    <p className="text-xs text-white/70">Health Analyst</p>
                  </div>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={() => navigate('/login')}
                      className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="lg:hidden bg-indigo-700">
          <nav className="px-4 py-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;