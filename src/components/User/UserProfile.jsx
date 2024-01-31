import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserProfile = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <Home>
      <p>Profile</p>
    </Home>
  );
};

export default UserProfile;
