import QuizContainer from "../components/QuizContainer";
import { Button, Text } from "@mantine/core";

const QuizStartPage = () => {
  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        fw={"bold"}
        fz={{ base: "2reù", md: "3rem", lg: "2rem" }}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Quiz QuizStartPage
      </Text>
      <Text fw={500} fz={16}>
        General
      </Text>
      <Text fw={500} fz={16}>
        text your quiz start page
      </Text>
      <Text>correct</Text>
      <Button
        variant="gradient"
        miw={"200px"}
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
