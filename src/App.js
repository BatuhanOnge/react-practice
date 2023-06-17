import './App.css';
import Header from "./Header";
import {useState, useEffect} from "react";

function App() {
  const [name, setName] = useState("Guest");
  const [posts, setPosts] = useState([]);

  //Effect hooks

  useEffect(function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  function login(){
    setName("Batuhan");
  }

  return (
    <div className="App">
      <Header title={name} />
      <p>Welcome to my blog</p>
      <button onClick={login}>Log in</button>
      <ul>
        {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
