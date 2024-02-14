import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ArticleCard from "../ArticleCard";
import AttractionCard from "../Detinations/State/AttractionCard";

const SearchResult = ({ attraction, articles }) => {
  return (
    <>
      {attraction && (
        <Box sx={{ marginBottom: 6 }}>
          <Typography variant="h6" gutterBottom>
            Attraction
          </Typography>
          <Divider />
          <Grid container spacing={4} sx={{ marginY: 1 }}>
            <Grid item xs={12} sm={6} md={4}>
              <AttractionCard attraction={attraction} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Typography variant="h6" gutterBottom>
        Article
      </Typography>
      <Divider />
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </Grid>
    </>
  );
};

export default SearchResult;
