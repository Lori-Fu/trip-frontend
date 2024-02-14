import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import pic from "../asset/no-image-available.jpeg";

const ArticleCard = ({ article }) => {
  if (article) {
    let article_head = article.content_head;
    if (article_head.length > 190) {
      article_head = article_head.substring(0, 190);
      const index = article_head.lastIndexOf(" ");
      article_head = article_head.substring(0, index) + "...";
    }

    return (
      <Grid item xs={12} md={6}>
        <CardActionArea
          component="a"
          href={
            article.article_id
              ? `/article/${article.article_id}`
              : `/article/${article.id}`
          }
          sx={{ height: "100%" }}
        >
          <Card sx={{ display: "flex", position: "relative", height: "100%" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {article.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {article.create_date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article_head}
              </Typography>
              <Typography
                sx={{ position: "absolute", bottom: 6 }}
                variant="subtitle1"
                color="primary"
              >
                Continue reading...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              image={article.cover_url ? article.cover_url : pic}
            />
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
};
export default ArticleCard;
