import React from 'react';
import { connect } from 'react-redux';

import CounterList from '../components/CounterList/CounterList';
import { addCounter, deleteCounter } from "../actionCreators/counterActions";

const mapStateToProps = (state) => {
    return {
        counters: state.countersState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCounter: () => {
            dispatch(addCounter())
        },
        onDeleteCounter: (index) => {
            dispatch(deleteCounter(index))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);
