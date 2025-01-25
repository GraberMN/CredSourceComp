import React from 'react'
import './sourceSelect.css'

function SourceSelect({ sourceNum, setSourceNum, newSourceNum, setNewSourceNum }) {
    return (
        <div>
            <span>How many sources? (2-4) </span>
            <span id='sourceNumSelect'>
                <span className='option' id='option1' onClick={() => setSourceNum(2)}>2</span>
                <span className='option' id='option2' onClick={() => setSourceNum(3)}>3</span>
                <span className='option' id='option3' onClick={() => setSourceNum(4)}>4</span>
            </span>
            <button type='button' onClick={() => setNewSourceNum(!newSourceNum)}>Confirm</button>
        </div>
    )
}

export default SourceSelect