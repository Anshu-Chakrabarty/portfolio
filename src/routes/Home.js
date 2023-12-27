import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from "../components/Work"
import Skill from '../components/Skill'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Skill />
      <Work />
      <Footer />
    </div>
  )
}

export default Home