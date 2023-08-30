import React, { useState } from 'react'
import './styles.css'
export default function projects() {
  const projs = [
    {
      name: 'mini-projects',
      desc: 'Collection of mini projects... A program to render voronoi diag based on the following norms:-Euclidean Manhattan and store that picture in PPM format.blah blah blah',
      link: 'https://github.com/surbhitt/mini-projects/',
      img: 'https://raw.githubusercontent.com/surbhitt/mini-projects/main/VoronoiDiagram/voronoi_man.png',
      langs: ['C++', 'C', 'JavaScript', 'Python'],
      scope:
        'A collection of various projects written in various languages. These are mini-projects that are standalone in nature.',
    },
    {
      name: 'qaahl',
      desc: 'Qaahl a simple webcrawler that can generate a graphical view of the crawled path. More of a visualization of how various hyperlinks connect. A module to scrap the pages crawled. Depth limited crawling. Multithreading to be implemented.',
      link: 'https://github.com/surbhitt/qaahl/',
      img: 'https://raw.githubusercontent.com/surbhitt/qaahl/main/assets/qaahl_screen.png',
      langs: ['Python'],
      scope: 'can be utilised to scrape data for machine learning.',
    },
    {
      name: 'egg',
      desc: 'Engine for game and graphics. A single-file/header-only library in C++ for creating graphics; with extension for implementing a game loop. Utilising the terminals in-built capability to render truecolor (xterm-256color).[NOTE] check dev branch porting to gcc from msvc. The code was written on a windows machine with the target as windows, compiled using the MSVC build tools. In the process of porting to gcc and making the code linux compatible.',
      link: 'https://github.com/surbhitt/egg',
      img: 'https://raw.githubusercontent.com/surbhitt/egg/main/assets/egg.png',
      langs: ['C++'],
      scope: 'sprite generator and physics engine to be implemented',
    },
    {
      name: 'brainpoke',
      desc: 'A programming env for brainf**k',
      link: 'https://github.com/surbhitt/brainpoke',
      img: 'https://placehold.co/600x400/000000/FFFFFF/png',
      langs: ['Python'],
      scope: '...',
    },
    {
      name: 'tartarus',
      desc: '...',
      link: '/proj_tartarus.png',
      img: '/proj_tartarus.png',
      langs: ['Python'],
      scope: '...',
    },
  ]

  const [active, setActive] = useState(projs[0].name)
  const [desc, setDesc] = useState(projs[0].desc)
  const [link, setLink] = useState(projs[0].link)
  const [img, setImg] = useState(projs[0].img)
  const [langs, setLang] = useState(projs[0].langs)
  const [scope, setScope] = useState(projs[0].scope)

  const setData = (proj) => {
    setActive(proj.name)
    setDesc(proj.desc)
    setLink(proj.link)
    setImg(proj.img)
    setLang(proj.langs)
    setScope(proj.scope)
  }

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
                    setData(proj)
                  }}
                  className={` ${
                    active == proj.name
                      ? 'bg-opacity-60 cursor-default'
                      : 'bg-opacity-20 cursor-pointer'
                  } flex p-2 text-gray-300 xs:text-xs md:text-xl hover:bg-opacity-60 duration-300 bg-primary rounded-md`}
                >
                  {proj.name}
                </div>
              )
            })}
          </div>
          <div className="gap-5 p-2 mt-4 xs:h-[520px] md:h-[700px] w-full rounded-md bg-primary bg-opacity-20 xs:text-xs md:text-xl">
            <div className="flex justify-center items-center text-white h-1/2">
              <img src={img} className="xs:h-2/3 md:h-full" />
              <div className="flex flex-col h-fit ml-2 gap-2">
                <a href={link}>
                  <img src="/link.svg" className="xs:h-5 md:h-7" />
                </a>
                {langs.map((lang, id) => {
                  return (
                    <img
                      key={id}
                      src={`\\lang-icons\\${lang}.svg`}
                      className="xs:h-4 md:h-7"
                    />
                  )
                })}
              </div>
            </div>
            <table className="xs:mt-0 md:mt-5 w-full">
              <tbody>
                <tr>
                  <td className="font-bold pb-5 text-gray-400 border-b-2 border-solid border-primary">
                    Description:
                  </td>
                  <td className="pl-5 pb-5 border-b-2 border-solid border-primary">
                    {desc}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold py-5 text-gray-400">Scope:</td>
                  <td className="pl-5">{scope}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
