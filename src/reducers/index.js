
import generateDefaultBoard from '../GenerateBoard';
import generation from './generation';
import board from './board';
import speed from './speed';

import { combineReducers } from 'redux';


 const rootReducer=combineReducers({
    generation,
    speed,
    board
})

export default rootReducer;