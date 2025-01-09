import React from 'react'
import { useState } from 'react'

function Link({link, setLink, showEmbed}) {
    return (
        <span>
            <label>Link: </label>
            <input type='text' value={link} size='12' onChange={(e) => setLink(e.target.value)}></input>
            <button onClick={() => showEmbed()}>Confirm</button>
        </span>
    )
}

export default Link