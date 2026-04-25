import { createTheme } from "@mui/material/styles";

export default function getTheme(mode = "light") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      background: {
        default: mode === "light" ? "#f6f7fb" : "#0b1220",
        paper: mode === "light" ? "#ffffff" : "#0f172a",
      },
    },
    typography: {
      fontFamily: ["Inter", "system-ui", "Arial", "sans-serif"].join(","),
      h5: { fontWeight: 700 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiPaper: {
        styleOverrides: { root: { borderRadius: 12 } },
      },
      MuiCard: {
        styleOverrides: { root: { borderRadius: 12 } },
      },
    },
  });
}
