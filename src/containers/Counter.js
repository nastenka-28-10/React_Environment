import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter/Counter';
import { onIncrement, onDecrement } from "../actionCreators/CounterActions";

const mapStateToProps = (state) => {
    return {
        value: state.countersState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (index) => dispatch(onIncrement(index)),
        onDecrement: (index) => dispatch(onDecrement(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
