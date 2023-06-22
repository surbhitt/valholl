import React from 'react'
import './styles.css'
export default function projects() {
  return (
    <div className="projects-section">
      <div className="overlay"></div>
      <div className="projects flex flex-col justify-center">
        <div className="project-container flex xs:flex-col md:flex-row justify-center">
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img src="https://raw.githubusercontent.com/surbhitt/mini-projects/main/ImgView/assets/moon450x510test.png" />
            <a
              href="https://github.com/surbhitt/mini-projects"
              className="text-xl font-extrabold mt-4 underline"
            >
              Mini-Projects
            </a>
            <div className="text-sm font-semibold mt-2">
              A repository containing small projects written in various
              languages.
            </div>
          </div>
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img src="" />
            <a
              href="https://github.com/surbhitt/console-game-engine"
              className="text-xl font-extrabold mt-10 underline"
            >
              Console-Game-Engine
            </a>
            <div className="text-sm font-semibold mt-4">
              A header only style library written as a wrapper around the
              terminal to utilise it as a pixel buffer. It utilises the WinAPI
              to take control (a handle) of the terminal and manipulate the
              buffer to populate it with various kinds of values that act as a
              glyph and can be rendered as pixels on screen.
            </div>
          </div>
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img
              src="https://raw.githubusercontent.com/surbhitt/cellular-automata/main/assets/gameoflife.gif"
              className="h-40 mx-auto"
            />
            <a
              href="https://github.com/surbhitt/cellular-automata"
              className="text-xl font-extrabold mt-4 underline"
            >
              Cellular-Automata
            </a>
            <div className="text-sm font-semibold mt-2">
              A cellular automaton written rendered using{' '}
              <a
                href="https://github.com/surbhitt/console-game-engine"
                className="text-blue-300"
              >
                consolegameengine
              </a>
              .
            </div>
          </div>
        </div>
        <div className="project-container flex xs:flex-col md:flex-row justify-center">
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img src="/proj_barnsleyfern.jpeg" className="h-44 mx-auto" />
            <a className="text-xl font-extrabold mt-10 underline">
              Processing Based
            </a>
            <div className="text-sm font-semibold mt-4">
              Part of Creative coding, graphics rendered using p5js.
            </div>
          </div>
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img
              src="https://raw.githubusercontent.com/surbhitt/machine-learning/master/perceptron/assets/modelwt100.jpg"
              className="h-44 mx-auto"
            />
            <a
              href="https://github.com/surbhitt/machine-learning"
              className="text-xl font-extrabold underline"
            >
              Machine Learning
            </a>
            <div className="text-sm font-semibold mt-4">
              A very rudimentary neural network.
            </div>
          </div>
          <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
            <img src="/proj_tartarus.png" className="h-40 mx-auto" />
            <a
              href="https://github.com/surbhitt/tartarus"
              className="text-xl font-extrabold mt-10 underline"
            >
              Tartarus
            </a>
            <div className="text-sm font-semibold mt-2">
              A password manager written in py.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
