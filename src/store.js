import { createStore, compose } from 'redux';
//import rootreducer
import  rootReducer from './reducers/index';
import generateDefaultBoard from './GenerateBoard';


//default data

const defaultRows=50;
const defaultColumns=30;

const defaultState={
    rows:defaultRows,
    columns:defaultColumns,
    generation:0,
    speed:"MEDIUM", //MEDIUM,NORMAL,FAST,NO_SPEED
    board:generateDefaultBoard(defaultRows,defaultColumns)
};


const enhancers=compose(
    window.devToolsExtension?window.devToolsExtension():(f)=>f
);


const store=createStore(rootReducer,defaultState,enhancers);



if(module.hot){
    module.hot.accept('./reducers/',()=>{
        const nextRootReducer=require('./reducers/index').default;
    });
}

export default store;