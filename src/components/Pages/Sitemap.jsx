import React , {useEffect} from 'react'
import Banner from './Sitemap/banner'
import Largecategory from './Sitemap/Largecategory'
import Largecategory2 from './Sitemap/Largecategory2'
import Largecategory3 from './Sitemap/Largecategory3'
import Sc1 from './Sitemap/Sc.jsx/Sc1'
import Sc2 from './Sitemap/Sc.jsx/Sc2'
import Sc3 from './Sitemap/Sc.jsx/Sc3'
import Sc4 from './Sitemap/Sc.jsx/Sc4'
import Sc5 from './Sitemap/Sc.jsx/Sc5'
import Sc6 from './Sitemap/Sc.jsx/Sc6'
import Sc7 from './Sitemap/Sc.jsx/Sc7'
import Sc8 from './Sitemap/Sc.jsx/Sc8'
import Smallcategory from './Sitemap/Smallcategory'

const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

export default function Sitemap() {

    useEffect(() => {
        scrollToTop();
      }, []);
  return (
    <>
    <Banner></Banner>
    <Largecategory></Largecategory>

    <div  style={{
        display:"flex",
        flexDirection:"horizontal",
      
    }}>
    <Sc1></Sc1>
    <Sc2></Sc2>
    <Sc3></Sc3>
    <Sc4></Sc4>
    </div>

    <Largecategory2></Largecategory2>

    <div style={{
        display:"flex",
        flexDirection:"horizontal"
    }}>
    <Sc5></Sc5>
    <Sc6></Sc6>
   
    <Sc7></Sc7>
    <Sc8></Sc8>
    </div>

    <Largecategory3></Largecategory3>




    </>
  )
}
