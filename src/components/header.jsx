import React from "react";
import "./styles.css"

export default function Header () {
    return (
        <div>
            <div className="bkg-img-head w-full flex items-center">
                <div className="flex my-auto mx-auto">
                    <div className="flex flex-col">
                        <h1 className="xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-white font-semibold">Surbhit Thakur</h1>
                        <div className="flex mt-2">
                            <p className="xs:text-xs text-sm text-white mr-2">surbhit.thakur@gmail.com,</p>
                            <p className="xs:text-xs text-sm text-white">9868123940</p>
                        </div>
                        <div className="mt-5 mx-auto items-center">
                            <button className="xs:text-xs text-sm text-white border border-white mr-10">git</button>
                            <button className="xs:text-xs text-sm text-white border border-white mr-10">linkedin</button>
                            <button className="xs:text-xs text-sm text-white border border-white mr-10">leetcode</button>
                        </div>
                    </div>
                    <img src="assets/raven.png" alt="raven" className="h-96"/>
                </div>
            </div>
        </div>
    ) 
}