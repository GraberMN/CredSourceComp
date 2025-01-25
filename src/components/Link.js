import React from 'react'

function Link({link, setLink, showEmbed, title}) {
    return (
        <span>
            <label htmlFor={`${title}LinkInput`}>Link: </label>
            <input type='text' id={`${title}LinkInput`} value={link} size='12' onChange={(e) => setLink(e.target.value)}></input>
            <button type='button' onClick={() => showEmbed()}>Confirm</button>
        </span>
    )
}

export default Link