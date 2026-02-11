import { Flex } from "@mantine/core";
import { Text } from "@mantine/core";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  onNext: () => void;
}

const QuizCard = ({}: QuizCardProps) => {
  return (
    <Flex miw={"90%"} direction={"column"} gap={10}>
      <Text size={"xl"} fw={"500"} mt={10} mb={10}>
        Question
      </Text>
    </Flex>
  );
};

export default QuizCard;
