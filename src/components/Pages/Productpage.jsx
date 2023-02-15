import React  ,{ useEffect} from "react";

import ProductDetailSection from './Productpage/Details';
import ProductDetailsText from './Productpage/DetailsText';

import Products from './Productpage/Products';
const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  
  function Productpage() {
    useEffect(() => {
        scrollToTop();
      },[]);
  return (
    <>

    <ProductDetailSection></ProductDetailSection>

    <ProductDetailsText></ProductDetailsText>
   
    <Products></Products>


    
    
    
    </>
  )
}

export default Productpage