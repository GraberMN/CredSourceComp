import React from 'react'
import Link from './Link.js'

function Embed({title}) {
    return (
        <span>
            <div>
                <iframe title={title} src='' width='300px' height='400px' sandbox='allow-scripts allow-same-origin allow-forms' loading='lazy'></iframe>
            </div>
            <Link />
        </span>
    )
}

export default Embed