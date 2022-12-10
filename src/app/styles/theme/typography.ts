import { pxToRem } from "@utils/styles";
import type { CSSProperties } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4SemiBold"
  | "h4Regular"
  | "bodySemiBold"
  | "bodyRegular"
  | "numberSemiBold"
  | "number"
  | "button"
  | "buttonSmall"
  | "captionSemiBold"
  | "captionRegular"
  | "overline";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h4SemiBold: CSSProperties;
    h4Regular: CSSProperties;
    bodySemiBold: CSSProperties;
    bodyRegular: CSSProperties;
    numberSemiBold: CSSProperties;
    number: CSSProperties;
    button: CSSProperties;
    buttonSmall: CSSProperties;
    captionSemiBold: CSSProperties;
    captionRegular: CSSProperties;
    overline: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: CSSProperties;
    h2?: CSSProperties;
    h3?: CSSProperties;
    h4SemiBold?: CSSProperties;
    h4Regular?: CSSProperties;
    bodySemiBold?: CSSProperties;
    bodyRegular?: CSSProperties;
    numberSemiBold?: CSSProperties;
    number?: CSSProperties;
    button?: CSSProperties;
    buttonSmall?: CSSProperties;
    captionSemiBold?: CSSProperties;
    captionRegular?: CSSProperties;
    overline?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4SemiBold: true;
    h4Regular: true;
    bodySemiBold: true;
    bodyRegular: true;
    numberSemiBold: true;
    number: true;
    button: true;
    buttonSmall: true;
    captionSemiBold: true;
    captionRegular: true;
    overline: true;
    // Disable all other built-in variants
    body1: false;
    body2: false;
    caption: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
  }
}

export const Typography: Record<Variant, CSSProperties> = {
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(34),
    lineHeight: pxToRem(50),
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(30),
  },
  h4SemiBold: {
    fontWeight: 600,
    fontSize: pxToRem(17),
    lineHeight: pxToRem(26),
  },
  h4Regular: {
    fontWeight: 400,
    fontSize: pxToRem(17),
    lineHeight: pxToRem(26),
  },
  bodySemiBold: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  bodyRegular: {
    fontWeight: 400,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  numberSemiBold: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  number: {
    fontWeight: 400,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  button: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  buttonSmall: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  captionSemiBold: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  captionRegular: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  overline: {
    fontWeight: 700,
    fontSize: pxToRem(10),
    lineHeight: pxToRem(14),
  },
};
