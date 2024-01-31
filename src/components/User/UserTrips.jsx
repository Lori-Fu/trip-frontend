import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserTrips = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <Home>
      <p>Trips</p>
    </Home>
  );
};

export default UserTrips;
