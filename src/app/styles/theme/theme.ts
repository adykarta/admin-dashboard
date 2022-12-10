import { inputHeight } from "@constants/containerSizes";
import { ExpandMoreRounded } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { pxToRem } from "@utils/styles";

import { ColorPalette, MuiColorPalette } from "./palette";
import { Typography } from "./typography";

const baseTheme = createTheme({
  palette: {
    ...MuiColorPalette,
    ...ColorPalette,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    ...Typography,
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          "&:first-of-type": {
            borderTop: 0,
          },
          "&:last-of-type": {
            borderBottom: 0,
          },
          "&::before": {
            content: "none",
          },
          "&.Mui-expanded": {
            marginTop: 0,
            marginBottom: 0,
            borderBottom: `1px solid ${baseTheme.palette.black[200]}`,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(0, 6),
          flexDirection: "column",
          [baseTheme.breakpoints.down("sm")]: {
            padding: `${baseTheme.spacing(0)} ${baseTheme.spacing(2)}`,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse",
          borderBottom: `1px solid ${baseTheme.palette.black[300]}`,
          [baseTheme.breakpoints.down("sm")]: {
            flexDirection: "row",
            padding: baseTheme.spacing(2),
          },
        },
        content: {
          marginLeft: baseTheme.spacing(1),
          [baseTheme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: baseTheme.spacing(1),
          },
          "&.Mui-expanded": {
            marginLeft: baseTheme.spacing(1),
            marginTop: baseTheme.spacing(1.5),
            marginBottom: baseTheme.spacing(1.5),
            [baseTheme.breakpoints.down("sm")]: {
              marginLeft: 0,
              marginRight: baseTheme.spacing(1),
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          ...Typography.bodyRegular,
        },
        listbox: {
          maxHeight: 260,
        },
        root: {
          maxHeight: 100,
          overflowY: "auto",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          width: "auto",
          "&.Mui-disabled": {
            backgroundColor: ColorPalette.black[100],
            color: ColorPalette.black[200],
          },
          textTransform: "none",
        },
        fullWidth: {
          width: "100%",
        },
        sizeSmall: {
          ...Typography.buttonSmall,
          padding: `${baseTheme.spacing(1.25)} ${baseTheme.spacing(3)}`,
        },
        sizeMedium: {
          ...Typography.button,
        },
        containedPrimary: {
          backgroundColor: ColorPalette.teal[500],
          color: ColorPalette.white,
          "&:hover": {
            backgroundColor: ColorPalette.teal[700],
            color: ColorPalette.white,
          },
          "&:active": {
            backgroundColor: ColorPalette.teal[900],
            color: ColorPalette.white,
          },
        },
        containedSecondary: {
          backgroundColor: ColorPalette.teal[50],
          color: ColorPalette.teal[500],
          "&:hover": {
            backgroundColor: ColorPalette.teal[100],
            color: ColorPalette.teal[700],
          },
          "&:active": {
            backgroundColor: ColorPalette.teal[100],
            color: ColorPalette.teal[900],
          },
        },
        outlinedPrimary: {
          borderColor: ColorPalette.teal[500],
          color: ColorPalette.teal[500],
          "&:hover": {
            borderColor: ColorPalette.teal[700],
            color: ColorPalette.teal[700],
          },
          "&:active": {
            backgroundColor: ColorPalette.teal[50],
            borderColor: ColorPalette.teal[900],
            color: ColorPalette.teal[900],
          },
        },
        text: {
          padding: 0,
          "&:disabled, &:hover": {
            backgroundColor: "transparent",
          },
        },
        textPrimary: {
          color: ColorPalette.teal[500],
        },
        startIcon: {
          marginRight: pxToRem(6),
        },
        iconSizeMedium: {
          "& > *:first-of-type": {
            fontSize: pxToRem(18),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.teal[50],
          color: baseTheme.palette.teal[500],
          ...baseTheme.typography.bodyRegular,
        },
        deleteIcon: {
          color: baseTheme.palette.teal[500],
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreRounded,
        MenuProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        },
      },
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
          justifyContent: "space-between",
          height: "100%",
          display: "flex",
          alignItems: "center",
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        style: {
          marginTop: pxToRem(6),
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: ColorPalette.black[500],
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 500,
          fontSize: pxToRem(14),
          lineHeight: "20px",
          color: ColorPalette.black[400],
          userSelect: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Inter";
          src: url("/fonts/Inter-Regular.woff") format("woff");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Inter";
          src: url("/fonts/Inter-SemiBold.woff") format("woff");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Inter";
          src: url("/fonts/Inter-Bold.woff") format("woff");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        body {
          background-color: ${ColorPalette.black[50]};
          overflow-x: hidden;
          font-family: Inter, sans-serif;
          font-size: ${Typography.bodyRegular.fontSize};
          line-height: ${Typography.bodyRegular.lineHeight};
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        input[type=number] {
          -webkit-appearance: textfield;
          -moz-appearance: textfield;
          appearance: textfield;
          margin: 0;
        }
        input[type=number]::-webkit-inner-spin-button; input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `,
    },
    MuiGrid: {
      styleOverrides: {
        "grid-xs-12": {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: pxToRem(inputHeight),
          width: "100%",
        },
        input: {
          padding: `0 ${pxToRem(16)}`,
          borderColor: ColorPalette.black[200],
          textOverflow: "ellipsis",
        },
        inputAdornedEnd: {
          paddingRight: pxToRem(14),
        },
        inputAdornedStart: {
          paddingLeft: pxToRem(14),
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, sans-serif",
          ...Typography.bodyRegular,
          "&.Mui-disabled": {
            background: ColorPalette.black[100],
            color: ColorPalette.black[400],
            borderColor: ColorPalette.black[200],
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          color: ColorPalette.black[500],
          fontWeight: 500,
          fontSize: pxToRem(16),
          "@media (max-width: 600px)": {
            fontSize: pxToRem(14),
          },
        },
        separator: {
          marginLeft: "0.2vw",
          marginRight: "0.2vw",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.white,
          borderRadius: pxToRem(4),
          height: "100%", // To allow table cells to have full height.
          // https://stackoverflow.com/a/22220780/8360509
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "& > *:first-of-type": {
            paddingLeft: pxToRem(20),
          },
          "& > *:last-of-type": {
            paddingRight: pxToRem(20),
          },
          "&:hover": {
            backgroundColor: ColorPalette.teal[50],
          },
          "&:last-of-type > td": {
            borderBottom: "none",
          },
        },
        head: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: ColorPalette.black[400],
          fontWeight: 600,
          lineHeight: pxToRem(20),
        },
        body: {
          color: ColorPalette.black[500],
          ...Typography.bodyRegular,
        },
        stickyHeader: {
          backgroundColor: ColorPalette.white,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "bodyRegular",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: pxToRem(12),
          color: "inherit",
          "& > svg": {
            fontSize: pxToRem(20),
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperScrollPaper: {
          maxHeight: "80%",
          borderRadius: pxToRem(8),
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(3),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: `${baseTheme.spacing(2)} ${baseTheme.spacing(3)}`,
        },
        dividers: {
          padding: `${baseTheme.spacing(2.5)} ${baseTheme.spacing(5)}`,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(3),
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: ColorPalette.white,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...Typography.bodyRegular,
          "&.Mui-selected": {
            ...Typography.bodySemiBold,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          maxWidth: "none",
          textTransform: "none",
          padding: `${baseTheme.spacing(2)} ${baseTheme.spacing(3)}`,
          [baseTheme.breakpoints.down("sm")]: {
            padding: baseTheme.spacing(2),
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: "primary",
        textColor: "primary",
        variant: "scrollable",
        scrollButtons: "auto",
      },
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.teal[50],
          minHeight: pxToRem(56),
          display: "flex",
        },
      },
    },
  },
});

export default theme;
