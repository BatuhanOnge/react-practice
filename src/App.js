import './App.css';
import Header from "./Header";
import {useState} from "react";

function App() {
  const [name, setName] = useState("Guest");

  function login(){
    setName("Batuhan");
  }

  return (
    <div className="App">
      <Header title={name} />
      <p>Welcome to my blog</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
