import { VisibilityFilters } from "./actions";
import {createSelector} from "reselect";

export function todoSelector(state) {
  return state.todos;
}

export function visibilityFilterSelector(state) {
  return state.visibilityFilter;
}

export const visibleTodosSelector = createSelector(
    [visibilityFilterSelector, todoSelector],
    function(filter, todos) {
        switch (filter) {
            case VisibilityFilters.SHOW_ALL:
                return todos;
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + filter);
        }
    }
);
