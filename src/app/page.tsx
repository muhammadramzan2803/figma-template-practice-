

import Herro from "./components/herro";
import FreshSales from "./components/freshSales";
import Category from "./components/category";
import Products from "./components/product";
import Music from "./components/music";
import Explore from "./components/explore";
import Futured from "./components/fetured";
import Freedelvry from "./components/free";


export default function Home() {
    return(
      <div >
        
         <Herro/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
      </div>
    )
}