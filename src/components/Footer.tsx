import React from 'react';
import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 min-w-[250px] space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">{t('footer.about')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm">{t('footer.madeWith')}</span>
            </div>
          </div>

          <div className="flex-1 min-w-[200px] space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.termsOfService')}
                </a>
              </li>
              <li>
                <a href="/docs" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
              <li>
                <a href="/api" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.api')}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.casesStudies')}
                </a>
              </li>
              <li>
                <a href="/webinars" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.webinars')}
                </a>
              </li>
              <li>
                <a href="/reports" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  {t('footer.reports')}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[250px] space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@healthdashboard.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Health Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Health Dashboard. {t('footer.allRightsReserved')}
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;