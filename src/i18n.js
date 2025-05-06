import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const basePath = process.env.REACT_APP_BASE_PATH || "/";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    debug: false,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // loadPath: "/portfolio-react/locales/{{lng}}/{{ns}}.json",
      //loadPath: "/locales/{{lng}}/{{ns}}.json",
      loadPath: `${basePath}locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
