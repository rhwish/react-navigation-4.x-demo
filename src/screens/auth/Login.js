import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  Button
} from 'comps'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  _loginRHAsync = async () => {
    await AsyncStorage.setItem('user', JSON.stringify({ name: 'rh', token: 'bwbwqbfhbwhbfhwbqhfbhw' }))
    this.props.navigation.navigate('App')
  }

  _loginFlowerAsync = async () => {
    await AsyncStorage.setItem('user', JSON.stringify({ name: 'flower', token: 'bwbwqbfhbwhbfhwbqhfbhw' }))
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login RH"
          onPress={this._loginRHAsync}
        />
        <Button
          title="Login Flower"
          onPress={this._loginFlowerAsync}
        />
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

export default Login