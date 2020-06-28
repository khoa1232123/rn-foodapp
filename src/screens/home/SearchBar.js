import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, Button, Input } from '../../../components';
import Feather from 'react-native-vector-icons/Feather';
const SearchBar = () => {
  return (
    <Block direction="row" margin={4}>
      <Button color="#fff" margin={4} padding={10} borderRadius={4} shadow>
        <Feather name="map-pin" size={20} />
      </Button>
      <Block
        padding={10}
        margin={4}
        middle
        color="#fff"
        borderRadius={4}
        block
        shadow
        direction="row"
      >
        <Block block centered>
          <Input placeholder={'Search for meals or area'} />
        </Block>
        <Feather name="search" size={20} />
      </Block>
    </Block>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
