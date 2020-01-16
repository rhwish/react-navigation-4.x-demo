import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import * as Types from 'constants/types'

import {
  Button
} from 'comps'

class HomeDetailA extends React.Component {

  static navigationOptions = {
    headerTitle: <Image source={require('img/icon/drawer_icon.png')}/>,
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeDetailA</Text>
        <Text>{this.props.count}</Text>
        <Button
          title={'INCREMENT'}
          onPress={() => this.props.dispatch({type: Types.INCREMENT})}
        />
        <Button
          title={'DECREMENT'}
          onPress={() => this.props.dispatch({type: Types.DECREMENT})}
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

export default connect(state => ({count: state.count}))(HomeDetailA)