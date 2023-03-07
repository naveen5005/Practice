import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from './Components/Users';
import Layout from './Components/Layout';
import NavBar from './Components/NavBar';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import UpdateUser from './Components/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Users />} />
            <Route path='/create' element={<CreateUser/>}/>
            <Route path='/delete/:id' element={<DeleteUser/>}/>
            <Route path='/edit/:id' element={<UpdateUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
