import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ArticleCard from "../../ArticleCard";

const StateArticle = () => {
  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title1",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
    {
      title: "Post title2",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
    },
  ];
  return (
    <>
      <Container>
        <Typography variant="h6" gutterBottom>
          Trending Travel Plans
        </Typography>
        <Divider />
        <Grid container spacing={4} sx={{ marginTop: 1 }}>
          {featuredPosts.map((post) => (
            <ArticleCard key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default StateArticle;
