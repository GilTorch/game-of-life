function generation(state=0,action){
    switch(action.type){
        case 'TICK':
            return state+1;
        break;
        case 'CLEAR':
        case 'BOARD_SIZE':
            state=0;
            return state;
        break;
        default:
            return state;
        break;
    }
}

export default generation;