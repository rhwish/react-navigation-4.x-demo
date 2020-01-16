import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import * as Types from 'constants/types'
import NavigationService from 'navigationService'

class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  async _bootstrapAsync() {
    const user = await AsyncStorage.getItem('user')
    NavigationService.navigate(user ? 'App' : 'Login', user)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthLoading</Text>
        <ActivityIndicator/>
      </View>
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

export default AuthLoading