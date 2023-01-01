import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Browse from "../components/Browse";
import { dreamersData, newSlidesData } from "../components/Data";
import Explore from "../components/Explore";
import ImageSliderSection from "../components/ImageSliderSection";
import Trending from "../components/Trending";


const Home = () =>{

  const [done, setDone] = useState(false);

  if(!done){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      setDone(true);
  }
    return(
        <main>
        <Explore/>
        <Trending/>
        <ImageSliderSection sectionclass={"newnotable"} heading={"Notable charitable organisation"} data={newSlidesData}/>
        <ImageSliderSection sectionclass={"dreamers"} heading={"Popular Community Collections"} data={dreamersData}/>
        <Browse/>
      </main>
    )
}

export default Home;