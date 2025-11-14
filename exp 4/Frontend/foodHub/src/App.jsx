import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Food from './pages/Food';
import Shop from './pages/Shop';
import Map from './pages/Map';

const App = () => {
  return (
      <div className="flex flex-col min-h-screen">

        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/shop" element = {<Shop/>}/>
          <Route path = "/map" element = {<Map/>}/>
          <Route path = "/food" element = {<Food/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
  );
};

export default App;