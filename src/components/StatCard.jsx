import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChatIcon from "@mui/icons-material/Chat";

function pickIcon(name) {
  switch (name) {
    case "people":
      return <PeopleIcon />;
    case "shopping":
      return <ShoppingCartIcon />;
    case "money":
      return <AttachMoneyIcon />;
    case "chat":
      return <ChatIcon />;
    default:
      return <PeopleIcon />;
  }
}

export default function StatCard({ label, value, icon }) {
  return (
    <Card variant="outlined">
      <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {label}
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5 }}>
            {value}
          </Typography>
        </Box>

        <Box sx={{ fontSize: 40, color: "text.secondary" }}>{pickIcon(icon)}</Box>
      </CardContent>
    </Card>
  );
}
