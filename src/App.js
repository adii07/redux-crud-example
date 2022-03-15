import './App.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addUser ,deleteUser} from './features/Users';
function App() {
  const userList=useSelector((state)=>state.users.value);
  const dispatch=useDispatch();
  const[name,setName]=useState("");
  const[username,setUsername]=useState("");
  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} ></input>
        <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}></input>
        <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id+1,name,username}))}} >Add User</button>
      </div>

      <div className='displayUsers'>
        {userList.map((user,id)=>{
          return (
            <div key={id}>
              <h1 >{user.name}</h1>
              <h1>{user.username}</h1>
              <input placeholder='New Username' type="text" onChange={(e)=>setUsername(e.target.value)}/>
              <button>Update Username</button>
              <button onClick={()=>{dispatch(deleteUser({id:user.id}))}} >Delete User</button>
            </div>

          )
        })}
      </div>
    </div>
  );
}

export default App;
