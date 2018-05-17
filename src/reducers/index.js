import generation from './generation';
import board from './board';
import speed from './speed';
import cleared from './cleared';
import running from './running';
import paused from './paused';
import { combineReducers } from 'redux';


 const rootReducer=combineReducers({
    running,
    cleared,
    paused,
    generation,
    speed,
    board
})

export default rootReducer;