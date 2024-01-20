import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/destination");
      console.log(data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}

export default App;
