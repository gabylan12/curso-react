
import reducer from './reducer';
import { createStore,applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
/*
import { createStore } from 'redux';
var storeVar;


function store(reducer){
    if(storeVar == null){
        storeVar = createStore(reducer)
    }
    return storeVar
}

export default store
*/

export default createStore(
    reducer, {
        searchType: {
            platformdId: null,
            searchText: null,
            components:[]
        }
    },
  compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)
);