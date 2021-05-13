const redux = require('redux');

/* Store */
const initialState = { counter: 0, name: '' };

/* Counter Reducer */
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case `INCREMENT`:
            return { ...state, counter: state.counter + 1 };
        case `DECREMENT`:
            return { ...state, counter: state.counter - 1 };
        case `CHANGE_NAME`:
            return { ...state, name: action.payload};
    }

    return state;
}

/* Create Central Store */
const store = redux.createStore(counterReducer);


/* Components */
/* Subscribe to state changes */
store.subscribe( () => {
    console.log(`[Subscription] : `, store.getState());
});

/* Dispatching actions */
store.dispatch({type: `INCREMENT`});
store.dispatch({type: `INCREMENT`});
store.dispatch({type: `DECREMENT`});
store.dispatch({type: `CHANGE_NAME`, payload: `Steve`});

