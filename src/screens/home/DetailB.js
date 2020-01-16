import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import {
  Button
} from 'comps'

class HomeDetailB extends React.Component {

  static navigationOptions = {
    gesturesEnabled: false,
    title: '不可以滑动返回',
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('====================================');
    console.log('>> user2', this.props.navigation.getParam('abc'), this.props);
    console.log('====================================');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeDetailB</Text>
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

export default HomeDetailB