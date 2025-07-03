import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterComponent from "./router-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
