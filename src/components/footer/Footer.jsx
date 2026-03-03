import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiLinkedin, FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer_logo'>Munashe</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.linkedin.com/in/m-tanda/"><FiLinkedin/></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100086319262218"><FaFacebookF/></a>
        <a target="_blank" href="https://www.instagram.com/arcdaemon101/"><FiInstagram/></a>
      </div>git 

      <div className="footer__copyright">
        <small>&copy; Munashe Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer