export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const loadTodosAsync = () => {
    return {
        type: 'LOAD_TODOS_ASYNC',
    }
};

export const loadTodosAction = (data) => {
    return {
        type: 'LOAD_TODOS',
        payload: data
    };
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
        case 'LOAD_TODOS':
            return [
                ...state,
                ...action.payload
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default reducers;
