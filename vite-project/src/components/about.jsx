import React from 'react'
import { Code2, Users, Lightbulb, Rocket, GraduationCap, Award , Sparkles} from 'lucide-react'

const coreValues = [
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Perceive challenges as growth opportunities rather than obstacles ',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Staying up with the latest technologies and best code practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with teams, sharing ideas, and feedback.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing clean, maintainable, scalable and easy to understand code.',
  },
]

const education = [
  {
    qualification: 'BSc in Applied Mathematics and Computer Science',
    institution: 'University of Johannesburg',
    nqfLevel: 7,
    year: '2025'
  },
  {
    qualification: 'Grade 12',
    institution: 'Poo Secondary School',
    nqfLevel: 4,
    year: '2018'
  }
]

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden mt-30'>
      {/* Background decoration */}
      <div className='absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>About Me</span>
          </div>
          <h2 className='font-serif italic animate-fade-in animation-delay-100 text-secondary-foreground'>
            Shaping the digital world,
            <span className='font-serif italic font-normal text-white'> one software at a time.</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className='grid md:grid-cols-2 gap-12 items-start my-12'>
          
          {/* Left column - Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className='text-3xl font-semibold italic'>Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((e, idx) => (
                <div 
                  key={idx} 
                  className='group relative bg-gradient-to-br from-secondary to-secondary/80 p-6 rounded-2xl animate-fade-in animation-delay-200 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30'
                  style={{animationDelay: `${(idx + 1) * 100}ms`}}
                >
                  {/* Year badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-primary/60 bg-primary/10 px-2 py-1 rounded-full">
                      {e.year}
                    </span>
                  </div>
                  
                  {/* Qualification */}
                  <h4 className="text-xl font-semibold text-white pr-16 mb-2">
                    {e.qualification}
                  </h4>
                  
                  {/* Institution */}
                  <p className="text-primary font-medium mb-2">
                    {e.institution}
                  </p>
                  
                  {/* NQF Level */}
                  <div className="flex items-center gap-2 mt-3">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      NQF Level {e.nqfLevel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Values */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="w-8 h-8 text-primary" />
              <h3 className='text-3xl font-semibold italic'>Values</h3>
            </div>
            
            <div className="grid gap-4">
              {coreValues.map((cValue, index) => (
                <div 
                  key={index} 
                  className='group p-5 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 animate-fade-in hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:scale-[1.02]'
                  style={{animationDelay: `${(index + 1) * 100}ms`}}
                >
                  <div className='flex gap-3 mb-3'>
                    <div className='w-10 h-10 flex items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-all duration-300'>
                      {<cValue.icon size={20} />}
                    </div>
                    <h3 className='text-lg font-semibold text-white'>
                      {cValue.title}
                    </h3>
                  </div>
                  <p className='text-sm text-muted-foreground leading-relaxed pl-13'>
                    {cValue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About