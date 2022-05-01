import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    text: {
      primary: "#fafafa",
    },
    background: {
      default: "#2b2929",
    },
    primary: {
      main: `#2b2929`,
    },
    secondary: { main: `#fafafa` },
    accent: { backgroundColor: `#4A0182`, color: `#fafafa` },
    accent2: { backgroundColor: `#949595`, color: `#4A0182` },
    dark: { main: `000101` },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
