import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SplashBg from '../assets/Splash.jpg';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 1000)
  }, []);
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate('Login');
  }
  return <ImageBackground style={styles.bg} source={SplashBg} />;
};

export default SplashScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
