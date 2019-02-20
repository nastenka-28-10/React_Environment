import React from 'react';

import FilterLink from '../FilterLink/FilterLink';

const Filter = () => {
    return (
        <p>
            Show:
            {'  '}
            <FilterLink
                filter = 'all'
            >
                All
            </FilterLink>
            {'  '}
            <FilterLink
                filter='active'
            >
                Active
            </FilterLink>
            {'  '}
            <FilterLink
                filter='completed'
            >
                Completed
            </FilterLink>
        </p>
    )
}

export default Filter;