import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from './login/Input';
import Button from './login/Button';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>LoginScreen</Text>
        <View>
          <Input placeholder="Email ID" />
          <Input placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.forgetContainer}>
          <TouchableOpacity>
            <Text style={styles.btnTextForget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('MainTab')}>
          <Text
            style={[
              styles.btnTextForget,
              { color: 'white', textTransform: 'uppercase' },
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 16, marginBottom: 8 }}>
          or
        </Text>
        <View style={[styles.forgetContainer, {marginHorizontal: -4}]}>
          <Button
            title="Google"
            icon={require('../assets/googleIcon.png')}
            bgColor="orange"
            color="#fff"
          />
          <Button
            title="Facebook"
            icon={require('../assets/facebookIcon.png')}
            bgColor="#3b5998"
            color="#fff"
          />
        </View>
        <View
          style={[
            styles.forgetContainer,
            { justifyContent: 'center', textAlign: 'center' },
          ]}
        >
          <Text>Not yet a member, </Text>
          <TouchableOpacity>
            <Text style={[styles.btnTextForget, { color: '#f13b1e' }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    padding: 16,
  },
  btnTextForget: {
    fontWeight: 'bold',
  },
  forgetContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  btnLogin: {
    backgroundColor: '#f13b1e',
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
