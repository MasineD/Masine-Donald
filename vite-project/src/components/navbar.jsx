// Navbar.jsx - Fixed version with proper routing
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../index.css'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-[#0f1418]/90 backdrop-blur-md z-50'>
      <nav className='flex items-center justify-between px-6 md:px-20 py-4 md:py-8'>
        <Link to='/' className='hover:text-primary text-[24px] md:text-[30px] font-bold'>
          Masine D<span className='text-primary'>.</span>
        </Link>

        {/* Desktop navigation */}
        <div className='hidden md:flex gap-6'>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/about'>About</Link>
          <Link className='navLink' to='/experience'>Experience</Link>
          <Link className='navLink' to='/projects'>Projects</Link>
          <Link className='navLink' to='/contact'>Contact</Link>
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
            <Link className='navLink' to='/' onClick={() => setMobileMenu(!mobileMenu)}>Home</Link>
            <Link className='navLink' to='/about' onClick={() => setMobileMenu(!mobileMenu)}>About</Link>
            <Link className='navLink' to='/experience' onClick={() => setMobileMenu(!mobileMenu)}>Experience</Link>
            <Link className='navLink' to='/skills' onClick={() => setMobileMenu(!mobileMenu)}>Skills</Link>
            <Link className='navLink' to='/projects' onClick={() => setMobileMenu(!mobileMenu)}>Projects</Link>
            <Link className='navLink' to='/contact' onClick={() => setMobileMenu(!mobileMenu)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar