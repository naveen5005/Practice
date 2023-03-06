import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Persons from './Components/Persons';
import NavBar from './Components/NavBar';
import CreateUser from './Components/CreateUser';
import NoMacth from './Components/NoMacth';
import DeleteUser from './Components/DeleteUser';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Persons/>}/>
            <Route path='/create' element={<CreateUser/>}/>
            <Route path='/delete/:id' element={<DeleteUser/>}/>
            <Route path='*' element={<NoMacth/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
