import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class FavoriteDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>FavoriteDetail</Text>
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

export default FavoriteDetail