import React from 'react'
import { useRef } from 'react'
import './sourceSelect.css'

function SourceSelect({ sourceNum, setSourceNum }) {
    const sourceNumRef = useRef(2);
    return (
        <div>
            <span>How many sources? (2-4) </span>
            <span id='sourceNumSelect'>
                <span className='option' id='option1' onClick={() => {
                    sourceNumRef.current = 2;
                    console.log('Selected sourceNum:', sourceNumRef.current);
                }}>2</span>
                <span className='option' id='option2' onClick={() => {
                    sourceNumRef.current = 3;
                    console.log('Selected sourceNum:', sourceNumRef.current);
                }}>3</span>
                <span className='option' id='option3' onClick={() => {
                    sourceNumRef.current = 4;
                    console.log('Selected sourceNum:', sourceNumRef.current);
                }}>4</span>
            </span>
            <button type='button' onClick={() => {
                setSourceNum(sourceNumRef.current);
                console.log('Confirmed sourceNum:', sourceNumRef.current);
            }}>Confirm</button>
        </div>
    );
}

export default SourceSelect