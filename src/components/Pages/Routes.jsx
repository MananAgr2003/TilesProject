import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Productlist from './Productlist';
import Product from './Productpage';
import Aboutus from './Aboutus';
import Sitemap from './Sitemap';
import Catalouge from './Catalouge';



const RoutesFunc = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>}  />
      <Route path="/product" element={<Product/>} />
      <Route path="/productlist" element={<Productlist/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/sitemap" element={<Sitemap/>} />
      <Route path="/catalouge" element={<Catalouge/>} />
    </Routes>
  );
};

export default RoutesFunc;