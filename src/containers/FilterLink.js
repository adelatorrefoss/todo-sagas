import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { visibilityFilterSelector } from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === visibilityFilterSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
