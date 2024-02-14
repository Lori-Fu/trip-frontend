import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ArticleCard from "../ArticleCard";
import Home from "./Home";
import axios from "axios";
import { Typography } from "@mui/material";

const UserCollections = () => {
  const [articles, setArticles] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    async function fetch() {
      await axios
        .get(`/api/user/myCollections`, {
          headers: {
            Token: user.token,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setArticles(response.data.data);
        })
        .catch((error) => {
          // console.log(error);
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
            <Typography variant="subtitle1">No Collected Articles</Typography>
          )}
        </Grid>
      </Home>
    );
  }
};

export default UserCollections;
