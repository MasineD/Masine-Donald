import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "https://github.com/MasineD/MzansiBuilds"
    },
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "#"
    },
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "#"
    },
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "#"
    },
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "#"
    },
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '../images/mzansibuilds.png',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest","Postman"],
      link: "#",
      github: "#"
    }
  ]
  return (
    <section id='projects' className='relative overflow-hidden mb-2'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl -translate-y-1/2'/>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="leftColumn space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>Projects</span>
          </div>
          <h2 className='flex items-center justify-center font-serif italic animate-fade-in animation-delay-100 text-white'>
            My recent work, from 
           <span className='font-serif italic font-normal text-secondary-foreground'> complex web applications </span>
           to
           <span className='font-serif italic font-normal text-secondary-foreground'> innovative solutions.</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map((p,index)=>(
            <div key={index} className='bg-secondary rounded-lg animate-fade-in' style={{animationDelay:`${(index +1)*100}ms `}}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={p.image} alt={p.title} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' />
              </div>
              {/* Project content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className='text-xl font-semibold hover:text-primary hover:scale-105'>{p.title}</h3>
                </div>
                <p className='text-muted-foreground text-sm '>{p.description}</p>
                <div className="projectLinks flex flex-wrap items-center justify-between">
                  <p>Github: <Link to={p.github} target='_blank' className='text-primary text-sm underline'>{p.github}</Link></p>
                  <p>Project link: <Link to={p.link} target='_blank' className='text-primary text-sm underline'>{p.link}</Link></p>
                </div>
                <div className="technologies flex flex-wrap gap-2">
                  {p.technologies.map((t, tIndex)=>(
                    <span key={tIndex} className='px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:scale-105 hover:text-primary transition-all duration-300'>{t}</span>
                  ))
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button to view all project */}
        <div className="flex items-center justify-center gap-2 bg-secondary border border-primary rounded-full py-2 hover:scale-105 cursor-pointer text-center mt-12 animate-fade-in animation-delay-500">
          <Link to='https://github.com/MasineD' target='_blank'>View all</Link><ArrowUpRight />
        </div>
      </div>
    </section>
  )
}

export default Projects
