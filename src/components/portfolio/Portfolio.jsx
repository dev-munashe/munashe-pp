import React from 'react'
import './portfolio.css'

const projects = [
  {
    title: 'ATS Insight',
    type: 'Full-stack AI tool',
    description: 'Resume analysis tool that helps job seekers understand ATS fit, improve keywords, and get practical suggestions before applying.',
    stack: ['React', '.NET API', 'AI scoring', 'Vercel'],
    github: 'https://github.com/dev-munashe/ats-insight-frontend.git',
    demo: 'https://ats-insight-frontend.vercel.app/',
  },
  {
    title: 'MentorLink',
    type: 'Hackathon product - 2nd place',
    description: 'Automated mentor/mentee matching system built to reduce manual pairing work and create better program coordination.',
    stack: ['TypeScript', 'React', 'Matching logic', 'AI-assisted build'],
    github: 'https://github.com/dev-munashe/Team_Speed_MentorLink_Sln.git',
    demo: 'https://mentor-link-sln.vercel.app/',
  },
  {
    title: 'Books Library',
    type: 'Authenticated web app',
    description: 'Library management app with authentication, protected flows, and a full-stack structure for managing book data.',
    stack: ['React', 'ASP.NET Core', 'Auth', 'Database'],
    github: 'https://github.com/dev-munashe/book-lib.git',
    demo: 'https://book-lib-2uae.vercel.app/',
  },
  {
    title: 'Load Testing Dashboard',
    type: 'Data visualization tool',
    description: 'Performance-testing interface with interactive charts and clear reporting for load-test results.',
    stack: ['React', 'Charts', 'Analytics UI'],
    github: 'https://github.com/dev-munashe/Load-Testing.git',
    demo: 'https://load-testing.vercel.app/',
  },
  {
    title: 'Time Tracking App',
    type: 'Productivity app',
    description: 'Task and time-tracking application focused on simple workflows, project organization, and daily productivity.',
    stack: ['React', 'State management', 'Responsive UI'],
    github: 'https://github.com/dev-munashe/TT-tracking.git',
    demo: 'https://tt-tracking.vercel.app/',
  },
  {
    title: 'JavaScript Games',
    type: 'Interactive learning work',
    description: 'Earlier DOM and game-logic projects, including Drum Kit and Simon Game, kept as visible evidence of the learning path.',
    stack: ['JavaScript', 'DOM events', 'Game logic'],
    github: 'https://github.com/dev-munashe/Simon-Game.git',
    demo: 'https://dev-munashe.github.io/Simon-Game/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Selected work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {projects.map((project) => (
          <article className='portfolio__item' key={project.title}>
            <p className='portfolio__type'>{project.type}</p>
            <h3>{project.title}</h3>
            <p className='portfolio__item-description'>{project.description}</p>
            <div className='portfolio__stack'>
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className='portfolio__item-cta'>
              <a href={project.github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio