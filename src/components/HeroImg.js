import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assests/bg_portfolio.jpg"
import { Link } from "react-router-dom"
import Text from "../components/Text"

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>I'M A </p>
        <h1>
          <Text/>
        </h1>
        <div>
            <Link to = "/project" className="btn ">PROJECTS</Link>
            <Link to = "/contact" className="btn btn-light">CONTACTS</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroImg