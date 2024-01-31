import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserLikes = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <Home>
      <p>Likes</p>
    </Home>
  );
};

export default UserLikes;
