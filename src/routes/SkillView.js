import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Skill from '../components/Skill'

const SkillView = () => {
  return (
    <div>
        <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Skills"/>
      <Skill/>
      <Footer/>
    </div>
  )
}

export default SkillView