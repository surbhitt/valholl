import React from "react";
import Navbar from './navbar'
import "./styles.css"

export default function Header () {
    return (
        <div>
            <div className="bkg-img-head flex flex-col w-full">
                <div className="flex xs:flex-col md:flex-row mx-auto items-center mt-16 md:mt-28 lg:mt-20">
                    <div className="flex flex-col">
                        <h1 
                            className="name xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold"
                        >
                            Surbhit Thakur
                        </h1>
                        <div className="contact flex mt">
                            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white mr-1">surbhit.thakur@gmail.com, </p>
                            <p className="xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-md text-white">9650171042</p>
                        </div>
                        <div className="socials flex mt-3 items-center">
                            <a 
                                className="mr-10"
                                href="https://github.com/surbhitt/"
                            >
                                <img src="/github.png" className="xs:h-7 md:h-10 h-12" alt="Github" />
                            </a>
                            <a 
                                className="mr-10"
                                href="https://linkedin.com/in/surbhitthakur/"
                            >
                                <img src="/linkedin.png" className="xs:h-7 md:h-10 h-12" alt="Linkedin" />
                            </a>
                            <a 
                                className=""
                                href="https://leetcode.com/savas_karanli/"
                            >
                                <img src="/code.png" className="xs:h-7 md:h-10 h-12" alt="Leetcode" />
                            </a>
                        </div>
                    </div>
                    <img src="/raven.png" alt="raven" className="raven"/>
                </div>
                <Navbar />
			</div>
        </div>
    ) 
}
