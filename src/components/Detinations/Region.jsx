import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";

const Region = ({ region, state }) => {
  return (
    <Container sx={{ display: "flex", alignItems: "flex-start" }}>
      <ListItem sx={{ flex: "0 0 230px" }}>{region}</ListItem>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {state.map((s, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                flex: "0 0 200px",
              }}
              component="a"
              href={`/destinations/${s.abbr}`}
            >
              {s.state}
            </ListItem>
          );
        })}
      </Box>
    </Container>
  );
};

export default Region;
