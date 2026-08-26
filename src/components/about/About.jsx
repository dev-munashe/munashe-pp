import React from 'react'
import './about.css'
import Me from '../../assets/munashe.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt='me'/>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years of working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>I am a full-stack developer who enjoys turning ideas into clean, useful digital products. 
            Over the past four years, I have built and contributed to web applications, portfolio sites, 
            business tools, and client-facing projects while growing across React, JavaScript, C#, .NET, 
            databases, APIs, and modern frontend design. I care about writing practical software that is 
            easy to use, dependable, and clear. I am still learning every day, but I now bring real project 
            experience, stronger engineering habits, and the confidence to solve problems from design 
            through delivery.
            </p>

            <a href='#contact' className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About