import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Banner from "./Banner";
import HotSection from "./HotSection";
import HotDestinations from "./HotDestinations";

const Homepage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <main>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Banner />
          </Grid>
          <Grid item xs={12}>
            <HotDestinations />
          </Grid>
          <Grid item xs={12}>
            <HotSection />
          </Grid>
        </Grid>
      </main>
    </Container>
  );
};

export default Homepage;
