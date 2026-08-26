import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const groups = [
  {
    title: 'Frontend & Product UI',
    summary: 'Product screens, dashboards, forms, and user flows that are clear enough for real people to use.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Blazor', 'Figma'],
  },
  {
    title: 'Backend, APIs & Data',
    summary: 'API-driven workflows, authentication, data models, webhooks, and database-backed product logic.',
    skills: ['C#', 'ASP.NET Core', 'Node.js', 'REST APIs', 'tRPC', 'PostgreSQL', 'SQL Server', 'Supabase'],
  },
  {
    title: 'AI & Workflow Systems',
    summary: 'AI-assisted products, document workflows, semantic search, and operational automation.',
    skills: ['OpenAI APIs', 'LangChain', 'RAG pipelines', 'Embeddings', 'Vector search', 'PDF/Excel workflows', 'Twilio WhatsApp', 'ATS logic'],
  },
  {
    title: 'Mobile, Cloud & Delivery',
    summary: 'The shipping layer: mobile releases, cloud functions, CI/CD, testing, and production support.',
    skills: ['Flutter', 'Dart', 'Firebase', 'AWS Lambda', 'AWS S3', 'Azure Pipelines', 'Vercel', 'GitHub'],
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>How I build</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        {groups.map((group) => (
          <article className='experience__group' key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.summary}</p>
            <div className="experience__content">
              {group.skills.map((skill) => (
                <div className='experience__details' key={skill}>
                  <BsPatchCheckFill className='experience__icon'/>
                  <h4>{skill}</h4>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
