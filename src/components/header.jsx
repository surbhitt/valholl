import React, { useState } from 'react'
import './styles.css'
import { Link as ScrollLink } from 'react-scroll'

export default function Header(props) {
  const [scrollToSection, setScrollToSection] = useState(false)

  return (
    <div className="relative flex flex-col bg-gradient-to-t from-black justify-center text-white w-full h-screen">
      <img
        src="/cell.gif"
        className="absolute xs:top-28 md:top-20 xs:left-[1.5rem] md:left-[9rem] lg:left-[45rem] xs:w-[23rem] sm:w-[30rem] md:w-[43rem] lg:w-[50rem] z-[-1] opacity-30"
      />
      <div className="flex flex-col items-center justify-center h-60 mx-auto md:mb-14 lg:mb-14">
        <div className="intro flex flex-col h-2/3 justify-center ">
          <h1 className="name xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-md font-semibold xs:mx-auto">
            <span>Surbhit Thakur</span>
          </h1>
          <div className="contact flex mt xs:mx-auto">
            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md mr-1">
              surbhit.thakur@gmail.com,
            </p>
            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md">
              9650171042
            </p>
          </div>
          <div className="socials flex mt-3 items-center xs:mx-auto ml-auto">
            <a
              className="mr-10"
              href="/resume.pdf"
              download="resume surbhit thakur.pdf"
            >
              <img
                title="download resume"
                src="/resume.png"
                className="xs:h-6 xs:w-6 md:h-9 md:w-9"
                alt="Github"
              />
            </a>
            <a className="mr-10" href="https://github.com/surbhitt/">
              <img
                title="github"
                src="/github.png"
                className="xs:h-6 xs:w-6 md:h-9 md:w-9"
                alt="Github"
              />
            </a>
            <a className="mr-10" href="https://linkedin.com/in/surbhitthakur/">
              <img
                title="linkedin"
                src="/linkedin.png"
                className="xs:h-6 xs:w-6 md:h-9 md:w-9"
                alt="Linkedin"
              />
            </a>
            <a className="" href="https://leetcode.com/savas_karanli/">
              <img
                title="leetcode"
                src="/leetcode.png"
                className="xs:h-6 xs:w-6 md:h-9 md:w-9"
                alt="Leetcode"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center xs:text-xs md:text-xl w-2/3 lg:w-1/3 mx-auto">
        I like computers, believe in the minimalism and simplicity of software.
        In last year of my degree (B.Tech.). I like to dabble with technologies
        and explore. check out my blog and github.
        <br /> <br />
      </p>
      <p className="rgb-animation text-center xs:text-sm md:text-xl">
        Python | C/C++ | JavaScript
      </p>
      <nav className="flex flex-col xs:mt-10 md:mt-20 items-center">
        <div className="lg:px-72 flex justify-evenly items-center w-4/5">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            isDynamic={true}
            spy={scrollToSection}
            activeClass="active"
          >
            <div className="pushable bg-red-950 xs:h-8 xs:w-20 sm:h-10 md:h-12 md:w-48 w-64 h-20 items-center justify-center rounded-full">
              <button className="front bg-primary font-semibold xs:h-8 xs:w-20 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full -translate-y-2">
                Projects
              </button>
            </div>
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
            <div className="pushable bg-red-950 xs:h-8 xs:w-24 sm:h-10 md:h-12 md:w-48 w-64 h-20 items-center justify-center rounded-full">
              <button className="front bg-primary font-semibold xs:h-8 xs:w-24 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full -translate-y-2">
                Tech Stack
              </button>
            </div>
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
            <div className="pushable bg-red-950 xs:h-8 xs:w-20 sm:h-10 md:h-12 md:w-48 w-64 h-20 items-center justify-center rounded-full">
              <button className="front bg-primary font-semibold xs:h-8 xs:w-20 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full -translate-y-2">
                Contact
              </button>
            </div>
          </ScrollLink>
        </div>
      </nav>
    </div>
  )
}
