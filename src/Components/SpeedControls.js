import React from 'react';

const SpeedControls = ({ handleClick }) => {
    return (
       <div className="app-speed-controls">
            <button  onClick={()=>handleClick(300)}>slow</button>
            <button  onClick={()=>handleClick(100)}>medium</button>
            <button  onClick={()=>handleClick(50)}>fast</button>
       </div>
    )
}

export default SpeedControls;