import React from 'react';
import { connect } from 'react-redux';

import { FilterLink } from '../components/FilterLink/FilterLink';
import { setVisibilityFilter } from '../actionCreators/visibilityFilterActions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);
