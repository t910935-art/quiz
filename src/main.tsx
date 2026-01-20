import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MantineProvider from "./providers/MantineUIProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
);
