import React from 'react';

export const FilterLink = ({
    filter,
    currentFilter,
    children,
    onSetVisibilityFilter
}) => {
    if (filter === currentFilter )
        return <span>{ children }</span>;
    return (
        <a href="#"
           onClick={
               (e) => {
                   e.preventDefault();
                   onSetVisibilityFilter(filter)
               }
           }>
            { children }
        </a>
    )
}