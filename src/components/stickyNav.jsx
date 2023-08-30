import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('hidden')
  const [scrollToSection, setScrollToSection] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  let activeButton =
    'bg-primary xs:text-xs sm:text-sm md:text-sm lg:text-xl font-semibold xs:h-6 md:h-8 md:w-20 lg:h-12 lg:w-32 rounded-full xs:px-1 md:px-0'
  let inactiveButton =
    'xs:text-xs sm:text-sm md:text-sm lg:text-xl font-semibold xs:h-6 md:h-8 md:w-20 lg:h-12 lg:w-32 rounded-full xs:px-1 md:px-0'

  useEffect(() => {
    const stickNavbar = () => {
      const viewportHeight = 900
      const currentScrollPostion = window.scrollY
      setScrollPosition(currentScrollPostion)
      if (window !== undefined) {
        // console.log(currentScrollPostion)
        currentScrollPostion > viewportHeight
          ? setStickyClass('fixed top-0 left-0 z-50')
          : setStickyClass('hidden')
      }
    }
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  return (
    <div
      className={`titlenav flex items-center xs:h-14 xs:p-3 md:p-10 ${stickyClass}`}
    >
      <span className="xs:text-sm sm:text-lg md:text-2xl font-semibold">
        Surbhit thakur
      </span>
      <div className="flex xs:w-48 md:w-64 lg:w-1/4 justify-between items-center ml-auto mr-2 border">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-50}
          isDynamic={true}
          spy={scrollToSection}
          activeClass="active"
        >
          <button
            className={
              scrollPosition > 800 && scrollPosition < 1490
                ? inactiveButton
                : activeButton
            }
          >
            Projects
          </button>
        </ScrollLink>
        <ScrollLink
          to="techstack"
          smooth={true}
          duration={500}
          offset={-50}
          isDynamic={true}
          spy={scrollToSection}
          activeClass="active"
        >
          <button
            className={
              scrollPosition > 1490 && scrollPosition < 2240
                ? inactiveButton
                : activeButton
            }
          >
            TechStack
          </button>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          isDynamic={true}
          spy={scrollToSection}
          activeClass="active"
        >
          <button
            className={scrollPosition > 2248 ? inactiveButton : activeButton}
          >
            Contact
          </button>
        </ScrollLink>
      </div>
    </div>
  )
}
