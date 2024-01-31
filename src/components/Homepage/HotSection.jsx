import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HotPost from "./HotPost";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

const HotSection = () => {
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
      <Typography component="h6" variant="h6">
        Popular Itinerary
      </Typography>
      <Divider />
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        {featuredPosts.map((post) => (
          <HotPost key={post.title} post={post} />
        ))}
      </Grid>
    </>
  );
};

export default HotSection;
