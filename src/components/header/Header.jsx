import React from 'react'
import './header.css'
import tech from '../../assets/muna.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const highlights = [
  '4+ years in software',
  'Full-stack product work',
  'React + .NET + data systems',
]

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <div className='hero__copy'>
          <p className='hero__eyebrow'>Full-stack developer</p>
          <h1>Munashe Tandabantu</h1>
          <p className='hero__lead'>
            I build clean, useful web products across React, JavaScript, C#, .NET,
            APIs, databases, and frontend design. My work has grown from starter
            projects into real tools, client-facing sites, and product experiments
            that solve practical problems.
          </p>
          <div className='hero__highlights'>
            {highlights.map((item) => <span key={item}>{item}</span>)}
          </div>
          <CTA />
        </div>

        <div className='hero__visual'>
          <div className='me'>
            <img src={tech} alt='Munashe Tandabantu' />
          </div>
          <div className='hero__note'>
            <span>Current focus</span>
            <strong>building dependable product interfaces, API-backed workflows, and tools that real users can trust.</strong>
          </div>
        </div>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
