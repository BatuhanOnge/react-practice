import './App.css';
import Header from "./Header";

function App() {
  let name = "Guest"

  function login(){
    name = "Batuhan"; 
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
