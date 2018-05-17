import React from 'react';

const Legends = (props) => {
    return (
        <div className="legends-container">
            <div className="legend-container">
                <div className="legend cell"></div>
                <p className="legend-description">
                    New Born
                </p>
            </div>
            <div className="legend-container">
                <div className="legend old-cell"></div>
                <p className="legend-description">
                    Old Cell
                </p>
            </div>
        </div>
    )
}

export default Legends;