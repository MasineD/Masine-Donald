import React from 'react'

const Experience = () => {
  const experiences = [
    {
      period: "April 2022",
      role: "Full Stack developer",
      company: "DerivCo",
      event: 'mini hackathon',
      description: "Developing a fullstack project management application for developers",
      technologies: ["React","TailwindCSS","Node.js", "Express.js","PostgreSQL"],
      current: true
    },
    {
      period: "April 2022",
      role: "Full Stack developer",
      company: "DerivCo",
      event: 'mini hackathon',
      description: "Developing a fullstack project management application for developers",
      technologies: ["React","TailwindCSS","Node.js", "Express.js","PostgreSQL"],
      current: false
    },
    {
      period: "April 2022",
      role: "Full Stack developer",
      company: "DerivCo",
      event: 'mini hackathon',
      description: "Developing a fullstack project management application for developers",
      technologies: ["React","TailwindCSS","Node.js", "Express.js","PostgreSQL"],
      current: false
    },
    {
      period: "April 2022",
      role: "Full Stack developer",
      company: "DerivCo",
      event: 'mini hackathon',
      description: "Developing a fullstack project management application for developers",
      technologies: ["React","TailwindCSS","Node.js", "Express.js","PostgreSQL"],
      current: false
    },
  ]
  return (
    <section id='experiences' className='relative overflow-hidden mb-2'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'/>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="leftColumn space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>Experiences</span>
          </div>
          <h2 className='flex items-center justify-center font-serif italic animate-fade-in animation-delay-100 text-white'>
            A timeline of my  
           <span className='font-serif italic font-normal text-secondary-foreground'> career journey.</span>
          </h2>
        </div>
        {/* Timeline */}
        <div className="timeline relative mt-8">
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 ro-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,08)]'/>
          <div className="space-y-12">
            {experiences.map((x,index)=>(
              <div key={index} className='relative grid md:grid-cols-2 gap-8 animate-fade-in' style={{animationDelay:`${(index +1)*100}ms `}}>
                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {x.current && (
                    <span className='absolute inset-0 rounded-full bg-primary animate-ping'/>
                  )}
                </div>
                <div className={`pl-8 md:pl-0 ${index %2 === 0 ? "md:pr-16 md:text-right": "md:col-start-2 md:pl-16"}`}>
                  <div className={`p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className='text-sm text-primary font-medium'>{x.period}</span>
                    <h3 className='text-xl font-semibold mt-2'>{x.company} - {x.event}</h3>
                    <p className='text-muted-foreground'>{x.role}</p>
                    <p className='text-sm text-muted-foreground mt-4'>{x.description}</p>
                    <div className={`flex flex-wrap gap-6 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {x.technologies.map((xt,xtIndex)=>(
                        <span key={xtIndex} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{xt}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
