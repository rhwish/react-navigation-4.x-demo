import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import NavigationService from 'navigationService'

import reducers from 'reducer'

import AppContainer from 'screens'

let store = createStore(reducers)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={r => {NavigationService.setTopLevelNavigator(r)}}
        />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App