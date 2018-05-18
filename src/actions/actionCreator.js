
export function changeBoardSize(rows, columns) {
    return {type: 'BOARD_SIZE', rows, columns}
}

export function changeSpeed(speed) {
    return {type: 'SPEED', speed}
}


export function run(speedLevel) {

    return {type: 'RUN',speedLevel}

}

export function pause() {

    return {type: 'PAUSE'}

}

export function clear() {

    return {type: 'CLEAR'}

}

export function tick(){
    return {type:'TICK'}
}


export function toggleCellState(row, col) {
    return {type: 'TOGGLE_CELL_STATE',row,col}
}