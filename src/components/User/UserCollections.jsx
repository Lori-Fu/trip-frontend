import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const UserCollections = () => {
  const navigate = useNavigate();

  return (
    <Home>
      <p>Collections</p>
    </Home>
  );
};

export default UserCollections;
