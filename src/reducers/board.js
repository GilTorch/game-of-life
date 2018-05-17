
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
            cell.status=cell.status===1?0:1;
            cell.newborn=cell.newborn===1?0:1;
            return state;
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

