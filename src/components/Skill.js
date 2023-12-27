 import React from 'react'
 import "./WorkCardStyles.css"
 import SkillCard from "./SkillCard";
 import SkillCardData from './SkillCardData';
 import AOS from "aos";
 import "aos/dist/aos.css"

 
 const Skill = () => {
    AOS.init();
    return (
      <div className="work-container">
          <h1 className="project-heading">Skills</h1>
          < div  data-aos="fade-up" className="project-container">
            {SkillCardData.map((val,ind) => {
              return(
                <SkillCard 
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  text1={val.text1}
                  text2={val.text2}
                  />
              )
            })} 
            
          </div>
      </div>
    );
  };
  
 
 export default Skill;