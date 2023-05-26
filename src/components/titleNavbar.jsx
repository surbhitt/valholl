import React, { useState, useEffect } from 'react'
import './styles.css'
export default function Navbar() {
    const [stickyClass, setStickyClass] = useState('hidden')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar)

        return () => {
            window.removeEventListener('scroll', stickNavbar)
        }
    }, [])

    const stickNavbar = () => {
        const viewportHeight = window.innerHeight
        if (window !== undefined) {
            let windowHeight = window.scrollY
            windowHeight > viewportHeight
                ? setStickyClass('fixed top-0 left-0 z-50')
                : setStickyClass('hidden')
        }
    }

    return (
        <div className={`titlenav flex items-center p-10 ${stickyClass}`}>
            <span className="xs:text-base sm:text-lg md:text-2xl font-extrabold">
                Surbhit thakur
            </span>
            <div className="flex md:w-64 lg:w-1/5 justify-between ml-auto mr-2">
                <button className="border md:text-sm font-semibold md:h-8 md:w-20 lg:h-10 lg:w-24">
                    Projects
                </button>
                <button className="border md:text-sm font-semibold md:h-8 md:w-20 lg:h-10 lg:w-24">
                    TechStack
                </button>
                <button className="border md:text-sm font-semibold md:h-8 md:w-20 lg:h-10 lg:w-24">
                    Contact
                </button>
            </div>
        </div>
    )
}
