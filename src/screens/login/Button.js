import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Button = ({ title, icon, color, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnLogin,
        { flex: 1,
          marginHorizontal: 4, backgroundColor: bgColor, flexDirection: 'row' },
      ]}
    >
      <Image
        style={{ width: 20, height: 20, marginRight: 8 }}
        source={icon}
      />
      <Text style={[styles.btnTextForget, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnTextForget: {
    fontWeight: 'bold',
  },
  btnLogin: {
    backgroundColor: '#f13b1e',
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
