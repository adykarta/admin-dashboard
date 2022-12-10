export const ColorPalette = {
  black: {
    50: "#F9F9F9",
    100: "#F4F4F4",
    200: "#DEDEDE",
    300: "#BDBDBD",
    400: "#929292",
    500: "#383838",
  },
  white: "#FFFFFF",
  teal: {
    50: "#EBF8F7",
    100: "#A5EBE3",
    500: "#03A199",
    700: "#008483",
    900: "#006568",
  },
  blue: {
    50: "#EDF8FF",
    500: "#0470C8",
  },
  green: {
    50: "#EDFFFD",
    500: "#07A650",
  },
  orange: {
    50: "#FFF6ED",
    500: "#F27D07",
  },
  red: {
    50: "#FFF2F8",
    500: "#D42867",
    700: "#B20C42",
    900: "#90012C",
  },
};

type ColorPalette = typeof ColorPalette;

declare module "@mui/material/styles" {
  interface Palette {
    black: ColorPalette["black"];
    white: ColorPalette["white"];
    teal: ColorPalette["teal"];
    blue: ColorPalette["blue"];
    green: ColorPalette["green"];
    orange: ColorPalette["orange"];
    red: ColorPalette["red"];
  }
  interface PaletteOptions {
    black: ColorPalette["black"];
    white: ColorPalette["white"];
    teal: ColorPalette["teal"];
    blue: ColorPalette["blue"];
    green: ColorPalette["green"];
    orange: ColorPalette["orange"];
    red: ColorPalette["red"];
  }
}

export const MuiColorPalette = {
  primary: {
    light: ColorPalette.teal[50],
    main: ColorPalette.teal[500],
    dark: ColorPalette.teal[700],
  },
  secondary: {
    main: ColorPalette.blue[500],
    light: ColorPalette.blue[50],
  },
  success: {
    main: ColorPalette.green[500],
    light: ColorPalette.green[50],
  },
  warning: {
    main: ColorPalette.orange[500],
    light: ColorPalette.orange[50],
  },
  error: {
    main: ColorPalette.red[500],
    light: ColorPalette.red[50],
    dark: ColorPalette.red[700],
  },
};
