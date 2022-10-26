import './App.css';
import { useEffect, useState } from "react";
import DisplayPosts from "./components/DisplayUsers";
import DisplayUsers from "./components/DisplayUsers";

function App() {

  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let usersResults = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => users = json);
        setUsers(usersResults)
        setSelectedUser()
    }
    getUsers();
  }, []);

  let names = users.map((user, idx) => (
    <DisplayUsers user={user} users={users} key={idx} index={idx} setSelectedUser={setSelectedUser} />
  ))

  let userPosts = posts.map(post => (
    <DisplayPosts post={post}/>
  ))



  return (
    <>
      <h1>Ksense Technologies: DOM Code Challenge - REACT</h1>
      <main>
        <div>
          <h2 className="title">Users:</h2>
          <div id="users">{names}</div>
        </div>
        <div>
          <h2 className="title" id="selectedUser"></h2>
          <div id="posts">{userPosts}</div>
        </div>
      </main>
    </>
  );
}

export default App;
