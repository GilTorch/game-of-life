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



export function changeBoardSize(rows, columns) {
    return {type: 'BOARD_SIZE', rows, columns}
}

export function changeSpeed(speed) {
    return {type: 'SPEED', speed}
}

//simulation Controls

export function run(speedLevel) {

    return {type: 'RUN',speedLevel}

}

export function pause() {

    return {type: 'PAUSE'}

}

export function clear(rows,cols) {

    return {type: 'CLEAR',rows,cols}

}

export function tick(){
    return {type:'TICK'}
}

export function toggleCellState(row, col) {
    return {type: 'TOGGLE_CELL_STATE',row,col}
}
