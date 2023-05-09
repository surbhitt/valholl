import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="bkg-img-nav h-fit">
      <div className="card-container flex justify-evenly md:px-20 lg:px-32 xl:px-60 xs:pt-10 md:pt-20">
        <button className="card border-2 rounded-md xs:h-8 sm:h-10 md:h-12 h-20 xs:w-24 sm:w-32 md:w-40 lg:w-44 w-52 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl">
          Projects
        </button>
        <button className="card border-2 rounded-md xs:h-8 sm:h-10 md:h-12 h-20 xs:w-24 sm:w-32 md:w-40 lg:w-44 w-52 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl">
          Contact
        </button>
        <button className="card border-2 rounded-md xs:h-8 sm:h-10 md:h-12 h-20 xs:w-24 sm:w-32 md:w-40 lg:w-44 w-52 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl">
          Tech stack
        </button>
      </div>
    </nav>
  );
};

export default Navbar;