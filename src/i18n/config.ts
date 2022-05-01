import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/prefer-default-export
export const resources = {
  en: {
    trans: {
      'navbar-sections': {
        about: 'about',
        projects: 'projects',
        blog: 'blog',
      },
      links: {
        github: 'Checkout my GitHub',
        linkedin: 'Checkout my LinkedIn',
      },
      footer: {
        'open-source-note': '<0>This website is </0><1> open source</1>.',
      },
    },

  },
  es: {
    trans: {
      'navbar-sections': {
        about: 'quién soy?',
        projects: 'proyectos',
        blog: 'blog',
      },
      links: {
        github: 'Echa un vistazo a mi GitHub',
        linkedin: 'Echa un vistazo a mi LinkedIn',
      },
      footer: {
        'open-source-note': '<0>Esta página web es de </0><1>codigo abierto</1>.',
      },
    },

  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    ns: ['trans'],
    lng: navigator.language,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      transWrapTextNodes: '',
    },
    resources,
  });

export default i18n;
