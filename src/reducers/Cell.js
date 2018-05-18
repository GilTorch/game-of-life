function toggleCellState(state={},action){
    console.log('TOGGLE CELL STATE REDUCER IS CALLED');
    switch(action.type){
        case 'TOGGLE_CELL_LIFE':
            var board=state.board;
            var cell=(board[action.cellRow][action.cellCol]===1)?0:1;
            board[action.cellRow][action.cellCol]=cell;
            return Object.assign({},state,{board:board});
            break;
        default:
            return state;
            break;
    }

}

export default toggleCellState;