import { Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import CategoryItem from "../components/CategoryItem";

const CategoryPage = () => {
  return (
    <QuizContainer>
      <Text>Category</Text>
      <CategoryItem />
    </QuizContainer>
  );
};

export default CategoryPage;
