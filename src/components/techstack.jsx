import { useEffect, useState } from 'react'
import './styles.css'
import fetchData from '/lib/fetchData'

const lang_desc = {
    Python: {
        icon: '/lang-icons/Python.svg',
        lib: 'Beautiful Soup4, Selenium, Requests',
    },
    'C++': {
        icon: '/lang-icons/C++.svg',
        lib: 'stl, stb-image, termio, ncurses',
    },
    Batchfile: { icon: '/lang-icons/Batchfile.svg', lib: '...' },
    JavaScript: {
        icon: '/lang-icons/JavaScript.svg',
        lib: 'Reactjs, Nextjs, Mailjs, Toastify, MaterialUI, RadixUI, ReactIcons',
    },
    TypeScript: {
        icon: '/lang-icons/TypeScript.svg',
        lib: '',
    },
    CSS: { icon: '/lang-icons/CSS.svg', lib: 'TailwindCSS' },
    HTML: { icon: '/lang-icons/HTML.svg', lib: 'BootStrap' },
    Shell: { icon: '/lang-icons/Shell.svg', lib: '...' },
    'Vim Script': { icon: '/lang-icons/Vim Script.svg', lib: '...' },
    C: { icon: '/lang-icons/C.svg', lib: 'stb-image' },
    Lua: { icon: '/lang-icons/Lua.svg', lib: '...' },
    Dockerfile: { icon: '/lang-icons/Dockerfile.svg', lib: '...' },
    filler: { icon: '/lang-icons/filler.svg', lib: '...' },
}

const TechStack = () => {
    const [loading, setLoading] = useState(true)
    const [languages, setLanguages] = useState([])
    const [projects] = useState('...')
    const [active, setActive] = useState('Python')
    const [libraries, setLib] = useState(lang_desc[active]['lib'])

    const getLang = async () => {
        setLoading(true)
        try {
            const fetchedLanguages = await fetchData()
            setLanguages(Array.from(fetchedLanguages))
            setLoading(false)
        } catch (error) {
            console.error('Error fetching languages:', error)
            setLoading(false)
        }
        setLoading(false)
    }

    useEffect(() => {
        getLang()
    }, [])
    console.log(languages)
    const assignValues = (lang) => {
        if (lang in lang_desc) setActive(lang)
        else setActive('filler')
        setLib(lang_desc[lang]['lib'])
        // setProj(lang_desc[lang])
    }

    const iconExists = (lang) => {
        for (let language in lang_desc) if (language === lang) return true
        return false
    }
    return (
        <div className="flex techst-section items-center justify-center">
            {!loading ? (
                <div className="border-2 border-solid border-red-800 p-2 rounded-md">
                    <div className="grid grid-cols-3 gap-2 w-fit items-center">
                        {languages.map((lang, id) => (
                            <div
                                key={id}
                                onClick={() => {
                                    assignValues(lang)
                                }}
                                className={`flex text-white p-1 md:my-2 md:p-10 bg-primary ${
                                    active === lang
                                        ? 'bg-opacity-60 cursor-default'
                                        : 'bg-opacity-20 cursor-pointer'
                                } hover:bg-opacity-60 items-center rounded-md duration-300`}
                            >
                                <img
                                    src={
                                        iconExists(lang)
                                            ? lang_desc[lang]['icon']
                                            : lang_desc['filler']['icon']
                                    }
                                    className="xs:h-8 md:h-10"
                                />
                                <div className="xs:text-xs md:text-lg mx-5">
                                    {lang}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col xs:gap-2 xs:mt-5 md:mt-0 w-full md:mr-3">
            <div className="w-full xs:max-w-[500px] md:max-w-full xs:p-3 md:p-10 bg-primary bg-opacity-20 md:m-3 rounded-md text-gray-400 xs:text-xs md:text-lg font-semibold">
              <div className="underline underline-offset-8">
                Libraries, Frameworks and Related technologies
              </div>
              <div className="xs:mt-2 md:mt-10 text-gray-300">{libraries}</div>
            </div>
            <div className="w-full xs:p-3 md:p-10 bg-primary bg-opacity-20 md:m-3 rounded-md text-gray-400 xs:text-xs md:text-lg font-semibold">
              <div className="underline underline-offset-8">Projects</div>
              <div className="xs:mt-2 md:mt-10 text-gray-300">{projects}</div>
            </div>
          </div> */}
                </div>
            ) : (
                <div className="flex xs:flex-col md:flex-row xs:w-[360px] md:w-5/6 max-w-[1000px] border border-solid border-red-800 p-2 rounded-md animate-pulse">
                    <div className="xs:grid xs:grid-cols-2 xs:gap-2 sm:flex sm:flex-col h-full w-fit items-center">
                        {Array(10)
                            .fill(0)
                            .map((lang, id) => (
                                <div
                                    key={id}
                                    className="flex text-white xs:p-1 md:p-3 md:my-2 xs:w-[170px] sm:w-[200px] bg-primary bg-opacity-20 items-center rounded-md"
                                >
                                    <div className="text-lg mx-5 text-gray-300">
                                        ...
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* <div className="w-full xs:h-[200px] md:h-[500px] bg-primary bg-opacity-20 md:ml-3 xs:mt-5 md:mt-2 rounded-md"></div> */}
                </div>
            )}
        </div>
    )
}

export default TechStack
