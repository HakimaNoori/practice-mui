import Grid from "@mui/material/Grid";
import { stats } from "../data/dashboardData";
import StatCard from "./StatCard";

export default function DashboardCards() {
  return (
    <Grid container spacing={2}>
      {stats.map((s) => (
        <Grid item key={s.label}>
          <StatCard label={s.label} value={s.value} icon={s.icon} />
        </Grid>
      ))}
    </Grid>
  );
}
