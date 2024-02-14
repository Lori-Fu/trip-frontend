import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <Home>
      <p>Username: {user.username}</p>
    </Home>
  );
};

export default UserProfile;
