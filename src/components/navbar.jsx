import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center mt-24">
      <hr className="w-4/5"/>
      <div className="flex justify-evenly items-center">
        <div className="card-container flex justify-evenly items-center">
          <button className="card flex font-extrabold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center">
            projects
            <img src="/project-management.png" className="xs:h-3 md:h-8 h-10 pl-2" alt="Github" />
          </button>
          <button className="card flex font-extrabold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center">
            contact
            <img src="/email.png" className="xs:h-3 md:h-8 h-10 pl-2" alt="Github" />
          </button>
          <button className="card flex font-extrabold xs:h-8 sm:h-10 md:h-12 h-20 text-white xs:text-md sm:text-lg lg:text-xl xl:text-2xl items-center justify-center">
            tech stack
            <img src="/technology.png" className="xs:h-3 md:h-8 h-10 pl-2" alt="Github" />
          </button>
        </div>
      </div>
      <hr className="w-4/5"/>
    </nav>
  );
};

export default Navbar;