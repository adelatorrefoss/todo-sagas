import { combineReducers } from 'redux'
import reducersTodo from './TodoList/Todo/todo'
import reducersVisibilityFilter from './Footer/filterLink'

export default combineReducers({
  todos: reducersTodo,
  visibilityFilter: reducersVisibilityFilter
})
