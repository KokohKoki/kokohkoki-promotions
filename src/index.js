import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-K5BG5QXD28");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </QueryClientProvider>
);
