import { Button, Grid, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import CategoryItem from "../components/CategoryItem";
import { BiBrain } from "react-icons/bi";
import { IoCodeSlashSharp, IoEarthOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { FaFilm } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { useNavigate } from "react-router";

const categories = [
  {
    icon: <BiBrain color="#1F509A" size={70} />,
    title: "General Knowledge",
  },
  {
    icon: <IoEarthOutline color="#15B392" size={70} />,
    title: "Geography",
  },

  {
    icon: <GiMaterialsScience color="#6C48C5" size={70} />,
    title: "Science",
  },
  {
    icon: <FaFilm color="#3B1E54" size={70} />,
    title: "Movies",
  },

  {
    icon: <GrTechnology color="#FF204E" size={70} />,
    title: "Technologies",
  },
  {
    icon: <IoCodeSlashSharp color="#0096FF" size={70} />,
    title: "programming",
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz-info");
  };

  return (
    <QuizContainer>
      <Text
        variant="gradient"
        fw={"bold"}
        fz={{ base: "2rm", md: "3rem", lg: "2rem" }}
      >
        Categoty
      </Text>
      <Grid miw={"90%"}>
        {categories.map((category) => (
          <Grid.Col span={4} key={category.title}>
            <CategoryItem
              icon={category.icon}
              title={category.title}
              onClick={() => {}}
              active
            />
          </Grid.Col>
        ))}
      </Grid>
      <Button
        variant="gradient"
        miw={"200px"}
        onClick={handleStartQuiz}
        size="lg"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
        mt={"xl"}
      >
        Start Quiz
      </Button>
    </QuizContainer>
  );
};

export default CategoryPage;
