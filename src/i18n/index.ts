import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            title: 'Community Health Analytics',
            login: 'Login',
            signup: 'Sign Up',
            profile: 'Profile',
            settings: 'Settings',
            signout: 'Sign out'
          },
          dashboard: {
            title: 'Health Dashboard',
            activeCases: 'Active Cases',
            recoveredCases: 'Recovered Cases',
            facilities: 'Healthcare Facilities',
            predictions: 'AI Predictions',
            diseaseMap: 'Disease Distribution Map',
            forecast: 'Disease Forecast',
            clusters: 'Healthcare Utilization Clusters'
          },
          sidebar: {
            title: 'Health Analytics',
            dashboard: 'Dashboard',
            maps: 'Maps',
            clusters: 'Clusters',
            settings: 'Settings'
          },
          footer: {
            about: 'About Us',
            description: 'We are dedicated to improving global health outcomes through data-driven insights and advanced analytics.',
            madeWith: 'Made with love for better healthcare',
            quickLinks: 'Quick Links',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
            documentation: 'Documentation',
            api: 'API Access',
            resources: 'Resources',
            blog: 'Blog',
            casesStudies: 'Case Studies',
            webinars: 'Webinars',
            reports: 'Reports',
            contact: 'Contact',
            allRightsReserved: 'All rights reserved.'
          },
          auth: {
            loginTitle: 'Welcome Back',
            registerTitle: 'Create Account',
            emailLabel: 'Email Address',
            passwordLabel: 'Password',
            confirmPasswordLabel: 'Confirm Password',
            rememberMe: 'Remember me',
            forgotPassword: 'Forgot password?',
            loginButton: 'Sign In',
            registerButton: 'Sign Up',
            orContinueWith: 'Or continue with'
          },
          profile: {
            title: 'Profile Settings',
            personalInfo: 'Personal Information',
            accountSettings: 'Account Settings',
            notifications: 'Notifications',
            security: 'Security',
            deleteAccount: 'Delete Account'
          }
        }
      },
      fr: {
        translation: {
          header: {
            title: 'Analytique de Santé Communautaire',
            login: 'Connexion',
            signup: "S'inscrire",
            profile: 'Profil',
            settings: 'Paramètres',
            signout: 'Déconnexion'
          },
          dashboard: {
            title: 'Tableau de Bord Santé',
            activeCases: 'Cas Actifs',
            recoveredCases: 'Cas Guéris',
            facilities: 'Établissements de Santé',
            predictions: 'Prédictions IA',
            diseaseMap: 'Carte de Distribution des Maladies',
            forecast: 'Prévision des Maladies',
            clusters: "Clusters d'Utilisation des Services de Santé"
          },
          sidebar: {
            title: 'Analytique Santé',
            dashboard: 'Tableau de Bord',
            maps: 'Cartes',
            clusters: 'Clusters',
            settings: 'Paramètres'
          },
          footer: {
            about: 'À Propos',
            description: "Nous nous consacrons à l'amélioration de la santé mondiale grâce à des insights basés sur les données et l'analytique avancée.",
            madeWith: 'Fait avec amour pour une meilleure santé',
            quickLinks: 'Liens Rapides',
            privacyPolicy: 'Politique de Confidentialité',
            termsOfService: "Conditions d'Utilisation",
            documentation: 'Documentation',
            api: 'Accès API',
            resources: 'Ressources',
            blog: 'Blog',
            casesStudies: 'Études de Cas',
            webinars: 'Webinaires',
            reports: 'Rapports',
            contact: 'Contact',
            allRightsReserved: 'Tous droits réservés.'
          },
          auth: {
            loginTitle: 'Bienvenue',
            registerTitle: 'Créer un Compte',
            emailLabel: 'Adresse Email',
            passwordLabel: 'Mot de passe',
            confirmPasswordLabel: 'Confirmer le mot de passe',
            rememberMe: 'Se souvenir de moi',
            forgotPassword: 'Mot de passe oublié ?',
            loginButton: 'Se connecter',
            registerButton: "S'inscrire",
            orContinueWith: 'Ou continuer avec'
          },
          profile: {
            title: 'Paramètres du Profil',
            personalInfo: 'Informations Personnelles',
            accountSettings: 'Paramètres du Compte',
            notifications: 'Notifications',
            security: 'Sécurité',
            deleteAccount: 'Supprimer le Compte'
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;