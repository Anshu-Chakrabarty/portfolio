import "./FooterStyles.css"
import { Link } from "react-router-dom"

import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                < div className="location">
                   <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Kolkata</p>
                        <p>700125</p>
                        </div>
 
                </div>
                <div className="phone">
               <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />  
                7477800284</h4>
                </div>
                <div className="email">
               <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />  
                anshuchakrabarty03@gmail.com</h4>
                </div>
                </div>
                <div className="right">
                    <h4>About</h4>
                    <p>
                        This is me, Anshu Chakrabarty, a student. 
                        I work on machine laearning, web development and app development.
                         Currently am indulged in DevOps and Cloud Computing
                         </p>
                    <div className="social">
                   <Link to="https://www.facebook.com/anshu.chakrabarty.3/" ><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} /></Link>
                   <Link to="https://twitter.com/AnshuChak3"> <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} /></Link>
                   <Link to="https://www.linkedin.com/in/anshu-chakrabarty-54b77524a/"> <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></Link>
                    <Link to="https://www.instagram.com/anshu_c_k_/">
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </Link>
                    </div>
            </div>
        </div>
        </div>
    

  )
}

export default Footer