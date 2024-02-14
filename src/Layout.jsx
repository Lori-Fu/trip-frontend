import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import NavBar from "./components/NavBar";

const Layout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
