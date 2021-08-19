import { PLUS_ONE, MINUS_ONE } from './actionType.js';

const initialState = {
    counter: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return { ...state, counter: state.counter + action.payload }
        case MINUS_ONE:
            return { ...state, counter: state.counter - action.payload }
        default:
            return state
    }
}