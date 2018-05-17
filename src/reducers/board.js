
import generateBoard from '../GenerateBoard';

import { applyGameRules } from '../GenerateBoard';

function boardReducer(state=generateBoard(50,70),action){
    switch(action.type){
        case 'TICK':
            return applyGameRules(state);
        break;
        case 'BOARD_SIZE':
            return generateBoard(action.rows,action.columns);
        break;
        case 'TOGGLE_CELL_STATE':
            var cell=state[action.row][action.col];
            cell.status=cell.status===1?0:1;
            cell.newborn=cell.newborn===1?0:1;
            return [
                ...state.slice(0,action.row),
                [...state[action.row].slice(0,action.col),cell,...state[action.row].slice(action.col+1)],
                ...state.slice(action.row+1)
            ];
        break;
        case 'CLEAR':
            var rows=state.length;
            var cols=state[0].length;
            return generateBoard(rows,cols);
        break;
        default:
            return state;
        break;
    }
    
}

export default boardReducer;

