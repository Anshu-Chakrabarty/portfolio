import "./WorkCardStyles.css"
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import AOS from "aos";
import "aos/dist/aos.css"

const Work = () => {
  AOS.init();
  return (
    <div className="work-container">
        <h1 className="project-heading">Some of My Projects</h1>
        < div  data-aos="zoom-in" className="project-container">
          {WorkCardData.map((val,ind) => {
            return(
              <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
          })} 
          
        </div>
    </div>
  );
};

export default Work