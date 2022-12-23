import type { Breakpoint, Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const useIsMobile = (screen?: Breakpoint): boolean => {
  const isMobile = useMediaQuery(
    (theme: Theme) => theme.breakpoints.down(screen ?? "sm"),
    { noSsr: true }
  );

  return isMobile;
};

export default useIsMobile;
