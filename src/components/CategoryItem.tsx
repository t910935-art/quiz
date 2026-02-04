import { Flex } from "@mantine/core";

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active?: boolean;
}

const CategoryItem = ({ icon, title, onClick, active }: CategoryItemProps) => {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"xs"}
      p={"md"}
      style={{}}
    >
      CategoryItem
    </Flex>
  );
};

export default CategoryItem;
