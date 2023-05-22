import React from "react";
import "./styles.css"
import { Link } from 'react-scroll'

export default function Header (props) {
    const buttonInactive = "button";
    const buttonActive = "border";
    return (
      <div>
        <div className="bkg-img-head flex flex-col w-full">
          <div className="flex xs:flex-col md:flex-row mx-auto items-center mt-16 md:mt-28 lg:mt-20 mb-16 md:mb-28 lg:mb-20">
            <div className="intro flex flex-col">
              <h1 className="name xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold ml-auto">
                <span>Surbhit Thakur</span>
              </h1>
              <div className="contact flex mt ml-auto">
                <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white mr-1">
                  surbhit.thakur@gmail.com,{" "}
                </p>
                <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white">
                  9650171042
                </p>
              </div>
              <div className="socials flex mt-3 items-center ml-auto">
                <a className="mr-10" href="https://github.com/surbhitt/">
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
                <a className="" href="https://leetcode.com/savas_karanli/">
                  <img
                    src="/code.png"
                    className="xs:h-7 md:h-10 h-12"
                    alt="Leetcode"
                  />
                </a>
              </div>
            </div>
            <div className="raven-image-container">
              <img src="/raven_no_back.png" alt="raven" className="raven" />
            </div>
          </div>
          <nav className="flex flex-col border-2 border-purple-950 items-center">
            <hr className="w-4/5" />
            <div className="flex justify-evenly items-center">
              <div className="card-container flex justify-evenly items-center">
                <button 
                    className="button card flex font-semibold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-2xl"
                    onClick={props.onProjButtonClick}
                >
                    
                  Projects
                </button>
                <button 
                    className="button card flex font-semibold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-2xl"
                    onClick={props.onTechstButtonClick}
                >
                    
                  Tech Stack
                </button>
                <button 
                    className="button card flex font-semibold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center rounded-2xl"
                    onClick={props.onContactButtonClick}
                >
                    
                  Contact
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    ); 
}
