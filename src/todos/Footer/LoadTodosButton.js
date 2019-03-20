import { connect } from 'react-redux';
import Link from '../../controls/Link/Link';
import { loadTodosAsync } from '../TodoList/Todo/duck';

const mapStateToProps = () => ({
  active: false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(loadTodosAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
