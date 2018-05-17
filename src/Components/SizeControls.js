import React from 'react';

const SizeControls = ({ handleClick }) => {
    return (
        <div className="board-size-controls">
            <button onClick={()=>handleClick(50,30)}>50x30</button>
            <button onClick={()=>handleClick(70,50)}>70x50</button>
            <button onClick={()=>handleClick(100,80)}>100x80</button>
        </div>
    )
}

export default SizeControls;