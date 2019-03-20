import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from './duck';
import LoadTodosButton from './LoadTodosButton';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <LoadTodosButton>
      Load Todos
    </LoadTodosButton>
  </div>
);

export default Footer
