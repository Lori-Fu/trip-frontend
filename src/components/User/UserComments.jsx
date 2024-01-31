import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserComments = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <Home>
      <p>Comments</p>
    </Home>
  );
};

export default UserComments;
