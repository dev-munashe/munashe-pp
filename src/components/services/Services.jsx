import React from 'react'
import './service.css'
import {BiCheck}  from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon'/>
              <p>User research and behavioral analysis</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Wireframing and interface structure design</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Interactive prototyping and usability testing</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Visual design with focus on branding consistency</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Information architecture and navigation design</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Interaction design and micro-animations</p>
            </li>

          </ul>
        </article>
           {/* End of UI/UX Design */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon'/>
              <p>Interactive web interfaces with HTML, CSS & JavaScript</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Responsive design for all devices and screen sizes</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Custom web applications for specific business needs</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Modern frameworks: React, Angular & ASP.NET Core</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Cross-browser compatibility testing</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>CMS integration: WordPress & Umbraco</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Third-party API integration and development</p>
            </li>
            
          </ul>
        </article>
        {/*End of Web Development */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon'/>
              <p>Engaging TikTok videos highlighting project features</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Compelling video narratives and strategic editing</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Application demos and interactive walkthroughs</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Technical concepts simplified for broader audiences</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Behind-the-scenes development process insights</p>
            </li>            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services