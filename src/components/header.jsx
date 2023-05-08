import React from "react";
import "./styles.css"

export default function Header () {
    return (
        <div>
            <div className="bkg-img-head flex w-full items-center">
                <div className="flex mx-auto items-center">
                    <div className="flex flex-col">
                        <h1 
                            className="name xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-white font-semibold"
                        >
                            Surbhit Thakur
                        </h1>
                        <div className="contact flex mt">
                            <p className="xs:text-xs text-md text-white mr-2">surbhit.thakur@gmail.com,</p>
                            <p className="xs:text-xs text-md text-white">9868123940</p>
                        </div>
                        <div className="socials flex mt-3 ml-2 items-center">
                            <a 
                                className="xs:text-xs text-sm text-white border border-white mr-10"
                                href="https://github.com/surbhitt/"
                            >
                                <img src="assets/github.png" className="h-10" alt="Github" />
                            </a>
                            <a 
                                className="xs:text-xs text-sm text-white border border-white mr-10"
                                href="https://linkedin.com/in/surbhitthakur/"
                            >
                                <img src="assets/linkedin.png" className="h-10" alt="Linkedin" />
                            </a>
                            <a 
                                className="xs:text-xs text-sm text-white border border-white"
                                href="https://leetcode.com/savas_karanli/"
                            >
                                <img src="assets/code.png" className="h-10" alt="Leetcode" />
                            </a>
                        </div>
                    </div>
                    <img src="assets/raven.png" alt="raven" className="h-96"/>
                </div>
            </div>
        </div>
    ) 
}