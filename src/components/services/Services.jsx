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
              <p>Conducting thorough user research to understand the target audience, their needs, and behaviors.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p> Creating low-fidelity wireframes to outline the structure and layout of the user interface.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Developing interactive prototypes to test and validate user flows, interactions, and usability.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Crafting visually appealing user interfaces with a focus on aesthetics, branding, and consistency.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p> Organizing and structuring content to ensure intuitive navigation and efficient user journeys.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Defining and designing interactive elements and animations to enhance user engagement.</p>
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
              <p>Building interactive and user-friendly web interfaces using HTML, CSS, and JavaScript.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Creating websites that seamlessly adapt to different devices and screen sizes.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Developing tailor-made web applications to meet specific business needs and requirements.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Building modern, dynamic web applications using frameworks like React or Angular.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Ensuring your website functions correctly and consistently across different web browsers.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Integrating and customizing popular CMS platforms like WordPress or Umbraco.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p> Connecting web applications with third-party APIs.</p>
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
              <p>Creating engaging TikTok videos that highlight the features and functionality of my web development projects.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Crafting compelling narratives through video editing techniques to captivate viewers and generate interest in my projects.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Showcasing how users can interact with your applications or websites through captivating and concise videos.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Simplifying complex technical aspects of my projects into bite-sized and easily understandable videos.</p>
            </li>

            <li>
              <BiCheck className='service__icon'/>
              <p>Offering glimpses into my development process, sharing insights, and providing a unique perspective on my projects.</p>
            </li>            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services