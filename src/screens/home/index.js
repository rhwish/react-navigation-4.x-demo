import * as React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import * as Types from 'constants/types'
import NavigationService from 'navigationService'

import {
  Button
} from 'comps'

class Home extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      // headerTitle: '213',
      // header: null,
      // headerShown: false,
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTitleStyle: {
        color: '#FAFAFA'
      },
      headerRight: () => (
        <Button
          title="Modal"
          onPress={() => navigation.navigate('HomeModalDetail')}
          containerStyle={{marginRight: 12,}}
        />
      ),
      headerLeft: () => (
        <Button
          source={require('img/icon/drawer_icon.png')}
          onPress={() => navigation.openDrawer()}
          containerStyle={{marginLeft: 12,}}
        />
      ),
    }
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getContext()
  }

  async getContext() {
    const user = await AsyncStorage.getItem('user')
    this.props.dispatch({type: Types.CONTEXT, data: JSON.parse(user) })
  }

  _logout = async () => {
    await AsyncStorage.clear()
    this.props.dispatch({type: Types.CONTEXT, data: null })
    this.props.navigation.navigate('Login')
  }

  render() {
    const {
      navigation
    } = this.props
    return (
      <View style={styles.container}>
        <Text>{this.props.count}</Text>
        <Text>{`登录用户：${this.props.user && this.props.user.name || 'ff'}`}</Text>
        <Button
          title={'to Detail A'}
          onPress={() => {
            // navigation.navigate('HomeDetailA')
            NavigationService.navigate('HomeDetailA')
          }}
        />
        <Button
          title={'to Detail B'}
          onPress={() => {
            // navigation.navigate('HomeDetailB')
            NavigationService.navigate('HomeDetailB', {abc: 'def'})
          }}
        />
        <Button
          title={'to Detail C'}
          onPress={() => {
            navigation.navigate('HomeDetailC')
          }}
        />
        <Button
          title={'INCREMENT'}
          onPress={() => this.props.dispatch({type: Types.INCREMENT})}
        />
        <Button
          title={'DECREMENT'}
          onPress={() => this.props.dispatch({type: Types.DECREMENT})}
        />
        <Button
          title={'Logout'}
          onPress={this._logout}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default connect(state => ({count: state.count, user: state.user}))(Home)