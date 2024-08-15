import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodosProvider from "./context/todos-provider.jsx";

createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
