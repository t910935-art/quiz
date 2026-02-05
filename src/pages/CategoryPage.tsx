import { Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import CategoryItem from "../components/CategoryItem";
import { BiBrain } from "react-icons/bi";

const CategoryPage = () => {
  return (
    <QuizContainer>
      <Text>Category</Text>
      <CategoryItem
        icon={<BiBrain />}
        title={"General Knowledge"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        active
      />
    </QuizContainer>
  );
};

export default CategoryPage;
