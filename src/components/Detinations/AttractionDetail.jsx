import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import pic from "../../asset/no-image-available.jpeg";
import axios from "axios";
import { Typography } from "@mui/material";

const AttractionDetail = () => {
  const { attractionid } = useParams("attractionid");
  const [attractionInfo, setAttractionInfo] = useState();

  useEffect(() => {
    async function fetchAttraction() {
      try {
        const { data } = await axios.get(
          `/api/destination/attraction/${attractionid}`
        );
        console.log(data);
        setAttractionInfo(data.data);
      } catch (e) {
        alert("Something went wrong, please try again later");
      }
    }
    fetchAttraction();
  }, []);
  if (attractionInfo)
    return (
      <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
        <main>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid item md={7} xs={6}>
              <img
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
                src={
                  attractionInfo.pic && attractionInfo.pic != ""
                    ? attractionInfo.pic
                    : pic
                }
                alt={"pic"}
              />
            </Grid>
            <Grid item md={4} xs={6} sx={{ marginLeft: 6 }}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ marginBottom: 5 }} gutterBottom>
                  {attractionInfo.attraction}
                </Typography>
                <Box sx={{ marginBottom: 5 }}>
                  <Typography variant="h5" gutterBottom>
                    About
                  </Typography>
                  <Typography>{attractionInfo.detail}</Typography>
                </Box>
                <Box sx={{ marginBottom: 5 }}>
                  <Typography variant="h5" gutterBottom>
                    Address
                  </Typography>
                  <Typography>{attractionInfo.address}</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </Container>
    );
};

export default AttractionDetail;
