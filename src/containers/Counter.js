import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter/Counter';
import { incrementCounter, decrementCounter } from "../actions/CounterActions";

const mapStateToProps = (state) => {
    return {
        value: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            dispatch(incrementCounter())
        },
        onDecrement: () => {
            dispatch(decrementCounter())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
