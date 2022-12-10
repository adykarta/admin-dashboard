import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { FC } from "react";
import theme from "@styles/theme/theme";

const Provider: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SnackbarProvider
          id="snackbar_global"
          autoHideDuration={3500}
          maxSnack={3}
          hideIconVariant={true}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};
export default Provider;
