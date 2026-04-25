import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const items = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Users", icon: <PeopleIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        minHeight: "calc(100vh - 64px)", // subtract navbar height
        borderRight: "1px solid",
        borderColor: "divider",
        p: 2,
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary" }}>
        NAVIGATION
      </Typography>

      <List>
        {items.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Logged in as: <b>admin</b>
      </Typography>
    </Box>
  );
}
