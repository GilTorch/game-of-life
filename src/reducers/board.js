
import generateBoard from '../GenerateBoard';

import { applyGameRules } from '../GenerateBoard';

function boardReducer(state=generateBoard(50,70),action){
    switch(action.type){
        case 'TICK':
            return applyGameRules(state);
        break;
        case 'BOARD_SIZE':
            return generateBoard(action.rows,action.columns);
        case 'TOGGLE_CELL_STATE':
            var cell=state[action.row][action.col];
            cell=cell===1?0:1;
            state[action.row][action.col]=cell;
            return [
                ...state.slice(0,action.row),
                [...state[action.row].slice(0,action.col),cell,...state[action.row].slice(action.col+1)],
                ...state.slice(action.row+1)
              ];
        break;
        case 'CLEAR':
            return generateBoard(action.rows,action.cols);
        break;
        default:
            return state;
        break;
    }
    
}

export default boardReducer;

