import { Route, Routes } from "react-router-dom";
import Register from "./components/User/Register.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/User/Login.jsx";
import Error from "./components/Error.jsx";
import "./App.css";

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get("/api/destination");
  //     console.log(data.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<Error messageProp="Bad Input" statusCodeProp={400} />}
        />
      </Routes>
    </>
  );
}

export default App;
