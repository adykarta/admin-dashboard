import { Box, styled } from "@mui/material";
import { pxToRem } from "@utils/styles";

export const SideNavContainer = styled(Box)<{
  isOpen: boolean;
}>(({ isOpen, theme }) => ({
  backgroundColor: theme.palette.white,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: isOpen ? "300px" : "100px",
  transition: "width 0.2s",
  position: "relative",
}));

export const ButtonToggler = styled(Box)<{
  isOpen: boolean;
}>(({ isOpen, theme }) => ({
  borderRadius: "50%",
  position: "absolute",
  bottom: "40px",
  right: "-25px",
  border: "1px solid white",
  width: "50px",
  height: "50px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1);",
  cursor: "pointer",
  backgroundColor: theme.palette.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    transform: isOpen ? `rotate(180deg)` : `rotate(0deg)`,
  },
}));

export const ProfileContainer = styled(Box)<{
  isOpen: boolean;
}>(({ isOpen }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: pxToRem(16),
  transition: "opacity 0.2s",
  opacity: isOpen ? "1" : "0",
}));

export const MenuContainer = styled(Box)<{
  isOpen: boolean;
}>(({ isOpen }) => ({
  width: "100%",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  padding: pxToRem(16),
}));

export const ProfilePicture = styled("img")<{
  isOpen: boolean;
}>(() => ({
  borderRadius: "50%",
  width: "125px",
  height: "125px",
  transition: "opacity 0.2s",
  marginBottom: pxToRem(8),
}));

export const SettingsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.black[200],
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50px",
  svg: {
    cursor: "pointer",
  },
}));

export const MenuItem = styled(Box)<{
  isOpen: boolean;
  isSelected?: boolean;
}>(({ theme, isSelected, isOpen }) => ({
  width: "100%",
  height: "50px",
  padding: pxToRem(16),
  backgroundColor: theme.palette.orange[900],
  borderRadius: pxToRem(16),
  marginBottom: pxToRem(16),
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: isOpen ? "flex-start" : "center",

  cursor: "pointer",
  ".menu-name, svg": {
    color: isSelected ? theme.palette.white : theme.palette.black,
  },
  ".menu-name": {
    display: isOpen ? "block" : "none",
    marginLeft: isOpen ? pxToRem(8) : 0,
  },
}));
