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
      <QuizCard
        question={""}
        options={[]}
        correctAnswer={""}
        onAnswer={function (answer: string): void {
          throw new Error("Function not implemented.");
        }}
        onNext={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </QuizContainer>
  );
}

export default QuizPage;
