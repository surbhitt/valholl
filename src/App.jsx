import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './App.css'
import Navbar from './components/titleNavbar'
import Header from './components/header'
import Projects from './components/projects'
import TechStack from './components/techstack'
import ContactForm from './components/contact'

function App() {
    // const [showNav, setShowNavbar] = useState(false);
    const [techstButton, setTechstButton] = useState(false)
    const [projButton, setProjButton] = useState(false)
    const [contactButton, setContactButton] = useState(false)

    function handleProjButtonClick() {
        setProjButton(true)
        setTechstButton(false)
        setContactButton(false)
        scroll.scrollTo('projects', {
            smooth: true,
            offset: -50, // Adjust the offset as needed to position the section correctly
        })
    }
    function handleTechstButtonClick() {
        setProjButton(false)
        setTechstButton(true)
        setContactButton(false)
        scroll.scrollTo('techst', {
            smooth: true,
            offset: -50, // Adjust the offset as needed to position the section correctly
        })
    }
    function handleContactButtonClick() {
        setProjButton(false)
        setTechstButton(false)
        setContactButton(true)
        scroll.scrollTo('contact', {
            smooth: true,
            offset: -50, // Adjust the offset as needed to position the section correctly
        })
    }

    return (
        <div className="">
            <Navbar />
            <Header
                projButton={projButton}
                onProjButtonClick={handleTechstButtonClick}
                techstButton={techstButton}
                onTechstButtonClick={handleProjButtonClick}
                contactButton={contactButton}
                onContactButtonClick={handleContactButtonClick}
            />

            <Projects />
            <TechStack />
            <ContactForm />
        </div>
    )
}

export default App

/*{ showNav && <Navbar />}*/
/*
 {(projButton && !contactButton && !techstButton) ? <Projects /> : null}
	  {(projButton && !contactButton && !techstButton) ? <Pro /> : null}
	  {(projButton && !contactButton && !techstButton) ? <Projects /> : null}
    
*/
