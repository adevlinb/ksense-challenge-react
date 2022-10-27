import './App.css';
import { useEffect, useState } from "react";
import DisplayPosts from "./components/DisplayPosts";
import DisplayUsers from "./components/DisplayUsers";

function App() {

  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let userResults = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json);
      setUsers(userResults)
    }
    getUsers();
  }, []);

  async function getPosts(userId) {
    let postResults = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => json);
    setPosts(postResults)
      console.log(postResults, "postresults")
  }

  let names = users.map((user, idx) => (
    <DisplayUsers user={user} users={users} key={idx} index={idx} setSelectedUser={setSelectedUser} getPosts={getPosts}/>
  ))

  let userPosts = posts.map((post, idx) => (
    <DisplayPosts post={post} key={idx} />
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
          {posts.length === 0 ? 
          <h3 className="title" id="selectedUser"> Please select a user on the left.</h3>
          :
          <>
          <h2 className="title" id="selectedUser">{selectedUser.name}'s posts:</h2>
          <div id="posts">{userPosts}</div>
          </>
        }
        </div>
      </main>
    </>
  );
}

export default App;
