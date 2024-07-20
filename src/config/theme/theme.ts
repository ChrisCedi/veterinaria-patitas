import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", "DM Serif Display", sans-serif',
    h3: {
      fontFamily: '"DM Serif Display", serif',
    },
    h4: {
      fontFamily: '"DM Serif Display", serif',
    },
    h6: {
      fontFamily: '"DM Serif Display", serif',
    },
  },
  palette: {
    primary: {
      main: "#4aa188",
    },
    secondary: {
      main: "#8ec7b6",
    },
    warning: {
      main: "#f2d336",
    },
  },
});
