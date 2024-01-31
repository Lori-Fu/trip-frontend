import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/User/Register.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserTrips from "./components/User/UserTrips.jsx";
import UserCollections from "./components/User/UserCollections.jsx";
import UserLikes from "./components/User/UserLikes.jsx";
import UserComments from "./components/User/UserComments.jsx";
import Login from "./components/User/Login.jsx";
import Article from "./components/Article/Article.jsx";
import Error from "./components/Error.jsx";
import "./App.css";
import Destinations from "./components/Detinations/Destinations.jsx";
import StateDestination from "./components/Detinations/State/StateDestination.jsx";
import Layout from "./Layout.jsx";
import Plan from "./components/Plan/Plan.jsx";
import Trending from "./components/Homepage/Trending.jsx";
import AttractionDetail from "./components/Detinations/AttractionDetail.jsx";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [loginExpireTime, setLoginExpireTime] = useState();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        {/* User */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route
          path="/user/trips"
          element={
            <Layout>
              <UserTrips />
            </Layout>
          }
        />
        <Route
          path="/user/collections"
          element={
            <Layout>
              <UserCollections />
            </Layout>
          }
        />
        <Route
          path="/user/likes"
          element={
            <Layout>
              <UserLikes />
            </Layout>
          }
        />
        <Route
          path="/user/comments"
          element={
            <Layout>
              <UserComments />
            </Layout>
          }
        />
        {/* Article */}
        <Route
          path="/article/:id"
          element={
            <Layout>
              <Article />
            </Layout>
          }
        />
        {/* Destinations */}
        <Route
          path="/destinations"
          element={
            <Layout>
              <Destinations />
            </Layout>
          }
        />
        <Route
          path="/destinations/:state"
          element={
            <Layout>
              <StateDestination />
            </Layout>
          }
        />
        <Route
          path="/destinations/attraction/:attractionid"
          element={
            <Layout>
              <AttractionDetail />
            </Layout>
          }
        />

        {/* Route */}
        <Route
          path="/plan"
          element={
            <Layout>
              <Plan />
            </Layout>
          }
        />
        {/* Trending */}
        <Route
          path="/trending"
          element={
            <Layout>
              <Trending />
            </Layout>
          }
        />
        <Route
          path="*"
          element={<Error messageProp="Bad Input" statusCodeProp={400} />}
        />
      </Routes>
    </>
  );
}

export default App;
