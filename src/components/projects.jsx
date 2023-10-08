import { useState } from "react";
import "./styles.css";
import ProjectContent from "./projectContent";

export default function Projects() {
  const base_url = "https://github.com/surbhitt";
  const projs = [
    {
      name: "mini-projects",
      langs: ["C++", "C", "JavaScript", "Python"],
    },
    {
      name: "qaahl",
      langs: ["Python"],
    },
    {
      name: "egg",
      langs: ["C++"],
    },
    {
      name: "brainpoke",
      langs: ["Python"],
    },
    {
      name: "tartarus",
      langs: ["Python"],
    },
  ];

  const [active, setActive] = useState(projs[0].name);
  const [link, setLink] = useState(`${base_url}/${active}`);
  const [langs, setLang] = useState(projs[0].langs);

  const setData = (proj) => {
    setActive(proj.name);
    setLink(`${base_url}/mini-projects`);
    setLang(proj.langs);
  };

  return (
    <div className="projects-section">
      <div className="projects flex items-center justify-center">
        <div className="text-white xs:h-[600px] md:h-[800px] md:w-5/6 max-w-[1200px] rounded-md p-2 border-2 border-primary border-solid">
          <div className="flex xs:gap-1 md:gap-5 font-semibold text-xl w-full justify-center">
            {projs.map((proj, id) => {
              return (
                <div
                  key={id}
                  onClick={() => {
                    setData(proj);
                  }}
                  className={` ${
                    active == proj.name
                      ? "bg-opacity-60 cursor-default"
                      : "bg-opacity-20 cursor-pointer"
                  } flex p-2 text-gray-300 xs:text-xs md:text-xl hover:bg-opacity-60 duration-300 bg-primary rounded-md`}
                >
                  {proj.name}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center gap-5 p-2 mt-4 xs:h-[520px] md:h-[700px] w-full rounded-md bg-primary bg-opacity-20">
            <div className="flex justify-center items-center text-white xs:text-xs md:text-xl">
              <div className="flex h-fit ml-2 gap-2">
                <a href={link}>
                  <img src="/link.svg" className="h-7" />
                </a>
                {langs.map((lang, id) => {
                  return (
                    <img
                      key={id}
                      src={`\\lang-icons\\${lang}.svg`}
                      className="h-6"
                    />
                  );
                })}
              </div>
            </div>
            <ProjectContent proj={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
