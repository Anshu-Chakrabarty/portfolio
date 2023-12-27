import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from "../components/Work"
import Skill from '../components/Skill'
import Sphere from "../components/Sphere"



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Sphere/>
      <Skill/>
      <Work />
      <Footer />
    </div>
  )
}

export default Home