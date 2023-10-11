import './App.css';
import { useState,useEffect } from 'react';
import FetchData from './components/DataFetch/FetchData';
import github from './img/github.png'

function App() {
  const [username, setUsername] = useState("");
  const [name,setName]=useState("durgachikkala-programmer");
  return (
    <div className="App">
      <div>
          <div className='input'>
            <div className='header'>
              <img src={github} alt="github"/>
              <h1>GitHub</h1>
            </div>
            <div className="wrapper">
              <input className="search" type="text" id="search" placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <input className="submit" type="submit" onClick={()=>{setName(username)}} value="submit" />
	          </div>
            <p>get the details by just entering the username</p>
          </div>
      </div>
      <div className='info'>
         <FetchData url={`https://api.github.com/users/${name}`}/>
      </div>
    </div>
  );
}

export default App;
