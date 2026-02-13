import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import MantineProvider from "./providers/MantineUIProvider";

import "./styles/globale.css";
import QuizPage from "./pages/QuizPage";
import WelcomePage from "./pages/WelcomePage";
import { Center } from "@mantine/core";
import CategoryPage from "./pages/CategoryPage";
import QuizStartPage from "./pages/QuizStartPage";
//import CategoryPage from "./pages/CategoryPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/quiz-info" element={<QuizStartPage />} />
            <Route path="/start-quiz" element={<QuizPage />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </MantineProvider>
  </StrictMode>,
);
