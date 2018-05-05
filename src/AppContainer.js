import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreator';

import App from './Components/App';



function mapStateToProps(state){

    return {
       rows:state.rows,
       columns:state.columns,
       speed:state.speed,
       generation:state.generation,
       board:state.board
    }
}

function mapDispacthToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}


const AppContainer=connect(mapStateToProps,mapDispacthToProps)(App);


export default AppContainer;