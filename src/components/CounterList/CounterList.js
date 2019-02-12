import React from 'react';

import Counter from '../../containers/Counter';
import './CounterList.scss';

const CounterItems = ({ counters, onAddCounter, onDeleteCounter }) => {
    const counterItems = counters.map( (counter, index) => {
        const onDeleteCounterCallback = () => onDeleteCounter(index);
        return(
            <div key={ index }>
                <Counter index = { index }/>
                <button onClick={ onDeleteCounterCallback }>Delete Counter</button>
            </div>
            )
    })
    return (
        <div >
            { counterItems }
            <button onClick={ onAddCounter }>Add Counter</button>
        </div>
    )
}

export default CounterItems;