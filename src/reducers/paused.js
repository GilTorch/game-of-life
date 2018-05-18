function paused(state=false,action){
    switch(action.type){
        case 'PAUSE':
        case 'CLEAR':
            state=true;
            return state;
        break;
        case 'RUN':
            state=false;
            return state;
        break;
        default:
            return state;
        break;
    }
}

export default paused;