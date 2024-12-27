import React from 'react'
import Link from './Link.js'

function Embed({title}) {
    return (
        <span>
            <div>
                <iframe title={title} src='https://www.youtube.com' width='300px' height='400px' sandbox='allow-scripts' loading='lazy'></iframe>
            </div>
            <Link />
        </span>
    )
}

export default Embed