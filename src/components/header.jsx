import React, { useState } from 'react'
import './styles.css'
import { Link as ScrollLink } from 'react-scroll'

export default function Header(props) {
    const [scrollToSection, setScrollToSection] = useState(false)

    return (
        <div>
            <div className="bkg-img-head flex flex-col w-full">
                <div className="flex xs:flex-col md:flex-row mx-auto items-center mt-16 md:mt-28 lg:mt-20 mb-16 md:mb-28 lg:mb-20">
                    <div className="intro flex flex-col h-2/3 justify-center ">
                        <h1 className="name xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold xs:mx-auto">
                            <span>Surbhit Thakur</span>
                        </h1>
                        <div className="contact flex mt xs:mx-auto">
                            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white mr-1">
                                surbhit.thakur@gmail.com,{' '}
                            </p>
                            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white">
                                9650171042
                            </p>
                        </div>
                        <div className="socials flex mt-3 items-center xs:mx-auto ml-auto">
                            <a
                                className="mr-10"
                                href="https://github.com/surbhitt/"
                            >
                                <img
                                    src="/github.png"
                                    className="xs:h-7 md:h-10 h-12"
                                    alt="Github"
                                />
                            </a>
                            <a
                                className="mr-10"
                                href="https://linkedin.com/in/surbhitthakur/"
                            >
                                <img
                                    src="/linkedin.png"
                                    className="xs:h-7 md:h-10 h-12"
                                    alt="Linkedin"
                                />
                            </a>
                            <a
                                className=""
                                href="https://leetcode.com/savas_karanli/"
                            >
                                <img
                                    src="/code.png"
                                    className="xs:h-7 md:h-10 h-12"
                                    alt="Leetcode"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="raven-image-container">
                        <img
                            src="/raven_no_back.png"
                            alt="raven"
                            className="raven"
                        />
                    </div>
                </div>
                <nav className="flex flex-col border-2 border-purple-950 items-center">
                    <hr className="w-4/5" />
                    <div className="lg:px-72 flex justify-evenly items-center w-4/5 mt-10">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            isDynamic={true}
                            spy={scrollToSection}
                            activeClass="active"
                        >
                            <button className="button card flex font-semibold xs:h-8 xs:w-20 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full">
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
                            <button className="button card flex font-semibold xs:h-8 xs:w-24 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full">
                                Tech Stack
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
                            <button className="button card flex font-semibold xs:h-8 xs:w-20 xs:text-sm sm:h-10 md:h-12 md:w-48 w-64 h-20 text-white sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-full">
                                Contact
                            </button>
                        </ScrollLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}
