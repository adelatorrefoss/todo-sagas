import {createSelector} from "reselect";
import {VisibilityFilters} from "../Footer/duck";


let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});


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
