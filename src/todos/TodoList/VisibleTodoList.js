import {connect} from 'react-redux'
import TodoList from './TodoList'
import {visibleTodosSelector} from './todoList';
import {toggleTodo} from "./Todo/todo";

const mapStateToProps = state => ({
  todos: visibleTodosSelector(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
