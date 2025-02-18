import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazirmatn",
  },
  palette: {
    primary: {
      main: "#3d73e6",
      light: "#3841b3",
      dark: "#3c62d3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#191c1d",
      light: "#393c3d",
      dark: "#575b5c",
      contrastText: "#ffffff",
    },
    background: {
      default: colors.grey[200],
    },
  },
});

export default theme;
