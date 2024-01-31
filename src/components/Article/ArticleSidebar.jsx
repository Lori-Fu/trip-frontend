import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function ArticleSidebar({
  recommendations,
  description,
  title,
}) {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Recommendations
      </Typography>
      {recommendations.map((recommendations) => (
        <Link
          display="block"
          variant="body1"
          href={recommendations.url}
          key={recommendations.title}
        >
          {recommendations.title}
        </Link>
      ))}
    </Grid>
  );
}
