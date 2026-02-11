import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout";
import MantineProvider from "./providers/MantineUIProvider";

import "./styles/globale.css";
import QuizPage from "./pages/QuizPage";
//import CategoryPage from "./pages/CategoryPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <MainLayout>
        <QuizPage />
      </MainLayout>
    </MantineProvider>
  </StrictMode>,
);
