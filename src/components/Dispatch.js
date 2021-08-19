import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PLUS_ONE, MINUS_ONE } from './actionType.js';
import '../App.css';

const Dispatch = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.counter);

    const plusOne = () => {
        dispatch({ type: PLUS_ONE, payload: 1 });
    }

    const minusOnu = () => {
        dispatch({ type: MINUS_ONE, payload: 1 });
    }
    return (
        <div className="App">
            <button onClick={minusOnu}>-</button>
            <h5>{selector}</h5>
            <button onClick={plusOne}>+</button>
        </div>
    )
}

export default Dispatch;