import { combineReducers } from 'redux'
import reducersTodo from './TodoList/Todo/todo'
import reducersVisibilityFilter from './TodoList/todoList'

export default combineReducers({
  todos: reducersTodo,
  visibilityFilter: reducersVisibilityFilter
})
