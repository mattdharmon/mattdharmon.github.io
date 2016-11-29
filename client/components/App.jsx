import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

function mapStateToProps(state) {
  return {
    skills: state.skills
    // experience: state.experience,
    // education: state.education
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(Main)
