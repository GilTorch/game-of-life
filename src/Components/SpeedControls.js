import React from 'react';

const SpeedControls = ({ handleClick }) => {
    return (
       <div className="app-speed-controls">
            <button  onClick={()=>handleClick(1000)}>SLOW</button>
            <button  onClick={()=>handleClick(500)}>MEDIUM</button>
            <button  onClick={()=>handleClick(200)}>FAST</button>
            <button onClick={()=>handleClick(50)}>SUPER FAST!</button>
       </div>
    )
}

export default SpeedControls;