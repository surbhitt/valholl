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
                            A repository containing small projects written in
                            various languages.
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
                            A header only style library written as a wrapper
                            around the terminal to utilise it as a pixel buffer.
                        </div>
                    </div>
                    <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
                        <img
                            src="https://raw.githubusercontent.com/surbhitt/cellular-automata/main/assets/gameoflife.gif"
                            className="h-40 w-60"
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
                        <img src="#" />
                        <a
                            href={() => {
                                window.open('https://google.com', '_blank')
                            }}
                            className="text-xl font-extrabold mt-10 underline"
                        >
                            Algorithmic Botany
                        </a>
                        <div className="text-sm font-semibold mt-4">
                            Code that graphically models the botanical growth
                            and the patterns found in nature.
                        </div>
                    </div>
                    <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
                        <img
                            src="https://raw.githubusercontent.com/surbhitt/machine-learning/master/perceptron/assets/modelwt100.jpg"
                            className="h-36 w-56"
                        />
                        <a
                            href="https://github.com/surbhitt/machine-learning"
                            className="text-xl font-extrabold mt-10 underline"
                        >
                            Machine Learning
                        </a>
                        <div className="text-sm font-semibold mt-4">
                            A very rudimentary neural network.
                        </div>
                    </div>
                    <div className="project-card p-4 sm:m-1 md:m-3 m-5 h-72 w-80 text-white">
                        <img src="#" />
                        <a
                            href="https://github.com/surbhitt/tartarus"
                            className="text-xl font-extrabold mt-10 underline"
                        >
                            Tartarus
                        </a>
                        <div className="text-sm font-semibold mt-4">
                            A password manager written in js cryptographically
                            secure with remote database.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
