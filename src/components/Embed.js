import React from 'react'
import { useState } from 'react'
import Link from './Link.js'

function Embed({ title }) {
    const [link, setLink] = useState("")
    const [currentLink, setCurrentLink] = useState("")
    const showEmbed = () => {
        setCurrentLink(link)
    }
    return (
        <span>
            <div>
                <iframe title={title} src={currentLink} width='225px' height='350px' sandbox='allow-scripts allow-same-origin allow-forms' loading='lazy'></iframe>
            </div>
            <Link link={link} setLink={setLink} showEmbed={showEmbed} />
        </span>
    )
}

export default Embed