import React  ,{useEffect} from 'react'
import Banner from './Catalouge/banner'
import Gridtiles from "./Catalouge/grid"

const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

export default function Catalouge() {
    useEffect(() => {
        scrollToTop();
      }, []);
  return (
    <>

    <Banner></Banner>
    <Gridtiles></Gridtiles>
    </>
  )
}
