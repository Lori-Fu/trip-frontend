import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const ShowAttractions = ({ attractions, chosenAttractions }) => {
  const handleOnDrag = (e, attraction) => {
    e.dataTransfer.setData("id", attraction.id);
    e.dataTransfer.setData("attraction", attraction.attraction);
    e.dataTransfer.setData("address", attraction.address);
  };

  return (
    <Container sx={{ marginBottom: 2 }}>
      {attractions.map((attraction) => {
        return (
          <Button
            sx={{
              marginRight: 2,
              marginBottom: 2,
              color: chosenAttractions?.includes(attraction.id)
                ? "#9e9e9e"
                : "",
              borderColor: chosenAttractions?.includes(attraction.id)
                ? "#9e9e9e"
                : "",
            }}
            key={attraction.id}
            variant="outlined"
            draggable
            onDragStart={(e) => handleOnDrag(e, attraction)}
          >
            {attraction.attraction}
          </Button>
        );
      })}
    </Container>
  );
};

export default ShowAttractions;
