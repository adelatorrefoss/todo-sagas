import { connect } from 'react-redux';
import { setVisibilityFilter } from './filterLink';
import Link from '../../controls/Link/Link';
import { visibilityFilterSelector } from '../TodoList/todoList';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === visibilityFilterSelector(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
