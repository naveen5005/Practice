import './App.css';
import { AuthProvider } from './Components/Auth';
import LoginComp from './Components/LoginComp';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import ReqAuth from './Components/ReqAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginComp />} />
            <Route path='/products' element={
              <ReqAuth>
                <Products />
              </ReqAuth>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
