import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import MantineProvider from "./providers/MantineUIProvider";

import "./styles/globale.css";
import CategoryPage from "./pages/CategoryPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <MainLayout>
        <CategoryPage />
      </MainLayout>
    </MantineProvider>
  </StrictMode>,
);
