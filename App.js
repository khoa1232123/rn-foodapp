import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Block, Button, TextView } from './components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CartScreen from './src/screens/CartScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTab({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Block
      direction="row"
      color="#fd0014"
      style={{
        paddingBottom: 0,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          if (route.name === 'Home') {
            return 'explore';
          } else if (route.name === 'Cart') {
            return 'shopping-cart';
          } else if (route.name === 'Search') {
            return 'search';
          } else if (route.name === 'Profile') {
            return 'verified-user';
          }
        };

        return (
          <Button
            onPress={onPress}
            onLongPress={onLongPress}
            block={isFocused}
            centered
            middle
          >
            <Block padding={20} direction="row" middle>
              <MaterialIcons
                name={getIcon()}
                color={isFocused ? '#fff' : '#222'}
                size={25}
              />
              {isFocused && (
                <TextView color={isFocused ? '#fff' : '#222'}>
                  {'  '}
                  {label}
                </TextView>
              )}
            </Block>
          </Button>
        );
      })}
    </Block>
  );
}

function MainTab() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'} headerMode="none">
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
