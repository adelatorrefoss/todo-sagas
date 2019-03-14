export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
};

export default reducers;