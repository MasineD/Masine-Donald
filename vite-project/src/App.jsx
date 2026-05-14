import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

const App = () => {
  return (
    <div min-h-screen overflow-x-hidden>
      <Navbar />

      <main>  {/*This contains all other componentso */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
