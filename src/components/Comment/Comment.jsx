import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import AddComment from "./AddComment";
import axios from "axios";
import CommentList from "./CommentList";

export default function Comment({ article_id }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState();
  const [commentToType, setCommentToType] = useState("article");
  const [commentToId, setCommentToId] = useState(article_id);
  const [prefix, setPrefix] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get(
          `/api/comment/article/${article_id}/${page}`
        );

        setComments(data.data.records);
        setTotalPage(data.data.pages);
        setTotal(data.data.total);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    fetch();
  }, [article_id, page]);

  return (
    <Box sx={{ marginTop: 3, marginBottom: 2 }}>
      <Typography variant="h3">Comments ( {total} comments) </Typography>
      <Divider />
      <AddComment
        article_id={article_id}
        prefix={prefix}
        setPrefix={setPrefix}
        type={commentToType}
        setType={setCommentToType}
        id={commentToId}
        setId={setCommentToId}
        setPage={setPage}
        setComments={setComments}
        comments={comments}
        page={page}
      />
      <CommentList
        comments={comments}
        setComments={setComments}
        page={page}
        totalPage={totalPage}
        setPage={setPage}
      />
    </Box>
  );
}
