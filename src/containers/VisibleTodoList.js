import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import {visibleTodosSelector} from '../selectors';

export const getVisibleTodos = (state) => {
  return visibleTodosSelector(state);
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
