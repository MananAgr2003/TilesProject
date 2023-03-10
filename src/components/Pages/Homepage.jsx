import React  ,{ useEffect} from "react";



import Caraousel from "./Homepage/Caraousel";
import AboutUs from "./Homepage/AboutUs";
import Brands from "./Homepage/Brands";
import TilesHover from "./Homepage/TilesHover";
import ProductList from "./Homepage/ProductList";
import GptVisualizer from "./Homepage/GptVisualizer";
import GptVisualizerMob from "./Homepage/Visualizermob";

import Categories from "./Homepage/Categories";
import FadeInWrapper from "../AnimationWrapper/FadeIn";
import FadeInBottom from "../AnimationWrapper/FadeBottom";
import MovingLine from "../cards/line";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  
  export default function Homepage() {
    useEffect(() => {
        scrollToTop();
      }, []);

      const theme = useTheme();
      const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
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


      {!isScreenSmall ? ( <> <FadeInBottom>
        <ProductList></ProductList>
      </FadeInBottom></> ) : ( <ProductList></ProductList>)}

     

      {!isScreenSmall ? (  <GptVisualizer></GptVisualizer>) : (<GptVisualizerMob></GptVisualizerMob>)}
    

      {!isScreenSmall ? ( <> <FadeInBottom>
        <Categories></Categories>
      </FadeInBottom></> ) : ( <Categories></Categories>)}

    

    </>
  );
}
