import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8070/");
      const data = await response.json();
      setMessage(data.message)
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(()=>{
    fetchData()
  }, [])


  return (
    <>
      <h1>{ message }</h1>
    </>
  );
}

export default App;
