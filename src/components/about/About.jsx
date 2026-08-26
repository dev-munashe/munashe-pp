import React from 'react'
import './about.css'
import Me from '../../assets/munashe.png'
import {FaGraduationCap} from 'react-icons/fa'
import {FiMapPin} from 'react-icons/fi'
import {VscTools} from 'react-icons/vsc'

const cards = [
  { icon: <FiMapPin />, title: 'Started in the Lowveld', detail: 'Rural Zimbabwe shaped my persistence and independence.' },
  { icon: <VscTools />, title: 'Before software', detail: 'Worked as a surgery assistant while learning development at night.' },
  { icon: <FaGraduationCap />, title: 'Still studying', detail: 'Computer Science at University of the People, alongside real product work.' },
]

const strengths = [
  'I learned to build without a ready-made tech network, so I value resourcefulness and follow-through.',
  'Healthcare and field-work projects taught me to care about accuracy, records, and people using systems under pressure.',
  'Moving from self-study into shipped software gave me a practical builder mindset: learn fast, ask clearly, deliver carefully.',
]

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__media">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt='Munashe Tandabantu' />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            {cards.map(({ icon, title, detail }) => (
              <article className="about__card" key={title}>
                <div className='about__icon'>{icon}</div>
                <h5>{title}</h5>
                <small>{detail}</small>
              </article>
            ))}
          </div>

          <div className='about__copy'>
            <p>
              My path into software was not the straight one. I grew up in Zimbabwe&apos;s Lowveld,
              studied through schools where software was not an obvious future, then worked as a
              surgery assistant before teaching myself web development and C# after hours.
            </p>
            <p>
              That background is a big part of how I build now. I am drawn to practical systems:
              dashboards, reporting workflows, client tools, student support, and software that makes
              information easier to act on. I like the point where human needs become product decisions.
            </p>
            <p>
              Outside the code, I am still very much in the learning chapter too: studying Computer Science,
              sharing parts of that journey publicly, and staying close to the kind of work that helps other
              people see technology as something they can enter, not just consume.
            </p>
          </div>

          <div className='about__strengths'>
            {strengths.map((item) => <span key={item}>{item}</span>)}
          </div>

          <a href='#contact' className='btn btn-primary'>Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
