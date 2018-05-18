import generateDefaultBoard from '../GenerateBoard';

function gameControls(state={},action){
    switch(action.type){
        case 'RUN':
            return Object.assign({},state,{speed:action.speedLevel});
            break;
        case 'PAUSE':
            return Object.assign({},state,{speed:'NO_SPEED'});
            break;
        case 'CLEAR':
            return Object.assign({},state,{generation:0,board:generateDefaultBoard(state.rows,state.columns),speed:action.speedLevel});
            break;
        case 'BOARD_SIZE':
            return Object.assign({},state,{rows:action.rows,columns:action.columns});
            break;
        case 'BOARD_SPEED':
            return Object.assign({},state,{speed:action.speedLevel});
            break;
        default:
            return state;
            break;
    }
}

export default gameControls;