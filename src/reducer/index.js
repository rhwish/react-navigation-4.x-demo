import {combineReducers} from 'redux'

import count from './counter'
import user from './user'

const reducer = combineReducers({
  user,
  count
})

export default reducer
