import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { IntlProvider } from "react-intl";
import english from './assets/locales/en'
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <IntlProvider messages={english} locale='en'>
      <App />
    </IntlProvider>
  </BrowserRouter>
);
