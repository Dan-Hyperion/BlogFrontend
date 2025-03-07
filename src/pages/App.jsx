import { useEffect, useState } from "react";
import Nav from "../components/Nav";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://blogappbackend-qqg5.onrender.com/");
      const data = await response.json();
      setMessage(data.message);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <h1>{message}</h1>
    </>
  );
}

export default App;
