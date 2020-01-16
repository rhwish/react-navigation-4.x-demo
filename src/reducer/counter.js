import * as Types from 'constants/types'

export default function counter(state, action) {
  
  if (typeof(state) === 'undefined') {
    return 0
  }
  switch (action.type) {
    case Types.INCREMENT: {
      return state + 1
    }
    case Types.DECREMENT: {
      return state - 1
    }
    default: 
      return state
  }
}