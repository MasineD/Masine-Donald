import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: 'MzansiBuilds',
      description: 'Project management platform for developers. It allows users to keep track of their projects, view what projects other users are working on, and ask for collaboration.',
      image: '/images/mzansiBuilds.jpg',
      technologies: ["React", "Tailwindcss", "Javascript", "Node.js", "Express.js", "PostgreSQL", "Vitest", "Postman"],
      link: "https://mzansi-builds-v2s9.onrender.com/",
      github: "https://github.com/MasineD/MzansiBuilds",
      role: "Full Stack developer"
    }
  ]

  const currentProject = projects[currentIndex]
  const projectNumber = (currentIndex + 1).toString().padStart(2, '0')

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id='projects' className='relative overflow-hidden mt-30 pb-2'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl -translate-y-1/2'/>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>Projects</span>
          </div>
          <h2 className='font-serif italic animate-fade-in animation-delay-100 text-white'>
            My recent work, from 
            <span className='font-serif italic font-normal text-secondary-foreground'> complex web applications </span>
            to
            <span className='font-serif italic font-normal text-secondary-foreground'> innovative solutions.</span>
          </h2>
        </div>

        {/* Single Project Layout - Inspired by attached image */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-transparent overflow-hidden animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Right column - Content */}
              <div className="p-6 space-y-4">
                {/* Number and Title */}
                <div className="space-y-1">
                  <span className="text-5xl font-bold text-primary/40">{projectNumber}</span>
                  <h3 className="text-2xl font-semibold text-white">{currentProject.title}</h3>
                </div>

                {/* Role and Category */}
                <div className="space-y-1">
                  <p className="text-sm text-primary">{currentProject.role}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2 pb-2 border-b">
                  {currentProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link to={currentProject.github} target='_blank' className="text-primary text-sm underline hover:scale-110 transition-all duration-300"><FaGithub size={23}/></Link>
                  <Link to={currentProject.link} target='_blank' className="text-primary text-sm underline hover:scale-110 transition-all duration-300">< ArrowUpRight size={30}/></Link>
                </div>
              </div>
              {/* Left column - Image */}
              <div className="arrows-Image flex flex-col">
                <div className="relative overflow-hidden h-full min-h-[300px]">
                  <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            {/* Navigation Arrows at the bottom */}
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={goToPrevious}
                className="p-3 hover:scale-120 hover:text-secondary-foreground transition-all duration-300 cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft size={20}/>
              </button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {projects.length}
              </span>
              <button
                onClick={goToNext}
                className="p-3 hover:scale-120 hover:text-secondary-foreground transition-all duration-300 cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
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
