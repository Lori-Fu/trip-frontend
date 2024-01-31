import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Tooltip from "@mui/joy/Tooltip";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Day from "./Day";

export default function ArticleMain({ article }) {
  if (article != {}) {
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
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ ml: 2 }}>
              <Typography level="title-sm" textColor="text.primary" mb={0.5}>
                Author: {article.author?.username}
              </Typography>
              <Typography level="body-xs" textColor="text.tertiary">
                Publish Date: {article.create_time?.split("T")[0]}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "32px",
              flexDirection: "row",
              gap: 1.5,
            }}
          >
            <Button
              size="sm"
              variant="plain"
              startDecorator={<StarBorderIcon />}
            >
              Collect
            </Button>

            <Button
              size="sm"
              variant="plain"
              startDecorator={<ThumbUpOffAltIcon />}
            >
              Like
            </Button>

            <Button
              size="sm"
              variant="plain"
              color="neutral"
              startDecorator={<ThumbDownOffAltIcon />}
            >
              Dislike
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 2 }} />
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
                {article.visibility ? "Public" : "Private"}
              </Chip>
            }
          >
            {article.header}
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
        <Typography level="body-sm" mt={2} mb={2}>
          {article.content_head}
        </Typography>

        {article.content_per_day?.map((content, index) => {
          return (
            <Box key={index}>
              <Day
                index={index}
                content={content}
                sx={{ border: "black solid" }}
              />
              {index != article.content_per_day.length - 1 && (
                <Divider sx={{ marginTop: 2 }} />
              )}
            </Box>
          );
        })}
        <Typography level="body-sm" mt={2} mb={2}>
          {article.content_tail}
        </Typography>
      </Sheet>
    );
  }
}
