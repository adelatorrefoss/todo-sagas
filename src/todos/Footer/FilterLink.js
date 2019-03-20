import { connect } from 'react-redux';
import { setVisibilityFilter } from './duck';
import Link from '../../controls/Link/Link';
import { visibilityFilterSelector } from '../TodoList/duck';

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
