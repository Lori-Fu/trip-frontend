import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArticleCard from "../ArticleCard";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import axios from "axios";

const HotSection = () => {
  const [hotPosts, setHotPosts] = useState();

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get("/api/article/hot");
      setHotPosts(data.data);
    }
    fetch();
  }, []);

  if (hotPosts)
    return (
      <>
        <Typography component="h6" variant="h6">
          Popular Itinerary
        </Typography>
        <Divider />
        <Grid container spacing={4} sx={{ marginTop: 1 }}>
          {hotPosts.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Grid>
      </>
    );
};

export default HotSection;
