import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/Store/Store";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div
              className="d-flex justify-content-center"
              style={{
                display: "flex",
                justifyContent: "center",
                height: "60vh",
                alignItems: "center"
              }}
            >
              <div
                className="spinner-border text-primary"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
