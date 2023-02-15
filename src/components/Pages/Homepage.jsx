import React from "react";



import Caraousel from "./Homepage/Caraousel";
import AboutUs from "./Homepage/AboutUs";
import Brands from "./Homepage/Brands";
import TilesHover from "./Homepage/TilesHover";
import ProductList from "./Homepage/ProductList";
import GptVisualizer from "./Homepage/GptVisualizer";

import Categories from "./Homepage/Categories";
import FadeInWrapper from "../AnimationWrapper/FadeIn";
import FadeInBottom from "../AnimationWrapper/FadeBottom";

export default function Homepage() {
  return (
    <>
      <Caraousel></Caraousel>
      {/* <GptProductPage></GptProductPage> */}

      <FadeInWrapper>
        {" "}
        <AboutUs></AboutUs>
      </FadeInWrapper>

      <Brands></Brands>

      <TilesHover></TilesHover>

      <FadeInBottom>
        <ProductList></ProductList>
      </FadeInBottom>
      <GptVisualizer></GptVisualizer>

      <FadeInBottom>
        <Categories></Categories>
      </FadeInBottom>
    </>
  );
}
