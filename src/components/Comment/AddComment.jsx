import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import Typography from "@mui/joy/Typography";

import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

import { styled } from "@mui/system";
import axios from "axios";
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
export default function AddComment({
  article_id,
  prefix,
  setPrefix,
  type,
  setType,
  id,
  setId,
  setPage,
  setComments,
  comments,
  page,
}) {
  const user = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  const resetComment = () => {
    setPrefix("");
    setType("article");
    setId(article_id);
    setComment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type == "article") {
      await axios
        .post(
          `/api/comment/article/new`,
          {
            article_id: id,
            content: comment,
          },
          {
            headers: {
              Token: user.token,
            },
          }
        )
        .then((response) => {
          alert("Comment successfully sent!");
          resetComment();
          const newComment = response.data.comment;
          if (page == 1) {
            setComments((comments) => [newComment, ...comments]);
          } else {
            setPage(1);
          }
        });
    }
  };

  return (
    <>
      {user && user.expire_time > new Date().getTime() ? (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginY: 2 }}>
          <Textarea
            maxLength={500}
            aria-label="minimum height textarea"
            minRows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={prefix ? prefix : "Add Comment Here"}
          />
          <Box
            size="small"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="text"
              sx={{ marginRight: 1 }}
              onClick={() => {
                resetComment();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography level="body-sm">Please log in to leave comment</Typography>
      )}
    </>
  );
}
