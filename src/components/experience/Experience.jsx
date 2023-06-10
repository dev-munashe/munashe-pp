import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>React JS</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>CSHARP</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>ASP.NET CORE</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>Chart Js</h4>
              <small>Intermediate</small>
              </div>
            </article>

          </div>  
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>NODE JS</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>MONGODB</h4>
              <small>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>MySQL</h4>
              <small>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>SQL</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
              <h4>ASP.NET CORE MVC</h4>
              <small>Intermediate</small>
              </div>
            </article>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience