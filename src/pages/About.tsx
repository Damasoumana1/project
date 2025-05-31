import React from 'react';
import { Activity, Users, Brain, Globe2, Award, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Lead Health Analyst',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Expert in epidemiology with 10+ years of experience in public health data analysis.'
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Specialist in machine learning and predictive modeling for healthcare outcomes.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Healthcare Consultant',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Healthcare policy expert focusing on community health initiatives.'
    }
  ];

  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Track health trends and patterns as they emerge with our advanced monitoring system.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Utilize machine learning algorithms to forecast potential health outbreaks and trends.'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Gain valuable insights into community health patterns and behavioral trends.'
    },
    {
      icon: Globe2,
      title: 'Global Coverage',
      description: 'Access health data and analytics from communities worldwide.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Healthcare Through Data
          </h1>
          <p className="text-xl text-gray-600">
            We're on a mission to improve global health outcomes by providing actionable insights
            through advanced analytics and data-driven decision making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-indigo-100">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-indigo-100">Data Points Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-indigo-100">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-indigo-100">Real-time Monitoring</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals working to improve global health outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence has been recognized globally</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Healthcare Innovation Award</h3>
                <p className="text-gray-600">2024 Global Health Summit</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Excellence in Data Analytics</h3>
                <p className="text-gray-600">Healthcare Tech Awards 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Community Impact Award</h3>
                <p className="text-gray-600">Public Health Association</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in our mission to transform healthcare through data-driven insights
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/register"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;