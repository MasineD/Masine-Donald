// App.jsx
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Add padding-top to push content below fixed navbar */}
      <main className="pt-32"> {/* Adjust pt-32 based on navbar height */}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App