import { combineReducers } from 'redux'
import reducersTodo from './TodoList/Todo/duck'
import reducersVisibilityFilter from './Footer/duck'

export default combineReducers({
  todos: reducersTodo,
  visibilityFilter: reducersVisibilityFilter
})
