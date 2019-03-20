import * as actions from '../duck'

describe('todo actions', () => {
    it('toggleTodo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(1)).toEqual({
            type: 'TOGGLE_TODO',
            id: 1
        })
    })
})
