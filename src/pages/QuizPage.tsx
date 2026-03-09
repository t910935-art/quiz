import QuizCard from "../components/QuizCard";
import QuizContainer from "../components/QuizContainer";
import { Text } from "@mantine/core";
import useQuizStore from "../store/quize-store";
import { useState } from "react";
import { useNavigate } from "react-router";

//14 -Storing user answers part - 2

function QuizPage() {
  const { quizData, userAnswers, setUserAnswer } = useQuizStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const currentQuestion = quizData.quizzes[currentQuestionIndex];

  return (
    <QuizContainer>
      <Text fz={"2rm"} fw={"bold"} ta={"center"}>
        {quizData.title}
      </Text>
      <Text fz={"1.5rm"} ta={"center"}>
        {currentQuestionIndex + 1} / {quizData.quizzes.length}
      </Text>
      <QuizCard
        onAnswer={(answer) => {
          if (userAnswers[currentQuestionIndex]?.answer === answer) return;
          const updateAnswers = [...userAnswers];

          updateAnswers[currentQuestionIndex] = {
            question: currentQuestion.question,
            answer,
            isCorrect: answer === currentQuestion.answer,
            correctAnswer: currentQuestion.answer,
          };
          setUserAnswer(updateAnswers);
        }}
        isLastQuestion={currentQuestionIndex === quizData.quizzes.length - 1}
        onNext={() => {
          if (currentQuestionIndex < quizData.quizzes.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
          }
          if (currentQuestionIndex === quizData.quizzes.length - 1) {
            navigate("/result");
          }
        }}
        options={currentQuestion.options}
        question={currentQuestion.question}
        correctAnswer={currentQuestion.answer}
      />
    </QuizContainer>
  );
}

export default QuizPage;
