import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import axios from "axios";
import { Divider } from "@mui/material";

export default function ArticleSidebar({ article_id }) {
  console.log(article_id);
  const [recommendations, setRecommendations] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get("/api/article/hot");
      setRecommendations(data.data);
      console.log(data.data);
    }
    fetch();
  }, []);

  if (recommendations)
    return (
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recommendations
        </Typography>
        {recommendations.map((recommendation, index) => (
          <Box key={recommendation.id}>
            {recommendation.article_id != article_id ? (
              <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
                <Typography
                  component="h2"
                  variant="h5"
                  onClick={() => {
                    navigate(`/article/${recommendation.article_id}`);
                  }}
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      color: "#3498db",
                    },
                  }}
                >
                  {recommendation.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 3.5,
                  }}
                >
                  <Typography level="body-xs" textColor="text.tertiary">
                    View: {recommendation.view_num}
                  </Typography>
                  <Typography level="body-xs" textColor="text.tertiary">
                    Collect:{recommendation.collect_num}
                  </Typography>
                  <Typography level="body-xs" textColor="text.tertiary">
                    Like:{recommendation.thumbup_num}
                  </Typography>
                  {index < recommendations.length - 1 && <Divider />}
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        ))}
      </Box>
    );
}
