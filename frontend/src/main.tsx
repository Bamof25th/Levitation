import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistior, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistior}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
