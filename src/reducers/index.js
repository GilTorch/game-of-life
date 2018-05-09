
import generateDefaultBoard from '../GenerateBoard';

function rootReducer(state={},action){
    console.log('root reducer is called');
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
            return Object.assign({},state,{rows:action.rows,columns:action.columns,board:generateDefaultBoard(action.rows,action.columns,false)}); 
            break;
        case 'SIMULATION_SPEED':
            return Object.assign({},state,{speed:action.speed});
            break;
        case 'TOGGLE_CELL_STATE':
            var row=action.cellRow;
            var col=action.cellCol;
            var board=state.board;
            var value=(board[row][col]===0)?1:0;
            return Object.assign({},state,{board:[
                ...board.slice(0,row),
                [...board[row].slice(0,col),value,...board[row].slice(col+1)],
                ...board.slice(row+1)
              ]});
            break;
        default:
            return state;
            break;
    }
}


export default rootReducer;