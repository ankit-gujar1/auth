import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user}=useAuthContext();

  const navigate=useNavigate();

  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[user])

  return (
    <div>
      <Navbar/>
      {user && <h1>Sup {user.userName}</h1>}
    </div>
  );
}

export default App;
