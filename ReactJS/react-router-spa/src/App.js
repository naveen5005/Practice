import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import NoMatch from './Components/NoMatch';
import Actions from './Components/Actions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/products' element ={<Products/>}/>
          <Route path='/actions' element = {<Actions/>}/>
          <Route path='*' element = {<NoMatch/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
