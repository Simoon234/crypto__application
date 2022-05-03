import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import {News} from "./pages/News";
import {CryptoDetails} from "./pages/Crypto";

export const App = () => {
  return (
      <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
          <div className='main'>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/crypto/:id' element={<CryptoDetails/>}/>
              </Routes>
              <div className='footer'>
                  <Footer/>
              </div>
          </div>
      </div>
  );
}

