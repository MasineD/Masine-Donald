import React from 'react'
import { Code2, Users, Lightbulb, Rocket } from 'lucide-react'


const coreValues = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write clean, maintainable, scalable and easy to understand code.',
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
    icon: Rocket,
    title: 'Performance',
    description: 'Writing code with good or high performance.',
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
    <section id='about' className='relative overflow-hidden'>
      <div className="container mx-auto px-6 relative z-10">
        <div className="leftColumn space-y-4">
          <div className="title flex items-center justify-center text-4xl md:text-5xl animate-fade-in text-secondary-foreground font-medium tracking-wider uppercase">
            <span>About Me</span>
          </div>
          <h2 className='flex items-center justify-center font-serif italic animate-fade-in animation-delay-100 text-secondary-foreground'>
            Shaping the digital world,
           <span className='font-serif italic font-normal text-white'> one software at a time.</span>
          </h2>
        </div>
        <div className='grid md:grid-cols-2 gap-16 items-start my-8'>
          {/* Left column */}
          <div className="leftColumn space-y-8">
            <div className="flex items-center justify-center">
              <h3 className='text-4xl font-semibold italic'>Education</h3>
            </div>
            <div className="">
              {education.map((e, idx) => (
                <p key={idx} className='text-muted-foreground bg-secondary p-4 rounded-2xl animate-fade-in animation-delay-200 my-3'>
                  {e.qualification}<br />{e.institution}<br />NQF: {e.nqfLevel}<br />{e.year}
                </p>
              ))}
            </div>
          </div>
          {/* Right column */}
          <div className="rightColumn grid md:grid-cols-1 gap-3">
            <div className="flex items-center justify-center">
              <h3 className='text-4xl font-semibold italic'>Values</h3>
            </div>
              {coreValues.map((cValue, index)=>(
                <div key={index} className='p-4 rounded-2xl bg-secondary animate-fade-in' style={{animationDelay:`${(index +1)*100}ms `}}>
                  <div className='flex gap-2 mb-2'>
                    <div className='w-8 h-8 flex items-center justify-center rounded-xl bg-primary/10 text-primary font-bold'>{<cValue.icon />}</div>
                    <h3 className='text-lg font-semibold'>
                      {cValue.title}
                    </h3>
                  </div>
                  <p className='text-sm text-muted-foreground'>{cValue.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About