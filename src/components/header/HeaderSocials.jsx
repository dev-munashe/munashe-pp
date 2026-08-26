import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/m-tanda/' target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
        <a href='https://github.com/dev-munashe' target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
        <a href='https://www.instagram.com/munashe_tanda/' target="_blank" rel="noreferrer" aria-label="Instagram"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials