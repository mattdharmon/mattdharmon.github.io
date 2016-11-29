import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducers.
import utils from './utils'
import skills from './skills'

const rootReducer = combineReducers({
  utils,
  skills,
  routing: routerReducer
})

export default rootReducer
