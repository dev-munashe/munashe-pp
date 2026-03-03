import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {/* Latest Projects - Full-Stack with AI */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop' alt="ATS Insight" />
          </div>
          <h3>ATS Insight – AI Resume Optimization Tool</h3>
          <p className='portfolio__item-description'>
            AI-powered ATS analysis tool with LLM-based resume scoring and improvement suggestions. 
            Built with ASP.NET Core + React, deployed via Vercel.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/ats-insight-frontend.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://ats-insight-frontend.vercel.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' alt="MentorLink" />
          </div>
          <h3>MentorLink – Mentor/Mentee Matching System 🏆 2nd Place</h3>
          <p className='portfolio__item-description'>
            Automated matching platform to eliminate manual pairing inefficiencies. 
            Rapidly prototyped using AI-assisted development. Hackathon winner.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/Team_Speed_MentorLink_Sln.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://mentor-link-sln.vercel.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        {/* Full-Stack Projects */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://imageio.forbes.com/specials-images/imageserve/63986034dfa1b6bcd37ab5e1/image-of-open-antique-book-on-wooden-table-with-glitter-overlay--the-best-business/960x0.jpg?format=jpg&width=960' alt="Books Library" />
          </div>
          <h3>Dynamic React Books Library with ASP.NET Core Authentication</h3>
          <p className='portfolio__item-description'>
            Full-stack library management system with secure authentication and authorization.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/book-lib.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://book-lib-2uae.vercel.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLo7YuUx_ZjvSWjDC3dISwoRASFGstFZV-QQ&usqp=CAU' alt="Load Testing" />
          </div>
          <h3>React Load Testing Application with Interactive Charts</h3>
          <p className='portfolio__item-description'>
            Performance testing tool with real-time data visualization and analytics.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/Load-Testing.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://load-testing.vercel.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://c.tadst.com/gfx/1200x630/fifth-avenue-new-york-clock-night.jpg?1' alt="Time Tracking" />
          </div>
          <h3>Intuitive React Time Tracking Application with Task Management</h3>
          <p className='portfolio__item-description'>
            Productivity tool for tracking time and managing tasks efficiently.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/TT-tracking.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://tt-tracking.vercel.app/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        {/* Interactive JavaScript Projects */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://schoolofrock.imgix.net/img/news-article-hero-750w/beginning-drums2-1645469645.jpg?auto=format' alt="Drum Kit" />
          </div>
          <h3>Engaging Vanilla JS Drum Kit for Musical Exploration</h3>
          <p className='portfolio__item-description'>
            Interactive drum kit application demonstrating DOM manipulation and event handling.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/Drum-Kit.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://dev-munashe.github.io/Drum-Kit/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://www.splashlearn.com/blog/wp-content/uploads/2022/09/best-concentration-games-for-kids-to-develop-super-focus-attention-skills.jpeg' alt="Simon Game" />
          </div>
          <h3>Captivating Vanilla JS Simon Game for Memory Challenge</h3>
          <p className='portfolio__item-description'>
            Classic memory game showcasing algorithm implementation and game logic.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/dev-munashe/Simon-Game.git" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://dev-munashe.github.io/Simon-Game/" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        {/* Design Work */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://positive.b-cdn.net/wp-content/uploads/life-coach.jpg' alt="Life Coaching Design" />
          </div>
          <h3>Inspiring Figma Design for Life Coaching Website</h3>
          <p className='portfolio__item-description'>
            Professional UI/UX design demonstrating user-centered design principles.
          </p>
          <div className='portfolio__item-cta'>
            <a href="https://www.figma.com/file/oH6i3s9cGRrFNsci5A9tzh/Talk-to-Tobo?type=design&node-id=254-201&t=f9NEMXmIz11Ckp1j-0" className='btn' target='_blank' rel="noopener noreferrer">Figma</a>
            <a href="https://www.figma.com/file/oH6i3s9cGRrFNsci5A9tzh/Talk-to-Tobo?type=design&node-id=254-201&t=f9NEMXmIz11Ckp1j-0" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio