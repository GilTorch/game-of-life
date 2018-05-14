import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreator';

import App from './Components/App';



function mapStateToProps(state){

    return {
       generation:state.generation,
       speed:state.generation,
       board:state.board
    }
}

function mapDispacthToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}


const AppContainer=connect(mapStateToProps,mapDispacthToProps)(App);


export default AppContainer;