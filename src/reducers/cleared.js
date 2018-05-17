function clear(state = false, action) {
    switch (action.type) {
        case 'CLEAR':
            state = true;
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default clear;