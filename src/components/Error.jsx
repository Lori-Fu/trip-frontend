import { Container, Link, Typography, CssBaseline, Box } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Container>
      <CssBaseline />
      <main>
        <Box
          sx={{
            p: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="subtitle1">Not Found</Typography>
          <Link variant="body2" href={"/"}>
            Back to Homepage
          </Link>
        </Box>
      </main>
    </Container>
  );
};

export default Error;
