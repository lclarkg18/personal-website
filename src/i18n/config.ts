import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import sections from './en/sections.json';
// import ns2 from './en/ns2.json';
// import sections from './es/sectionsES.json';

// eslint-disable-next-line import/prefer-default-export
export const resources = {
  en: {
    sections: {
      'navbar-sections': {
        about: 'about',
        projects: 'projects',
        blog: 'blog',
      },
      links: {
        github: 'Checkout my GitHub',
        linkedin: 'Checkout my LinkedIn',
      },
    },
  },
  es: {
    sections: {
      'navbar-sections': {
        about: 'quién soy?',
        projects: 'proyectos',
        blog: 'blog',
      },
      links: {
        github: 'Echa un vistazo a mi GitHub',
        linkedin: 'Echa un vistazo a mi LinkedIn',
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['sections', 'ns2', 'sectionsES'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
