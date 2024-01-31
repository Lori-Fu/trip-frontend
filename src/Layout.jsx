import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import NavBar from "./components/NavBar";

const Layout = ({ isLoggedIn, setIsLoggedIn, children }) => {
  return (
    <Box>
      <CssBaseline />
      <NavBar isLoggedin={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {children}
    </Box>
  );
};

export default Layout;
