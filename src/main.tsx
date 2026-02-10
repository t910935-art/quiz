import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import MantineProvider from "./providers/MantineUIProvider";

import "./styles/globale.css";
//import CategoryPage from "./pages/CategoryPage";
import QuizStartPage from "./pages/QuizStartPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <MainLayout>
        <QuizStartPage />
      </MainLayout>
    </MantineProvider>
  </StrictMode>,
);
