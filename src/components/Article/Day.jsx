import React from "react";
// import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Itinerary from "../Plan/Step2/Itinerary";

const Day = ({ index, content_per_day, route_per_day }) => {
  if (content_per_day && route_per_day)
    return (
      <Box>
        <Typography level="body-sm" mt={2} mb={2}>
          {`Day ${index + 1}`}
        </Typography>
        <Grid
          container
          spacing={6}
          sx={{
            height: "50vh",
          }}
        >
          <Grid item md={6} xs={6}>
            <Itinerary itinerary={route_per_day} />
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography level="body-sm" mt={2} mb={2}>
              {content_per_day}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Day;
