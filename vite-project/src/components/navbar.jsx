// Navbar.jsx - Fixed version with proper routing and scroll to section
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import '../index.css'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    setMobileMenu(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 bg-[#0f1418]/90 backdrop-blur-md z-50'>
      <nav className='flex items-center justify-between px-6 md:px-20 py-4 md:py-8'>
        {/* Logo - scrolls to home when clicked */}
        <button 
          onClick={() => scrollToSection('home', '#home')}
          className='hover:text-primary text-[24px] md:text-[30px] font-bold cursor-pointer bg-transparent border-none bg-gradient-to-r from-white via-primary to-highlight bg-clip-text text-transparent'
        >
          Masine D<span className='text-primary'>.</span>
        </button>

        {/* Desktop navigation */}
        <div className='hidden md:flex gap-6'>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id, section.hash)}
              className={`navLink cursor-pointer ${activeSection === section.id ? 'border-b-2 border-primary text-primary' : ''}`}
              style={{ background: 'transparent', borderBottom: activeSection === section.id ? '2px solid var(--color-primary)' : 'none' }}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)} 
          className="md:hidden p-2 text-foreground cursor-pointer hover:text-highlight hover:scale-105"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="md:hidden animate-fade-in bg-[#0f1418]/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, section.hash)}
                className={`navLink text-left cursor-pointer ${activeSection === section.id ? 'border-b-2 border-primary text-primary' : ''}`}
                style={{ background: 'transparent', borderBottom: activeSection === section.id ? '2px solid var(--color-primary)' : 'none' }}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar