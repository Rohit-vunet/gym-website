import React from 'react'
import './footer.css';
import Github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from '../../assets/linkedin.png'
import logo from "../../assets/logo.png"




const footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
    <div className='footer'>
        <div className='social-links'>
        <img src = {Github} alt = ""/>
        <img src = {instagram} alt = ""/>
        <img src = {linkedin} alt = ""/>
        </div>
    </div>

    <div className='logo-f'>
        < img src = {logo} alt=""/>
    </div>




      
    </div>
  )
}

export default footer
