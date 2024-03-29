import React, { Suspense, useState, CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClipLoader from "react-spinners/ClipLoader";
import { UserProvider } from "./utils/contextApi";

const override: CSSProperties = {
  display: "block",
  // margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  borderColor: "#36d7b7",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <ClipLoader
          color="#36d7b7"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }
    >
      <UserProvider>
        <App />
      </UserProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
