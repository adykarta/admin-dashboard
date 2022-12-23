import type { TypographyProps } from "@mui/material";
import type { ElementType } from "react";

export interface iTextProps extends TypographyProps {
  component?: ElementType;
  underline?: boolean;
  uppercase?: boolean;
}

export interface iCustomizedTypographyProps {
  component?: ElementType;
  underline?: boolean;
  uppercase?: boolean;
}
