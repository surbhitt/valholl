import React from "react";
import "./styles.css"

const Navbar = () => {
    return (
        <nav className="bkg-img-nav">
            <div className="card-container flex justify-evenly mx-auto items-center w-3/5">
                <button className="card border-4 border-white h-60 w-60 text-white text-2xl font-semibold">Projects</button>
                <button className="card border-4 border-white h-60 w-60 text-white text-2xl font-semibold">Contact</button>
                <button className="card border-4 border-white h-60 w-60 text-white text-2xl font-semibold">Tech stack</button>
            </div>
        </nav>
    )
};

export default Navbar;