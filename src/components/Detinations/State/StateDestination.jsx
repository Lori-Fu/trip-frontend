import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Description from "./Description";
import StateAttractions from "./StateAttractions";
import StateArticle from "./StateArticle";
import axios from "axios";

const StateDestination = () => {
  const [stateInfo, setStateInfo] = useState();
  const [stateAttractions, setStateAttractions] = useState();

  const { state } = useParams("state");

  useEffect(() => {
    async function fetchStateInfo() {
      try {
        const { data } = await axios.get(`/api/destination/${state}`);
        setStateInfo(data.data);
      } catch (e) {
        alert("Something went wrong, please try again later");
      }
    }

    async function fetchStateAttractions() {
      try {
        const { data } = await axios.get(
          `/api/destination/${state}/attractions`
        );
        setStateAttractions(data.data);
      } catch (e) {
        alert("Something went wrong, please try again later");
      }
    }
    fetchStateInfo();
    fetchStateAttractions();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <main>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            {stateInfo && <Description stateInfo={stateInfo} />}
          </Grid>
          <Grid item xs={12}>
            <StateArticle />
          </Grid>
          <Grid item xs={12}>
            {stateAttractions && (
              <StateAttractions limit={6} attractions={stateAttractions} />
            )}
          </Grid>
        </Grid>
      </main>
    </Container>
  );
};

export default StateDestination;
