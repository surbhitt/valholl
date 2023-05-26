import React from 'react'
import './styles.css'
import 'tailwindcss/tailwind.css'
import './styles.css'

export default function ContactForm() {
    return (
        <div className="contact-container flex items-center justify-center relative">
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <div
                            className="flex items-center justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
                            style={{
                                fontFamily: 'Skranji-Regular, sans-serif',
                            }}
                        >
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#ffffff"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <title></title>{' '}
                                    <g id="Complete">
                                        {' '}
                                        <g id="mail-read">
                                            {' '}
                                            <g>
                                                {' '}
                                                <polyline
                                                    fill="none"
                                                    points="4 9 12 14 20 9"
                                                    stroke="#ffffff"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                ></polyline>{' '}
                                                <polyline
                                                    fill="none"
                                                    points="3 8.5 12 3.5 21 8.5"
                                                    stroke="#ffffff"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                ></polyline>{' '}
                                                <path
                                                    d="M21,8.5v10a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8.5"
                                                    fill="none"
                                                    stroke="#ffffff"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                ></path>{' '}
                                            </g>{' '}
                                        </g>{' '}
                                    </g>{' '}
                                </g>
                            </svg>
                            <span className="ml-4">Query.Me</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="name"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="button flex mx-auto text-white border-0 py-2 px-8 rounded-full text-lg">
                                    Query
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
