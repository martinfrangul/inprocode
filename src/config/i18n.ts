// i18n.js
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/public/locale/{{lng}}/translation.json', // Ruta a tus archivos de traducción
        },
        debug: true,
        fallbackLng: "es", // Asegúrate de que está escrito correctamente (fallBackLng -> fallbackLng)
        interpolation: {
            escapeValue: false, // No necesitas escapar los valores
        },
    });

export default i18n;
