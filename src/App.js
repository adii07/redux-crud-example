import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const userList=useSelector((state)=>state.users.value)
  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder='Name'></input>
        <input type="text" placeholder='Username'></input>
        <button>Add User</button>
      </div>

      <div className='displayUsers'>

      </div>
    </div>
  );
}

export default App;
