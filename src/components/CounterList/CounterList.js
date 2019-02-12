import React from 'react';

import Counter from '../../containers/Counter';
import './CounterList.scss';

const CounterItems = ({ counters, onAddCounter, onDeleteCounter }) => {
    const counterItems = counters.map( (counter, index) => {
        const onDeleteCounterCallback = () => onDeleteCounter(index);
        return(
            <div key={ index }>
                <Counter index = { index }/>
                <button className="counters-number counters-number__delete" onClick={ onDeleteCounterCallback }>Delete Counter</button>
            </div>
            )
    })
    return (
        <div >
            <button className="counters-number counters-number__add" onClick={ onAddCounter }>Add Counter</button>
            { counterItems }
        </div>
    )
}

export default CounterItems;