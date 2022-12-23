import { styled, Typography } from "@mui/material";
import { shouldForwardProp } from "@utils/styles";

import type { iCustomizedTypographyProps } from "./types";

export const CustomizedTypography = styled(Typography, {
  shouldForwardProp,
})<iCustomizedTypographyProps>(({ underline, uppercase }) => ({
  textDecoration: underline ? "underline" : "none",
  textTransform: uppercase ? "uppercase" : "none",
}));
