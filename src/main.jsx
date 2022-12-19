import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CookieConsent from "react-cookie-consent";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookieConsent
      location="bottom"
      buttonText="No prob!!"
      style={{ background: "#2b2b2b" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This site uses 🍪's to save your note configuration, NOTHING else.
    </CookieConsent>
    <App />
  </React.StrictMode>
);
