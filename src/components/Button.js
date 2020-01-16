import * as React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title,
      source,
      onPress,
      containerStyle
    } = this.props
    if (source) {
      return (
        <TouchableOpacity
          activeOpacity={.8}
          disabled={!onPress}
          style={[styles.imgContainer, containerStyle]}
          onPress={() => onPress()}
        >
          <Image source={source}/>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        activeOpacity={.8}
        disabled={!onPress}
        style={[styles.container, containerStyle]}
        onPress={() => onPress()}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 2,
    borderColor: '#2179FF',
    borderWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: '#2179FF',
    fontSize: 14,
  },
  imgContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
})

