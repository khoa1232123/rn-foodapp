import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ placeholder, secureTextEntry, onChangeText, value }) => {
  return (
    <View>
      <Text style={styles.title}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ebebeb',
  },
  title: {
    marginVertical: 10,
  },
});
