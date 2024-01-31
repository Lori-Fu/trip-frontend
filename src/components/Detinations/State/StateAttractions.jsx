import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AttractionCard from "./AttractionCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function StateAttractions({ limit, attractions }) {
  const [allAttractions, SetAllAttractions] = useState(false);
  return (
    <>
      <Container>
        <Typography variant="h6" gutterBottom>
          Top Attractions
        </Typography>
        <Divider />
        <Grid container spacing={4} sx={{ marginY: 1 }}>
          {!allAttractions
            ? attractions.map((attraction, index) => {
                return (
                  index < limit && (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <AttractionCard attraction={attraction} />
                    </Grid>
                  )
                );
              })
            : attractions.map((attraction, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <AttractionCard attraction={attraction} />
                </Grid>
              ))}
        </Grid>
        {!allAttractions && attractions.length > limit && (
          // <Link
          //   color="primary"
          //   noWrap
          //   variant="body2"
          //   href="/destinations/NY/attractions"
          //   sx={{ p: 1, flexShrink: 0, textDecoration: "none" }}
          // >
          //   View All Attractions...
          // </Link>
          <Typography
            variant="subtitle1"
            color="primary"
            onClick={() => SetAllAttractions(true)}
            sx={{
              ":hover": {
                cursor: "pointer",
                color: "#3498db",
              },
            }}
          >
            View All Attractions...
          </Typography>
        )}
      </Container>
    </>
  );
}
