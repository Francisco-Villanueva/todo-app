import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodosProvider from "./context/todos-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TodosProvider>
      <App />
    </TodosProvider>
  </Provider>
);
