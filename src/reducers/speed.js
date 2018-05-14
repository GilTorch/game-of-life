function speed(state=10,action){
    switch(action.type){
        case 'SPEED':
            return action.speed;
            break;
        case 'CLEAR':
            return 0;
            break;
        case 'PAUSE':
            return 0;
            break;
        case 'RUN':
            return state;
            break;
        default:
            return state;
            break;
    }
}


export default speed;