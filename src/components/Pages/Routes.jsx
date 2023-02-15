import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Product from './Productpage';


const RoutesFunc = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>}  />
      <Route path="/product" element={<Product/>} />
    </Routes>
  );
};

export default RoutesFunc;