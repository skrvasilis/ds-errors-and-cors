import React from "react";

export default function App() {

const post = () =>{
  console.log('post')
  fetch('http://localhost:5000/postme',{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    }
})
}
  

  return (
    <div>
      <button onClick={post}>make a post call</button>
    </div>
  );
}
