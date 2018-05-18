import generation from './generation';
import board from './board';
import speed from './speed';
import cleared from './cleared';
import paused from './paused';
import { combineReducers } from 'redux';



 const rootReducer=combineReducers({
    cleared,
    paused,
    generation,
    speed,
    board
})

export default rootReducer;