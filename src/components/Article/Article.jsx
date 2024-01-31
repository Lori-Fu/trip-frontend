import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleMain from "./ArticleMain";
import ArticleSidebar from "./ArticleSidebar";
import axios from "axios";

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  recommendations: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
};

export default function Article() {
  const { id } = useParams("id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      if (id) {
        try {
          const result = await axios.get(`/api/article/${id}`);
          console.log(result);
          const { data } = await axios.get(`/api/article/${id}`);
          setArticle(data.data);
          console.log(data.data);
          console.log(article);
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      }
    }
    fetch();
  }, []);

  return (
    <Container maxWidth="lg">
      <main>
        <Grid container spacing={5} sx={{ mt: 1 }}>
          <Grid item xs={12} md={8}>
            {article != {} && <ArticleMain article={article} />}
          </Grid>
          <ArticleSidebar
            title={sidebar.title}
            description={sidebar.description}
            recommendations={sidebar.recommendations}
          />
        </Grid>
      </main>
    </Container>
    // </>
  );
}
