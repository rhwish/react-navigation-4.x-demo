import * as React from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native'

import {
  Button
} from 'comps'

class HomeDetailC extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View 
          style={{
            width: Dimensions.get('window').width, 
            height: 88, 
            paddingTop: 44,
            backgroundColor: '#FAA',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Button
            onPress={() => navigation.goBack()}
            source={require('img/icon/nav_back.png')}
          />
          <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold',}}>自定义header</Text>
          <Button
            onPress={() => alert('点击')}
            title={'按钮'}
          />
        </View>
      )
    }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeDetailC</Text>
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

export default HomeDetailC