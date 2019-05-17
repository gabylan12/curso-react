function todosCounter(counter = 0,value, action) {
    switch (action.type) {
        case 'INCREMENT':
            return counter + parseInt(value)
        case 'DECREMENT':
            return counter - parseInt(value)
        case 'RESET':
            return 0
        default:
            return counter
    }
}



function todoApp(state = {}, action) {
    return {
        counter: todosCounter(state.counter,state.value, action)
    };
}

export default todoApp;
