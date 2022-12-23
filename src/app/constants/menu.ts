import DashboardIcon from "@mui/icons-material/Dashboard";
import * as ROUTES from "@constants/routes";
import { FC } from "react";
import { SvgIconProps } from "@mui/material";

export interface iMenuProps {
  Icon: FC<SvgIconProps<"svg", {}>>;
  path: string;
  name: string;
}

export const MENU: iMenuProps[] = [
  {
    Icon: DashboardIcon,
    path: ROUTES.dashboard,
    name: "Dashboard",
  },
];
