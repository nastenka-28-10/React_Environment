import React from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter/Filter';
import { setVisibilityFilter } from '../actionCreators/visibilityFilterActions';

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    onFilterClick(filter){
        dispatch(setVisibilityFilter(filter));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
