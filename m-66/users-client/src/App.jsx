import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = async() => { 
      let response = await fetch(`http://localhost:3000/users`);
      let data = await response.json()
      setUsers(data);   
    }
    userData()
    
  },[])
  return (
    <>
      <div>
        <h1 className="text-3xl text-red-600">users data -: {users.length}</h1>
        <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
