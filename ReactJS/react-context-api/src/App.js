import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  const [users,setUsers] = useState(["naveen","kiran","venky"])
  return (
    <div className="App">
      <Main users ={users}/>
    </div>
  );
}

export default App;
