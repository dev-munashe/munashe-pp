import React from 'react'
import './service.css'
import {BiCheck}  from 'react-icons/bi'

const services = [
  {
    title: 'Full-stack web apps',
    items: ['Responsive React interfaces', 'API-backed workflows', 'Authentication and database features', 'Deployment-ready implementation'],
  },
  {
    title: 'Frontend and UI polish',
    items: ['Clean layouts and component structure', 'Mobile-first responsive design', 'Dashboard and form experiences', 'Usability-focused iteration'],
  },
  {
    title: 'Project support',
    items: ['Debugging and feature fixes', 'Documentation and handover notes', 'Portfolio and business websites', 'Technical learning with delivery momentum'],
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service) => (
          <article className='service' key={service.title}>
            <div className='service__head'>
              <h3>{service.title}</h3>
            </div>

            <ul className='service__list'>
              {service.items.map((item) => (
                <li key={item}>
                  <BiCheck className='service__icon'/>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services