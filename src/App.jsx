import React, { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";

function App() {
  const [user,setuser]= useState([]);
  const formhandle =(data)=>{
     setuser([...user,data])
  }
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Cards user={user} />
      <Form formhandle={formhandle} />
    </div>
  );
}

export default App;
