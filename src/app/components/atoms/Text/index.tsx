/* eslint-disable react/display-name */
import type { FC } from "react";
import { forwardRef } from "react";

import { CustomizedTypography } from "./styles";
import type { iTextProps } from "./types";

const Text: FC<iTextProps> = forwardRef(
  (
    {
      children,
      component,
      variant = "bodyRegular",
      underline,
      color,
      uppercase,
      ...props
    },
    ref
  ) => {
    return (
      <CustomizedTypography
        component={component || "p"}
        underline={underline}
        uppercase={uppercase}
        ref={ref}
        color={color || "inherit"}
        variant={variant}
        {...props}
      >
        {children}
      </CustomizedTypography>
    );
  }
);

export default Text;
