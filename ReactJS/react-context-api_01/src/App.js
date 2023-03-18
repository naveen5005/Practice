import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { useState } from 'react';
import { MyContextProvider } from './Components/MyContext';

function App() {
  const [users, setUsers] = useState(["naveen", "venky", "prasad"])

  return (
    <div className="App">
      <MyContextProvider value={users}>
        <Main />
      </MyContextProvider>
    </div>
  );
}

export default App;
