/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './language/en.json';
import translationFR from './language/fr.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false
    },
});
