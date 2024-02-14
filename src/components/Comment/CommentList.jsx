import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemText, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

const CommentList = ({ comments, page, setPage, totalPage, setComments }) => {
  const user = useSelector((state) => state.user);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleLikeComment = async (comment_id) => {
    if (user && user.expire_time > new Date().getTime()) {
      await axios
        .get(`/api/comment/article/like/${comment_id}`, {
          headers: {
            Token: user.token,
          },
        })
        .then((response) => {
          setComments((comments) =>
            comments.map((comment) => {
              if (comment.id == comment_id) {
                let updatedThumbupList = [...comment.thumbup_list];
                let updatedThumbupNum = comment.thumbup_num;
                const index = updatedThumbupList.indexOf(user.id);
                if (index != -1) {
                  updatedThumbupList.splice(index, 1);
                  updatedThumbupNum -= 1;
                } else {
                  updatedThumbupList.push(user.id);
                  updatedThumbupNum += 1;
                }
                return {
                  ...comment,
                  thumbup_list: updatedThumbupList,
                  thumbup_num: updatedThumbupNum,
                };
              } else {
                return comment;
              }
            })
          );
        })
        .catch((error) => {
          alert("Something went wrong. Please try again later");
        });
    } else {
      alert("Please log in to like comment");
    }
  };

  if (comments && comments.length > 0) {
    return (
      <>
        <List
          sx={{
            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
              {
                borderLeft: "2px solid",
                borderLeftColor: "var(--joy-palette-primary-outlinedBorder)",
              },
          }}
        >
          {comments.map((comment, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText sx={{ p: 2 }}>
                  <Box sx={{ pl: 2, width: "100%", marginBottom: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <Typography level="body-xs">
                          {comment.username}
                        </Typography>
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "99px",
                          }}
                        />
                      </Box>
                      <Typography level="body-xs" textColor="text.tertiary">
                        {comment.create_time.split("T")[0]}
                      </Typography>
                    </Box>
                    <div>
                      <Typography level="body-sm">{comment.content}</Typography>
                    </div>
                  </Box>
                </ListItemText>
                <Box
                  sx={{
                    display: "flex",
                    position: "absolute",
                    alignItems: "center",
                    right: 0,
                    bottom: 0,
                    gap: 0.5,
                  }}
                >
                  <Typography level="body-xs" textColor="text.tertiary">
                    {comment.thumbup_num}
                  </Typography>
                  {user &&
                  user.expire_time > new Date().getTime() &&
                  comment.thumbup_list.includes(user.id) ? (
                    <IconButton
                      onClick={() => {
                        handleLikeComment(comment.id);
                      }}
                      size="small"
                    >
                      <ThumbUpAltIcon fontSize="inherit" />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleLikeComment(comment.id);
                      }}
                      size="small"
                    >
                      <ThumbUpOffAltIcon fontSize="inherit" />
                    </IconButton>
                  )}
                  {/* <Button
                    variant="text"
                    size="small"
                    onClick={() => {
                      setCommentToType("comment");
                      setCommentToId(comment.id);
                      setPrefix(`Reply to ${comment.username}: `);
                    }}
                  >
                    Reply
                  </Button> */}
                </Box>
                {/* <SubComment id={CommentsDisabled.id} /> */}
              </ListItem>
              <ListDivider sx={{ m: 0 }} />
            </React.Fragment>
          ))}
        </List>
        {page && totalPage && (
          <>
            <Pagination
              count={totalPage}
              page={page}
              onChange={handlePageChange}
            />
          </>
        )}
      </>
    );
  }
};

export default CommentList;
