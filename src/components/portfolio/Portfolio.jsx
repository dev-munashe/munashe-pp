import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLo7YuUx_ZjvSWjDC3dISwoRASFGstFZV-QQ&usqp=CAU' alt="pot1" />
          </div>
          <h3>React Load Testing Application with Interactive Charts</h3>
          <div className='portfolio__item-cta'>
          <a target='_blank' href="https://github.com/dev-munashe/Load-Testing.git" className='btn'>Github</a>
          <a target='_blank' href="https://load-testing.vercel.app/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://imageio.forbes.com/specials-images/imageserve/63986034dfa1b6bcd37ab5e1/image-of-open-antique-book-on-wooden-table-with-glitter-overlay--the-best-business/960x0.jpg?format=jpg&width=960' alt="pot1" />
          </div>
          <h3> Dynamic React Books Library with ASP.NET Core Authentication</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/dev-munashe/book-lib.git" className='btn' target='_blank'>Github</a>
          <a href="https://book-lib-2uae.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://c.tadst.com/gfx/1200x630/fifth-avenue-new-york-clock-night.jpg?1' alt="pot1" />
          </div>
          <h3>Intuitive React Time Tracking Application with Task Management</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/dev-munashe/TT-tracking.git" className='btn' target='_blank'>Github</a>
          <a href="https://tt-tracking.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://schoolofrock.imgix.net/img/news-article-hero-750w/beginning-drums2-1645469645.jpg?auto=format' alt="pot1" />
          </div>
          <h3>Engaging Vanilla JS Drum Kit for Musical Exploration</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/dev-munashe/Drum-Kit.git" className='btn' target='_blank'>Github</a>
          <a href="https://dev-munashe.github.io/Drum-Kit/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://www.splashlearn.com/blog/wp-content/uploads/2022/09/best-concentration-games-for-kids-to-develop-super-focus-attention-skills.jpeg' alt="pot1" />
          </div>
          <h3>Captivating Vanilla JS Simon Game for Memory Challenge</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/dev-munashe/Simon-Game.git" className='btn' target='_blank'>Github</a>
          <a href="https://dev-munashe.github.io/Simon-Game/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='https://positive.b-cdn.net/wp-content/uploads/life-coach.jpg' alt="pot1" />
          </div>
          <h3>Inspiring Figma Design for Life Coaching Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://www.figma.com/file/oH6i3s9cGRrFNsci5A9tzh/Talk-to-Tobo?type=design&node-id=254-201&t=f9NEMXmIz11Ckp1j-0" className='btn' target='_blank'>Figma</a>
          <a href="https://www.figma.com/file/oH6i3s9cGRrFNsci5A9tzh/Talk-to-Tobo?type=design&node-id=254-201&t=f9NEMXmIz11Ckp1j-0" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio