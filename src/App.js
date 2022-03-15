import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from './features/Users';
function App() {
  const userList=useSelector((state)=>state.users.value);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder='Name'></input>
        <input type="text" placeholder='Username'></input>
        <button onChange={(e)=>{}} >Add User</button>
      </div>

      <div className='displayUsers'>
        {userList.map((user,id)=>{
          return (
            <div key={id}>
              <h1 >{user.name}</h1>
              <h1>{user.username}</h1>
            </div>

          )
        })}
      </div>
    </div>
  );
}

export default App;
