import React from 'react';

import './Counter.scss';

const Counter = ({ index, value, onIncrement, onDecrement }) =>  (
        <div className="counter">
            <div className="counter-value">{ value }</div>
            <div className="counter-buttons">
                <div className="counter-buttons__minus" onClick={ (index) => onDecrement({ index }) }>-</div>
                <div className="counter-buttons__plus" onClick={ (index) => onIncrement({ index }) }>+</div>
            </div>
        </div>
    )

export default Counter;