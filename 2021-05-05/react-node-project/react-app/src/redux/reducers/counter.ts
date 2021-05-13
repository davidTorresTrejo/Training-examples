/* import other counter */


const initialState = {
    counter: 0
};

/* Counter Reducer */
const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case `INCREMENT`:
            return { ...state, counter: state.counter + action.payload };
        case `DECREMENT`:
            return { ...state, counter: state.counter - action.payload };
    }

    return state;
}


export default counterReducer;


