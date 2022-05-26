import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import es from './es';

// eslint-disable-next-line import/prefer-default-export
export const resources = {
  en,
  es,
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
