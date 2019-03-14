import {createSelector} from "reselect";


let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default reducers;

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
