import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../../../asset/no-image-available.jpeg";

const AttractionCard = ({ attraction }) => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ":hover": {
          opacity: 0.8,
          cursor: "pointer",
        },
      }}
      onClick={() => {
        navigate(`/destinations/attraction/${attraction.id}`);
      }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          // pt: "56.25%",
          pt: "80%",
        }}
        image={attraction.pic || attraction.pic != "" ? attraction.pic : pic}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {attraction.attraction}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AttractionCard;
