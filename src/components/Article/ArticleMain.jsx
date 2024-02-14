import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Tooltip from "@mui/joy/Tooltip";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Day from "./Day";
import axios from "axios";

export default function ArticleMain({
  content,
  setContent,
  isCollect,
  setIsCollect,
  isThumbup,
  setIsThumbup,
}) {
  const user = useSelector((state) => state.user);

  const handleCollect = async () => {
    if (user && user.expire_time > new Date().getTime()) {
      await axios
        .get(`/api/user/collectArticle/${content.id}`, {
          headers: {
            Token: user.token,
          },
        })
        .then((response) => {
          const prev = content.collect_num;
          if (isCollect) {
            setContent((content) => ({ ...content, collect_num: prev - 1 }));
          } else {
            setContent((content) => ({ ...content, collect_num: prev + 1 }));
          }
          setIsCollect((isCollect) => !isCollect);
        })
        .catch((e) => {
          alert("Something went wrong. Please try again later");
        });
    } else {
      alert("Please log in");
    }
  };

  const handleThumbup = async () => {
    if (user && user.expire_time > new Date().getTime()) {
      await axios
        .get(`/api/user/likeArticle/${content.id}`, {
          headers: {
            Token: user.token,
          },
        })
        .then((response) => {
          const prev = content.thumbup_num;
          if (isThumbup) {
            setContent((content) => ({ ...content, thumbup_num: prev - 1 }));
          } else {
            setContent((content) => ({ ...content, thumbup_num: prev + 1 }));
          }
          setIsThumbup((isThumbup) => !isThumbup);
        })
        .catch((e) => {
          alert("Something went wrong. Please try again later");
        });
    } else {
      alert("Please log in");
    }
  };

  if (content) {
    return (
      <Sheet
        variant="outlined"
        sx={{
          minHeight: 500,
          borderRadius: "sm",
          p: 2,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            marginBottom: 0.5,
            height: "32px",
          }}
        >
          <Box sx={{ ml: 2 }}>
            <Typography level="title-sm" textColor="text.primary" mb={0.5}>
              Author: {content.username}
            </Typography>
          </Box>

          {user && user.expire_time > new Date().getTime() && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1.5,
              }}
            >
              {isCollect ? (
                <Button
                  onClick={() => handleCollect()}
                  size="sm"
                  variant="plain"
                  startDecorator={<StarIcon />}
                >
                  Collect
                </Button>
              ) : (
                <Button
                  onClick={() => handleCollect()}
                  size="sm"
                  variant="plain"
                  startDecorator={<StarBorderIcon />}
                >
                  Collect
                </Button>
              )}
              {isThumbup ? (
                <Button
                  onClick={() => handleThumbup()}
                  size="sm"
                  variant="plain"
                  startDecorator={<ThumbUpAltIcon />}
                >
                  Like
                </Button>
              ) : (
                <Button
                  onClick={() => handleThumbup()}
                  size="sm"
                  variant="plain"
                  startDecorator={<ThumbUpOffAltIcon />}
                >
                  Like
                </Button>
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            ml: 2,
          }}
        >
          <Typography level="body-xs" textColor="text.tertiary">
            Publish Date: {content.create_time?.split("T")[0]}
          </Typography>
          <Typography level="body-xs" textColor="text.tertiary">
            View: {content.view_num}
          </Typography>
          <Typography level="body-xs" textColor="text.tertiary">
            Collect:{content.collect_num}
          </Typography>
          <Typography level="body-xs" textColor="text.tertiary">
            Like:{content.thumbup_num}
          </Typography>
        </Box>
        <Divider sx={{ mt: 1 }} />
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            level="title-lg"
            textColor="text.primary"
            endDecorator={
              <Chip
                component="span"
                size="sm"
                variant="outlined"
                color="warning"
              >
                {content.post_status ? "Public" : "Private"}
              </Chip>
            }
          >
            {content.title}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <div>
              <Tooltip size="sm" title="Copy email" variant="outlined">
                <Chip size="sm" variant="soft" color="primary">
                  tag1
                </Chip>
              </Tooltip>
            </div>
            <div>
              <Tooltip size="sm" title="Copy email" variant="outlined">
                <Chip size="sm" variant="soft" color="primary">
                  tag2
                </Chip>
              </Tooltip>
            </div>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "80%" }} src={content.cover_url} alt={"pic"} />
        </Box>
        <Typography level="body-sm" mt={2} mb={2}>
          {content.content_head}
        </Typography>

        {content.content_body.map((content_per_day, index) => {
          return (
            <Box key={index}>
              <Day
                index={index}
                content_per_day={content_per_day}
                route_per_day={content.route[index]}
                sx={{ border: "black solid" }}
              />
              {index != content.content_body.length - 1 && (
                <Divider sx={{ marginTop: 2 }} />
              )}
            </Box>
          );
        })}
        <Typography level="body-sm" mt={2} mb={2}>
          {content.content_tail}
        </Typography>
      </Sheet>
    );
  }
}
