function clear(state = false, action) {
    switch (action.type) {
        case 'CLEAR':
        case 'PAUSE':
        case 'BOARD_SIZE':
            state = true;
            return state;
            break;
        case 'RUN':
            state=false;
            return state;
            break;
        break;
        default:
            return state;
            break;
    }
}

export default clear;