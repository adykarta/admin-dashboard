import { Box, styled } from "@mui/material";

export const MainLayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.black[100],
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
}));
