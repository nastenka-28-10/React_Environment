import React from 'react';

import './Counter.scss';

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div class="counter">
        <div class="counter-value">{ value }</div>
        <div className="counter-buttons">
            <div class="counter-buttons__minus" onClick={ onDecrement }>-</div>
            <div class="counter-buttons__plus" onClick={ onIncrement }>+</div>
        </div>
    </div>
)

export default Counter;