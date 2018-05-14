function generation(state=0,action){
    switch(action.type){
        case 'TICK':
            return state+1;
        break;
        default:
            return state;
        break;
    }
}

export default generation;