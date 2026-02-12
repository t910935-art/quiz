import { Button, Flex } from "@mantine/core";
import { Text } from "@mantine/core";
import { useState } from "react";
import { FaA, FaArrowRight } from "react-icons/fa6";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  onNext: () => void;
}

const SAMPLE_QUESTION = ["Option 1", "Option 2", "Option 3", "Option 4"];

const QuizCard = ({}: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  return (
    <Flex miw={"90%"} direction={"column"} gap={10}>
      <Text size={"xl"} fw={"500"} mt={10} mb={10}>
        question
      </Text>
      <Flex direction={"column"} gap={10}>
        {SAMPLE_QUESTION.map((option, index) => (
          <Button
            onClick={() => {
              setSelectedAnswer(option);
            }}
            c={selectedAnswer === option ? "white" : "gray"}
            key={index}
            bd={"0.5px solid deeppink"}
            variant={selectedAnswer === option ? "gradiant" : "outline"}
            radius={"xl"}
            size={"lg"}
          >
            {option}
          </Button>
        ))}
        <Flex gap={10} justify={"end"} mt={10}>
          <Button
            variant="gradiant"
            gradient={{ from: "red", to: "deeppink" }}
            radius={"xl"}
            size={"lg"}
            rightSection={<FaArrowRight />}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuizCard;
