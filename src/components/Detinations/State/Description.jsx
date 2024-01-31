import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Description = ({ stateInfo }) => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {stateInfo.name}
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        {stateInfo.description}
      </Typography>
      <Stack sx={{ pt: 2 }} direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/plan");
          }}
        >
          Start Plan Your Trip to {stateInfo.name}
        </Button>
        {/* <Button variant="outlined">Secondary action</Button> */}
      </Stack>
    </Container>
  );
};

export default Description;
