const changeCountersNumber = (list=[0], action)=>{
    switch(action.type) {
        case 'ADD':
            return [...list, 0];
        case 'DELETE':
            return [
                ...list.slice(0, action.index),
                ...list.slice(action.index)
            ];
    }
}

export addCounter;