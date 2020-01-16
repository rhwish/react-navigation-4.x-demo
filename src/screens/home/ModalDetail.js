import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Button
} from 'comps'

class HomeModalDetail extends React.Component {
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
        <Text>HomeModalDetail</Text>
        <Button
          title={'back'}
          onPress={() => {
            navigation.goBack()
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

export default HomeModalDetail