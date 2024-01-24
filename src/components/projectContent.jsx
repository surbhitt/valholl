import { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import './styles.css'

const md = new MarkdownIt({ html: true })
md.renderer.rules.image = () => ''

const MarkdownRenderer = ({ markdownContent }) => {
    const renderedMarkdown = md.render(markdownContent)
    const renderedMarkdownQithTailwind = renderedMarkdown
        .replace(
            /<h1>/g,
            '<h1 class="xs:text-lg md:text-3xl xs:font-semibold md:font-bold xs:my-2 md:my-4">'
        )
        .replace(
            /<h2>/g,
            '<h2 class="xs:text-md md:text-xl xs:font-semibold md:font-bold xs:my-2 md:my-4">'
        )
        .replace(
            /<h3>/g,
            '<h3 class="xs:text-sm md:text-lg xs:font-semibold md:font-bold xs:my-2 md:my-4 underline">'
        )
        .replace(
            /<p>/g,
            '<p class="xs:text-sm md:text-lg xs:px-2 md:px-5 pb-4">'
        )
        .replace(
            /<pre>/g,
            '<pre class="xs:text-[0.56em] md:text-lg font-mono bg-black rounded-md bg-opacity-60 py-2">'
        )
        .replace(/<li>/g, '<li class="xs:text-xs md:text-lg">')
        .replace(/<ul>/g, '<ul class="border-l-2 border-solid w-fit p-1">')

    return (
        <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: renderedMarkdownQithTailwind }}
        ></div>
    )
}

const ProjectContent = ({ proj }) => {
    const [readmeContent, setReadmeContent] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const readmeUrl = `https://raw.githubusercontent.com/surbhitt/${proj}/main/README.md`

        fetch(readmeUrl)
            .then((response) => response.text())
            .then((data) => {
                setLoading(true)
                setReadmeContent(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching README:', error)
                setReadmeContent('404: Not Found')
                setLoading(false)
            })
    }, [proj])

    return (
        <div className="h-5/6 overflow-auto p-2">
            {!loading ? (
                <MarkdownRenderer markdownContent={readmeContent} />
            ) : (
                <span className="loader"></span>
            )}
        </div>
    )
}

export default ProjectContent
