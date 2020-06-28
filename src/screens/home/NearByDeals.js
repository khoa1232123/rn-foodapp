import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Block, Button, TextView } from '../../../components';
import HeaderTop from './HeaderTop';
import foodapp from '../../mooks/foodapp.json';

const W = Dimensions.get('window').width / 2;

const NearByDeals = () => {
  const renderItem = ({ item }) => {
    return (
      <Button margin={8} color="#fff" padding={8} borderRadius={8}>
        <Image style={styles.img} source={{ uri: item.image }} />
        <Block>
          <TextView h6>{item.name}</TextView>
          <TextView color="#aaa" style={{marginBottom: 8}}>By {item.location}</TextView>

          <TextView>{item.price}</TextView>
        </Block>
        <Block style={styles.saleoff}>
          <TextView padding={2} color="#fff" bgColor="red">10% OFF</TextView>
        </Block>
      </Button>
    );
  };
  return (
    <Block>
      <HeaderTop title="Near by Deals" moreTitle="View all" />
      <FlatList horizontal data={foodapp} renderItem={renderItem} />
    </Block>
  );
};

export default NearByDeals;

const styles = StyleSheet.create({
  img: {
    width: W,
    height: (W * 9) / 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  saleoff: {
    position: 'absolute',
    top: 8,
    left: 8
  }
});
