import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArticleMain from "./ArticleMain";
import ArticleSidebar from "./ArticleSidebar";
import axios from "axios";
import Comment from "../Comment/Comment";

export default function Article() {
  const user = useSelector((state) => state.user);
  const { id } = useParams("id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [content, setContent] = useState();
  const [day, setDay] = useState();
  const [isCollect, setIsCollect] = useState(false);
  const [isThumbup, setIsThumbup] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      setError(false);
      if (id) {
        try {
          const { data } = await axios.get(`/api/article/${id}`, {
            headers: { Token: user?.token },
          });

          setContent(data.data.content);
          setIsCollect(data.data.isCollect);
          setIsThumbup(data.data.isThumbup);
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      }
    }
    fetch();
  }, [id]);
  if (loading) {
    return (
      <Container maxWidth="lg">
        <main>
          <p>Loading...</p>
        </main>
      </Container>
    );
  } else if (error) {
    return (
      <Container maxWidth="lg">
        <main>
          <p>Something went wrong...Please try again later</p>
        </main>
      </Container>
    );
  } else if (!loading && !error) {
    return (
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} sx={{ mt: 1 }}>
            <Grid item xs={12} md={9}>
              <ArticleMain
                content={content}
                setContent={setContent}
                isThumbup={isThumbup}
                setIsThumbup={setIsThumbup}
                isCollect={isCollect}
                setIsCollect={setIsCollect}
              />
              <Comment article_id={content.id} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ArticleSidebar article_id={content.id} />
            </Grid>
          </Grid>
        </main>
      </Container>
      // </>
    );
  }
}
