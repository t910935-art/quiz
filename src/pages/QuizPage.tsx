import QuizCard from "../components/QuizCard";
import QuizContainer from "../components/QuizContainer";
import { Text } from "@mantine/core";
import useQuizStore from "../store/quize-store";
import { useState } from "react";
import { useNavigate } from "react-router";

function QuizPage() {
  const { quizData, userAnswers, setUserAnswer } = useQuizStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  console.log({ userAnswers });

  return (
    <QuizContainer>
      <Text fz={"2rm"} fw={"bold"} ta={"center"}>
        {quizData.title}
      </Text>
      <Text fz={"1.5rm"} ta={"center"}>
        {currentQuestionIndex + 1} / {quizData.quizzes.length}
      </Text>
      <QuizCard
        // correctAnswer={quizData.quizzes[currentQuestionIndex].answer}
        onAnswer={(answer) => {
          if (userAnswers[currentQuestionIndex]?.answer === answer) return;
          const updateAnswers = [...userAnswers];
          updateAnswers[currentQuestionIndex] = {
            question: quizData.quizzes[currentQuestionIndex].question,
            answer,
            isCorrect: answer === quizData.quizzes[currentQuestionIndex].answer,
            correctAnswer: quizData.quizzes[currentQuestionIndex].answer,
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
        options={quizData.quizzes[currentQuestionIndex].options}
        question={quizData.quizzes[currentQuestionIndex].question}
        correctAnswer={""}
      />
    </QuizContainer>
  );
}

export default QuizPage;
