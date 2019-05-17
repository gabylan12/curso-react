function todosCounter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + parseInt(action.payload)
        case 'DECREMENT':
            return state - parseInt(action.payload)
        case 'RESET':
            return 0
        default:
            return state
    }
}


function todoApp(state = {}, action) {
    return {
        counter: todosCounter(state.counter, action)
    };
}

export default todoApp;
