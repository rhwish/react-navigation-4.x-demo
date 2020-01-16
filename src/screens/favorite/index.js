import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Button
} from 'comps'

class Favorite extends React.Component {

  static navigationOptions = {
    headerBackTitle: '这是一个很长的返回标题',
    headerTruncatedBackTitle: '返回',
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const {
      navigation
    } = this.props
    return (
      <View style={styles.container}>
        <Text>Favorite</Text>
        <Button
          title={'to Detail'}
          onPress={() => {
            navigation.navigate('Detail')
          }}
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

export default Favorite