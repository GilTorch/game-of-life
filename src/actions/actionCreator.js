/*

state={
rows:4,
columns:5,
generation:0,
speed:MEDIUM //MEDIUM,NORMAL,FAST,NO_SPEED
board:[
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
]
}


*/



export function setBoardSize(rows, columns) {
    return {type: 'BOARD_SIZE', rows, columns}
}

export function setBoardSpeed(speedLevel) {
    return {type: 'BOARD_SPEED', speedLevel}
}

//simulation Controls

export function run(speedLevel) {

    return {type: 'RUN',speedLevel}

}

export function pause() {

    return {type: 'PAUSE'}

}

export function clear() {

    return {type: 'CLEAR'}

}

//

export function incrementGeneration() {

    return {type: 'INCREMENT_GENERATION'}

}

export function toggleCellState(cellRow, cellCol) {
    return {type: 'TOGGLE_CELL_LIFE', cellRow, cellCol}
}
