import React from 'react';

import './Counter.scss';

const Counter = ({ index, value, onIncrement, onDecrement }) => {
    const onDecrementCallback = () => {
        onDecrement(index)
    }

    const onIncrementCallback = () => {
        onIncrement(index)
    }

    return (
        <div className="counter">
            <div className="counter-value">{ value[index] }</div>
            <div className="counter-buttons">
                <div className="counter-buttons__minus" onClick={ onDecrementCallback } >-</div>
                <div className="counter-buttons__plus" onClick={ onIncrementCallback }>+</div>
            </div>
        </div>
    )
}

export default Counter;