import React from 'react'
import { useState, useEffect } from 'react'
import Link from './Link.js'

function Embed({ title, style }) {
    const [link, setLink] = useState("")
    const [currentLink, setCurrentLink] = useState(null)
    const showEmbed = () => {
        setCurrentLink(link)
    }
    return (
        <span>
            <div>
                <iframe title={title} src={currentLink} width='225px' height='350px' sandbox='allow-scripts allow-forms' loading='lazy' style={style}></iframe>
            </div>
            <span style={style}>
                <Link title={title} link={link} setLink={setLink} showEmbed={showEmbed} />
            </span>
        </span>
    )
}

export default Embed