import * as Types from 'constants/types'

import AsyncStorage from '@react-native-community/async-storage'

export default function user(state, action) {
  if (typeof(state) === 'undefined') {
    return null
  }
  
  const {type, data} = action
  switch (type) {
    case Types.CONTEXT: {
      console.log('====================================');
  console.log('>> usert', state, action);
  console.log('====================================');
      return data
    }
    default: 
      return state
  }
}