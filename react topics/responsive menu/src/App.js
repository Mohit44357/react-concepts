import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [menuStatus,setMenuStatus,]=useState(false)
  return (
    <div className="App">
      <button className='micon' onClick={()=>setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
