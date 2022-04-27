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
        'open-source-note1': 'This website is',
        'open-source-note2': 'open source',
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
        'open-source-note1': 'Esta pagina web es de',
        'open-source-note2': 'codigo abierto',
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
    resources,
  });

export default i18n;
