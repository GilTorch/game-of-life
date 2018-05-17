import React from 'react';

const Controls = ({run, pause, clear}) => {
    return (
        <div className="app-controls">
            <button onClick={run}>Run</button>
            <button onClick={pause}>Pause</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Controls;