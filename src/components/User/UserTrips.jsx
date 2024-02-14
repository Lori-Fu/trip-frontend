import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArticleCard from "../ArticleCard";
import Home from "./Home";
import axios from "axios";
import { useSelector } from "react-redux";

const UserTrips = () => {
  const [articles, setArticles] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    async function fetch() {
      await axios
        .get(`/api/article/myArticle`, {
          headers: {
            Token: user.token,
          },
        })
        .then((response) => {
          setArticles(response.data.data);
        })
        .catch((error) => {
          alert("Something went wrong. Please try again later");
        });
    }
    fetch();
  }, []);

  if (articles) {
    return (
      <Home>
        <Grid container spacing={4} sx={{ marginTop: 1 }}>
          {articles.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
          {articles.length == 0 && (
            <Typography variant="subtitle1">No Posted Articles</Typography>
          )}
        </Grid>
      </Home>
    );
  }
};

export default UserTrips;
