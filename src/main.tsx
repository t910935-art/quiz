import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import MantineProvider from "./providers/MantineUIProvider";
import WelcomePage from "./pages/WelcomePage";
import "./styles/globale.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <MainLayout>
        <WelcomePage />
      </MainLayout>
    </MantineProvider>
  </StrictMode>,
);
