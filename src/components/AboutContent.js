import"./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import Sphere from "./Sphere"



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
         <h1>Who Am I?</h1>
         <p>I am a developer working on machine learning, web-development and somewhat on app-development. Currently, am on DevOps and Cloud Computing. Learning new things comes in my hobby and enthusiastic determination is my adoptations.</p>
         <Link to="/contact">
         <button className="btn">Contact</button>
         </Link>
        </div>
        < div className="right">
        
         <Sphere />
         
         
        
        
        </div>
        </div>
    
  )
}

export default AboutContent