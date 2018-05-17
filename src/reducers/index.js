import generation from './generation';
import board from './board';
import speed from './speed';
import cleared from './cleared';

import { combineReducers } from 'redux';


 const rootReducer=combineReducers({
    cleared,
    generation,
    speed,
    board
})

export default rootReducer;