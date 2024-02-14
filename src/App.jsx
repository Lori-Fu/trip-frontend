import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/User/Register.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserTrips from "./components/User/UserTrips.jsx";
import UserCollections from "./components/User/UserCollections.jsx";
import UserLikes from "./components/User/UserLikes.jsx";
// import UserComments from "./components/User/UserComments.jsx";
import Login from "./components/User/Login.jsx";
import Article from "./components/Article/Article.jsx";
import Error from "./components/Error.jsx";
import "./App.css";
import Destinations from "./components/Detinations/Destinations.jsx";
import StateDestination from "./components/Detinations/State/StateDestination.jsx";
import Layout from "./Layout.jsx";
import Plan from "./components/Plan/Plan.jsx";
import Search from "./components/Search/Search.jsx";
import AttractionDetail from "./components/Detinations/AttractionDetail.jsx";

function App() {
  const user = useSelector((state) => state.user);

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
        <Route
          path="/register"
          element={
            user && user.expire_time > new Date().getTime() ? (
              <Navigate to="/" />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/login"
          element={
            user && user.expire_time > new Date().getTime() ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/user/profile"
          element={
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <UserProfile />
              </Layout>
            )
          }
        />
        <Route
          path="/user/trips"
          element={
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <UserTrips />
              </Layout>
            )
          }
        />
        <Route
          path="/user/collections"
          element={
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <UserCollections />
              </Layout>
            )
          }
        />
        <Route
          path="/user/likes"
          element={
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <UserLikes />
              </Layout>
            )
          }
        />
        {/* <Route
          path="/user/comments"
          element={
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <UserComments />
              </Layout>
            )
          }
        /> */}
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
            !user || user.expire_time < new Date().getTime() ? (
              <Navigate to="/login" />
            ) : (
              <Layout>
                <Plan />
              </Layout>
            )
          }
        />
        {/* Search */}
        <Route
          path="/search/:searchKey?"
          element={
            <Layout>
              <Search />
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
