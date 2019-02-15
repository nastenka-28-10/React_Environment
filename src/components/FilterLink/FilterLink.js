import React from 'react';

export const FilterLink = ({
    filter,
    children,
    onSetVisibilityFilter
}) => {
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