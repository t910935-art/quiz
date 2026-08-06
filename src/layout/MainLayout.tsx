text

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      mih={"100vh"}
      display={"flex"}
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "normal",
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
