import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./app/store";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
