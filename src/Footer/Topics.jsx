
import React from 'react';
import { useState } from 'react';

export default function Topics({ question, answer }) {
    const [display, setDisplay] = useState(false);

    function changeDisplay() {
        setDisplay(!display)
    }

    return (
        <div>
            <div className='d-flex flex-row'>
                <h4 className='w-75'>
                    {question}
                </h4>
                <button onClick={() => changeDisplay(true)}>+</button>
            </div>
            <div className={display ? 'd-block' : 'd-none'}>
                {answer}
            </div>
        </div>
    );
}