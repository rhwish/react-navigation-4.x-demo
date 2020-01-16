import * as React from 'react'
import { Image, Text, StyleSheet } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import {
  Button
} from 'comps'

/**
 * auth
 */
import AuthLoading from './auth/AuthLoading'
import Login from './auth/Login'

/**
 * home
 */
import Home from './home'
import HomeDetailA from './home/DetailA'
import HomeDetailB from './home/DetailB'
import HomeDetailC from './home/DetailC'
import HomeModalDetail from './home/ModalDetail'

/**
 * favorite
 */
import Favorite from './favorite'
import FavoriteDetail from './favorite/Detail'

/**
 * setting
 */
import Setting from './setting'

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
})

const HomeMainStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
    }),
  },
  HomeDetailA: {
    screen: HomeDetailA,
    
  },
  HomeDetailB: {
    screen: HomeDetailB,
  },
  HomeDetailC: {
    screen: HomeDetailC
  }
}, {
  defaultNavigationOptions: ({navigation}) => ({
    
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FAF'
    },
    headerLeft: () => (
      <Button
        onPress={() => navigation.goBack()}
        source={require('img/icon/nav_back.png')}
      />
    ),
  })
})

const HomeStackNavigator = createStackNavigator({
  Main: {
    screen: HomeMainStackNavigator,
  },
  HomeModalDetail: {
    screen: HomeModalDetail
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state.routes[navigation.state.index]
  return {
    tabBarVisible: index === 0, 
  }
}


const FavoriteStackNavigator = createStackNavigator({
  Favorite: {
    screen: Favorite
  },
  Detail: {
    screen: FavoriteDetail
  }
})
FavoriteStackNavigator.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state
  return {
    tabBarVisible: index === 0, 
  }
}


const SettingStackNavigator = createStackNavigator({
  Setting: {
    screen: Setting
  }
})
SettingStackNavigator.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state
  return {
    tabBarVisible: index === 0, 
  }
}


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Favorite: FavoriteStackNavigator,
    Setting: SettingStackNavigator,
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <Image source={TAB_ICON[routeName][focused]} style={styles.icon}/>;
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <Text style={focused ? styles.titleSelected : styles.titleUnselected}>{TAB_TITLE[routeName]}</Text>;
      },
      tabBarOnPress: ({navigation, defaultHandler}) => {
        // navigation：附带导航属性
        // defaultHandler：默认点击事件
        const { routeName } = navigation.state
        defaultHandler()
      },
      tabBarOnLongPress: ({navigation, defaultHandler}) => {
        // navigation：附带导航属性
        // defaultHandler：默认长按事件
        const { routeName } = navigation.state
        alert(`长按${routeName}`)
      },
      // tabBarVisible: false,
      // tabBarButtonComponent: () => React.Node // 自定义icon+title+onPress
    }),
    tabBarOptions: { // 自定义tabBarLabel时此配置不生效
      activeTintColor: '#2179FF',
      inactiveTintColor: '#333333',
      // activeBackgroundColor: 'red',
      // inactiveBackgroundColor: 'green',
      // labelStyle: { // title样式
      //   color: 'yellow'
      // },
      // labelPosition: 'beside-icon', // title位置：beside-icon 在icon右侧， below-icon 在icon下边
      // tabStyle: { // tabbar样式
      //   backgroundColor: 'orange'
      // },
      // keyboardHidesTabBar: false, // 弹出键盘时是否隐藏
      // showIcon: false, // 是否展示icon
      // showLabel: false, // 是否展示标题
    },
  }
)

const RootStackNavigator = createDrawerNavigator({
  TabNavigator: {
    screen: TabNavigator
  }
}, {
  drawerLockMode: 'locked-closed',
  // hideStatusBar: true,
  // statusBarAnimation: true,
  // drawerBackgroundColor: 'pink',
  // drawerWidth: 300,
  edgeWidth: 0,
})

const switchStackNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  App: RootStackNavigator,
  Login: Login
})

export default createAppContainer(switchStackNavigator)


const TAB_TITLE = {
  'Home': '首页',
  'Favorite': '收藏',
  'Setting': '设置',
}

const TAB_ICON = {
  'Home': {
    true: require('img/tab/tabbar_home_selected.png'),
    false: require('img/tab/tabbar_home_unselected.png'),
  },
  'Favorite': {
    true: require('img/tab/tabbar_favorite_selected.png'),
    false: require('img/tab/tabbar_favorite_unselected.png'),
  },
  'Setting': {
    true: require('img/tab/tabbar_setting_selected.png'),
    false: require('img/tab/tabbar_setting_unselected.png'),
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  titleSelected: {
    fontSize: 10, 
    lineHeight: 14,
    color: '#2179FF'
  },
  titleUnselected: {
    fontSize: 10, 
    lineHeight: 14,
    color: '#333333'
  }
})