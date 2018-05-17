import React from 'react';

const SizeControls = ({ handleClick }) => {
    return (
        <div className="board-size-controls">
            <button onClick={()=>handleClick(20,30)}>20x30</button>
            <button onClick={()=>handleClick(30,40)}>30x40</button>
            <button onClick={()=>handleClick(50,60)}>50x60</button>
        </div>
    )
}

export default SizeControls;