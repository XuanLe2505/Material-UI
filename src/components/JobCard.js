import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid } from "@mui/material";

export default function JobCard({ job }) {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275, minHeight: 250, position: "relative" }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 16,
              mb: 1,
              borderBottom: 1,
              textAlign: "center",
            }}
            color="text.secondary"
            gutterBottom
            noWrap
          >
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {job.description.length > 120
              ? `${job.description.slice(0, 120)}...`
              : job.description}
          </Typography>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              label={skill}
              sx={{ mr: 1, mb: 1, backgroundColor: "#F0534A", color: "white"}}
            />
          ))}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            variant="contained"
            sx={{ position: "absolute", bottom: 5 }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
