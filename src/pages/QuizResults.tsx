// ...existing code...
import { Box, Button, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
// ...existing code...
// { changed code }
import { useNavigate, useLocation } from "react-router";
// ...existing code...

const formatNumber = (number: number) => {
  return number.toFixed(2);
};

const QuizResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // merge location.state (if present) with any saved data in localStorage, fallback to sensible defaults
  const saved =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("quizResult") || "{}")
      : {};
  const state = { ...(saved || {}), ...(location.state || {}) };

  const userName: string = state.userName || "Guest";
  const passed: boolean = !!state.passed;
  const accuracy: number = Number(state.accuracy) || 0;
  const correctAnswers = state.correctAnswers ?? [];
  const totalQuestions: number = Number(state.totalQuestions) || 0;

  const correctCount = Array.isArray(correctAnswers)
    ? correctAnswers.length
    : Number.isFinite(Number(correctAnswers))
      ? Number(correctAnswers)
      : 0;

  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        gradient={{ from: "red", to: "deeppink" }}
        fw={700}
        fz={24}
      >
        Quiz Results for {userName}
      </Text>
      <Text fw={500} fz={16}>
        {passed ? "✅ You passed the quiz!" : "❌ You failed the quiz!"}
      </Text>

      <Box>
        <Text fw={500} fz={16}>
          ✅ You scored {formatNumber(accuracy)}%!
        </Text>
        <Text fw={500} fz={16}>
          {passed
            ? `✅ You passed the quiz with a score of ${formatNumber(accuracy)}%!`
            : `❌ You failed the quiz with a score of ${formatNumber(accuracy)}%!`}
        </Text>{" "}
        <Text fw={500} fz={16}>
          ✅ You answered {correctCount} out of {totalQuestions} questions
          correctly.
        </Text>
      </Box>
      <Button
        variant="gradient"
        miw={"200px"}
        onClick={() => {
          navigate("/");
        }}
        size="md"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Try Again
      </Button>
    </QuizContainer>
  );
};
export default QuizResults;
