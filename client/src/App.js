import './App.css';
import Landing from './Components/landing/Landing';
import Home from './Components/Home/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PokeCreate from './Components/PokeCreate/PokeCreate';
import PokeDetails from "./Components/PokeDetails/PokeDetails"
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route  path="/create" element={<PokeCreate/>}/>
      <Route  path="/home/:id" element={<PokeDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
