import QuizCard from "../components/QuizCard";
import QuizContainer from "../components/QuizContainer";
import { Text } from "@mantine/core";

function QuizPage() {
  return (
    <QuizContainer>
      <Text fz={"2rm"} fw={"bold"} ta={"center"}>
        Quiz page
      </Text>
      <Text fz={"1.5rm"} ta={"center"}>
        1/10
      </Text>
      <QuizCard />
    </QuizContainer>
  );
}

export default QuizPage;
