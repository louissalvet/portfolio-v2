import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
// import KonamiCodeListener from "./context/KonamiCode.tsx";

import App from "./App.tsx";

import fr from "./translations/fr.json";
import en from "./translations/en.json";

import "./index.css";
import "./fonts.css";

i18next.init({
  lng: navigator.language.split("-")[0],
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    // de: { translation: de },
    // dk: { translation: dk },
    // es: { translation: es },
    // fi: { translation: fi },
    // no: { translation: no },
    // pl: { translation: pl },
    // pt: { translation: pt },
    // sw: { translation: sw },
  },
  fallbackLng: "en",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
