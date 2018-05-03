export function setBoardSize(rows,columns){
    return {
        type:'RESIZE_BOARD',
        rows,
        columns
    }
}


export function setAnimationSpeed(speedLevel){
    return {
        type:'SET_ANIMATION_SPEED',
        speedLevel
    }
}


export function toggleCellState(cellId){

    return {
        type:'TOOGLE_CELL_STATE',
        cellId
    }
    
}


export function controlGame(action){
    return {
        type:'GAME_CONTROLS',
        action
    }
}


export function checkCellNeighbours(){
    
}