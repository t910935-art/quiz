import { Button, Grid, Text, TextInput } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import { GiBrain, GiTrophy } from "react-icons/gi";
import { IoFlash } from "react-icons/io5";
import { Link } from "react-router";
import useQuizStore from "../store/quize-store";
import { useNavigate } from "react-router";

import QuizContainer from "../components/QuizContainer";

const WelcomePage = () => {
  const { userName, setUserName } = useQuizStore();

  const navigate = useNavigate();

  return (
    <QuizContainer>
      <Text
        ta={"center"}
        fw={"bold"}
        variant="gradient"
        fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        - working Quizify Pro -{userName}
      </Text>
      <Text ta={"center"} fz={"1.5rem"} fw={"light"} c={"dimmed"}>
        Challenge Your Mind, Expand Your Knowledge
      </Text>
      {/* <ActionIconBox label="Compete" /> */}

      <Grid miw={"90%"}>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}> </Grid.Col>
      </Grid>
      <Text ta={"center"} fz={"lg"} maw={"80%"} fw={"light"} c={"dimmed"}>
        Embark on a journey of knowledge with QuizMaster. Test your skills
        across various categories, challenge friends, and watch your expertise
        grow with each quiz you take.
      </Text>

      <TextInput
        placeholder="Enter your full name to start"
        radius={"xl"}
        w={"300px"}
        size="lg"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        rightSection={<FaCheckCircle color="green" />}
      />

      <Button
        disabled={!userName}
        variant="gradiant"
        onClick={() => {
          navigate("/category");
        }}
        miw={"200px"}
        size="lg"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink" }}
      >
        select category
      </Button>
    </QuizContainer>
  );
};

export default WelcomePage;
