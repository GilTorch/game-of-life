function generation(state=0,action){
    switch(action.type){
        case 'TICK':
            return state+1;
        break;
        case 'CLEAR':
            state=0;
            return state;
        break;
        default:
            return state;
        break;
    }
}

export default generation;