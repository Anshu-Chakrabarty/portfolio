import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Skill from '../components/Skill'

const SkillView = () => {
  return (
    <div>
        <Navbar/>
      <HeroImg2 heading="Skills" text="Still Working Hard To Learn More. Sky is the Limit."/>
      <Skill/>
      <Footer/>
    </div>
  )
}

export default SkillView;