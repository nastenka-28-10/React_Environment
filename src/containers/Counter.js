import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter/Counter';
import { incrementCounter, decrementCounter } from "../actionCreators/CounterActions";

const mapStateToProps = (state) => {
    return {
        counters: state.countersNumber,
        value: state.counterValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (index) => {
            dispatch(incrementCounter(index))
        },
        onDecrement: (index) => {
            dispatch(decrementCounter(index))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
