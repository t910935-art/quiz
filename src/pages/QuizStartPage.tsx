import { useNavigate } from "react-router";
import QuizContainer from "../components/QuizContainer";
import { Button, Text } from "@mantine/core";
import useQuizStore from "../store/quize-store";

const QuizStartPage = () => {
  const { quizData } = useQuizStore();
  const navigate = useNavigate();

  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        fw={"bold"}
        fz={{ base: "2reù", md: "3rem", lg: "2rem" }}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        quiz start page
      </Text>
      <Text fw={500} fz={16}>
        {quizData.title}
      </Text>
      <Text fw={500} fz={16}>
        {quizData.description}
      </Text>
      <Text>get {quizData.passScore} correct to pass </Text>
      <Button
        variant="gradient"
        miw={"200px"}
        onClick={() => navigate("/start-quiz")}
        size="lg"
        radius={"xl"}
        gradient={{ from: "red", to: "black", deg: 45 }}
      >
        Start button
      </Button>
    </QuizContainer>
  );
};

export default QuizStartPage;
