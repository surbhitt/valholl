import React, { useEffect, useState } from 'react'
import Navbar from './components/stickyNav'
import Header from './components/header'
import Projects from './components/projects'
import TechStack from './components/techstack'
import ContactForm from './components/contact'
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="max-w-[1922px] mx-auto">
      <Navbar />
      <Header />
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="techstack">
        <TechStack />
      </Element>
      <Element name="contact">
        <ContactForm />
      </Element>
    </div>
  )
}

export default App
