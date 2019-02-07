import React from 'react';

import Counter from '../Counter/Counter';
import './CounterList.scss';

const CounterItems = ({ counters, onAddCounter, onDeleteCounter }) => {
    const counterItems = counters.map( (counter, index) => {
        return(
            <div key={ index }>
                <Counter value={ counter } index={ index }/>
                <button onClick={ (index) => onDeleteCounter({ index }) }>Delete Counter</button>
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