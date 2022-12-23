import SideNav from "@components/organisms/SideNav";
import { Box } from "@mui/material";
import { FC } from "react";
import { MainLayoutContainer } from "./style";
import { iMainLayoutProps } from "./types";

const MainLayout: FC<iMainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutContainer>
      <SideNav />
      <Box>{children}</Box>
    </MainLayoutContainer>
  );
};

export default MainLayout;
