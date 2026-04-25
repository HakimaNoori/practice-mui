import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import getTheme from "./theme";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import UsersTable from "./components/UsersTable";

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleMenuClick = () => {
    alert("Menu clicked (later we can make this open a drawer)");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar
          onMenuClick={handleMenuClick}
          mode={mode}
          onToggleMode={toggleMode}
        />

        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box sx={{ flex: 1, py: 3 }}>
            <Container maxWidth="lg">
              <Typography variant="h5" sx={{ mb: 2 }}>
                Overview
              </Typography>

              <DashboardCards />
              <UsersTable />
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
