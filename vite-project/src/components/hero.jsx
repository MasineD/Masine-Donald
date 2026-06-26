import React from 'react'
import '../index.css'
import { Phone, Download, FileCode, Braces, Database, Code2 } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaNodeJs} from 'react-icons/fa'
import { SiHtml5, SiTailwindcss, SiJavascript, SiExpress, SiPostgresql, SiVitest, SiPostman, SiPython, SiCplusplus } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'


const Hero = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const sections = [
    { id: 'home', name: 'Home', hash: '#home' },
    { id: 'about', name: 'About', hash: '#about' },
    { id: 'experiences', name: 'Experiences', hash: '#experiences' },
    { id: 'projects', name: 'Projects', hash: '#projects' },
    { id: 'contact', name: 'Contact', hash: '#contact' }
  ]

  // Scroll to section function
  const scrollToSection = (id, hash) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without triggering scroll
      window.history.pushState(null, '', hash);
      setActiveSection(id);
    }
  };

  // Download CV function
  const handleDownloadCV = () => {
    try {
      // Create a link to the CV file in the same folder as Hero.jsx
      const cvPath = '/DonaldMasine-CurriculumVitae.pdf';
      
      // Create an anchor element
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'DonaldMasine-CurriculumVitae.pdf'; // This forces download with this filename
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      link.remove()
      // document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  const navigate = useNavigate();
  const socials = [
    {icon: FaGithub, to: 'https://github.com/MasineD'},
    {icon: FaLinkedin, to: 'https://www.linkedin.com/in/donald-masine-17a430270/'},
    {icon: FaWhatsapp, to: 'https://wa.me/27647266704'},
  ]

  const skills = [
    {
      icon: SiHtml5,
      label: 'HTML'
    },
    {
      icon: Code2,
      label: 'CSS'
    },
    {
      icon: SiJavascript,
      label: 'JavaScript'
    },
    {
      icon: SiTailwindcss,
      label: 'TailwindCSS'
    },
    {
      icon: FaNodeJs,
      label: 'Node.js'
    },
    {
      icon: SiExpress,
      label: 'Express.js'
    },
    {
      icon: SiPostgresql,
      label: 'PostgreSQL'
    },
    {
      icon: Database,
      label: 'MS SQL Server'
    },
    {
      icon: SiVitest,
      label: 'Vitest'
    },
    {
      icon: SiPostman,
      label: 'Postman'
    },
    {
      icon: SiPython,
      label: 'Python'
    },
    {
      icon: Braces,
      label: 'Java'
    },
    {
      icon: SiCplusplus,
      label: 'C++'
    }
  ]
  return (
    <div>
    <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
        {/* Background */}
        <div className="absolute inset-0 bg-transparent">
          {/* <img /> Animate the background */}
        </div>



        {/* Main content */}
        <div className="container mx-auto px-6 pt-1 pb-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className=" space-y-8">
              <div className=" flex animate-fade-in bg-surface rounded-full items-center justify-center">
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full'>
                  <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
                  Graduate Software Developer
                </span>
              </div>

              {/* Headline */}
              <div className=" space-y-4">
                <h1 className='text-5xl md:text-6xl lg:text-7xl folt-bold animate-fade-in animation-delay-100'>
                  Crafting quality,
                  <br />
                    <span className='text-primary glow-text'>modern software</span>
                  <br />
                  <span className='font-serif italic font-normal text-white'>
                    applications.
                  </span> 
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Hi, I'm <span className='intro'>Masine Donald</span> - a graduate software developer skilled in
                  JavaScript, Node.js, Express.js, React, Tailwindcss, and PostgreSQL. I 
                  build modern and interactive software applications for fun with <span className='intro text-primary glow-text'>0 - 1 </span>years of experience.
                </p>
              </div>
              {/* Call to action buttons*/}
              <div className="flex gap-4 animate-fade-in animation-delay-300">
                <button onClick={() => scrollToSection('contact', '#contact')} className='flex item-center justify-center gap-2 rounded-full py-2 px-4 bg-[#00ffff] hover:scale-110 cursor-pointer'><Phone />Contact Me</button>
                <button onClick={handleDownloadCV} className='flex item-center justify-center gap-2 rounded-full py-2 px-4 cursor-pointer border border-[#00ffff] hover:scale-110'>
                  {/* TODO: Animate the border */}
                  <Download />Download CV
                </button>
              </div>
              {/* Social media accounts */}
              <div className="flex items-center gap-9 animate-fade-in animation-delay-400">
                <span className='text-sm text-muted-foreground'>Follow me on:</span>
                {socials.map((social, index)=>(
                  <Link key={index} to={social.to} target='_blank'
                    className='p-2 rounded-full hover:bg-primary/10 hover:scale-105 hover:text-highlight transition-all duration-300'>
                    {< social.icon size={30}/>}
                  </Link>
                ))}
              </div>
            </div>
            {/* Right column */}
            <div className="relative animate-fade-in animation-delay-300">
              {/* Profile Image */}
              <div className="relative max-w-md mx-auto ">
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
                <div className="relative rounded-3xl glow-border">
                  <img src="/images/profile.png" alt="Masine Donald" className='w-full aspect-[4/5] object-cover rounded-2xl'/>
                  {/* Badges */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl px-4 py-3 animate-float border border-primary bg-background">
                    <div className="flex items-center gap-3">
                      <span className='text-sm text-[#00ff00] italic font-medium'>Open To Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills section 
          TODO: Replace the text with icons*/}
          <div className='mt-20 animate-fade-in animation-delay-600'>
            <p className='text-md text-muted-foreground mb-6 text-center'>Skills, Technologies, and Frameworks</p>
            <div className='relative overflow-hidden'>
              <div className='flex animate-marque'>
                {[...skills, ...skills].map((skill, index)=>(
                  <div key={index} className='flex-shrink-0 px-8 py-4 hover:scale-110'>
                    <span className='text-2xl font-semibold text-muted-foreground hover:text-white transition-all duration-300'>{< skill.icon />}</span>
                    <p className='text-sm text-center text-muted-foreground '>{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>

        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Hero