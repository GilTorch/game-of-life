import { createStore, compose } from 'redux';
//import rootreducer
import  rootReducer from './reducers/index';


//default data
const defaultState={
    rows:'50',
    columns:'30',
    speed:'MEDIUM'
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