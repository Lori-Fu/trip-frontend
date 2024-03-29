import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Banner = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${"https://source.unsplash.com/random?wallpapers"})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {
        <img
          style={{ display: "none" }}
          src={"https://source.unsplash.com/random?wallpapers"}
          alt={"pic"}
        />
      } */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            {/* <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Title
            </Typography> */}
            <Typography
              variant="h5"
              color="inherit"
              style={{ whiteSpace: "pre-line" }}
              paragraph
            >
              {`Embark on a Journey of a Lifetime:
              Explore, Experience, and Embrace the Wonders of the World – Your Adventure Awaits, Seize it Today.`}
            </Typography>
            <Link variant="subtitle1" color="inherit" href="/search">
              {"Start Exploring"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Banner;
