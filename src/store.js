import { createStore, compose } from 'redux';
//import rootreducer
import  rootReducer from './reducers/index';
import generateDefaultBoard from './GenerateBoard';


//default data

const defaultRows=30;
const defaultColumns=50;

const defaultState={
    generation:0,
    speed:100, //MEDIUM,NORMAL,FAST,NO_SPEED
    board:generateDefaultBoard(defaultRows,defaultColumns,true)
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